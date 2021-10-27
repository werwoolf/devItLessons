import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import Shopify, {ApiVersion} from "@shopify/shopify-api";
import {createReadStream} from 'fs';
import Koa from "koa";
import Router from "koa-router";
import serve from "koa-static";
import {myCustomShopifyAuth} from "./myCustomShopifyAuth.js";
import jwt from 'jsonwebtoken';
import bodyParser from 'koa-bodyparser';
import axios from "axios";
import mongoose from 'mongoose';
import {activeShopModel} from './activeShopModel.js'

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const server = new Koa();
const router = new Router();
server.use(bodyParser())
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

server.keys = [Shopify.Context.API_SECRET_KEY];

router.post("/webhooks", async (ctx) => {
  try {
    const hookTopic = ctx.request.headers["x-shopify-topic"]
    const shop = ctx.request.headers["x-shopify-shop-domain"]

    if (hookTopic === "app/uninstalled") {
      await activeShopModel.deleteOne({shop})
      console.log('shop deleted')
    }

    ctx.response.status = 200;
    console.log(`Webhook processed, returned status code 200`);
  } catch (error) {
    console.log(`Failed to process webhook: ${error}`);
  }
});

router.post("/graphql",
  async (ctx, next) => {
    try {
      const authToken = ctx.request.headers.authorization.split(' ')[1];
      const params = jwt.verify(authToken, process.env.SHOPIFY_API_SECRET);
      const shop = params.dest.split('//')[1];

      const {access_token} = (await activeShopModel.findOne({shop}))

      if (!access_token) {
        return ctx.throw(401, 'not authorized')
      }

      const response = await axios.post(
        'https://qwertytestst1re2.myshopify.com/admin/api/2021-10/graphql.json',
        ctx.request.body,
        {
          headers: {
            'X-Shopify-Access-Token': access_token
          }
        })
      ctx.body = response.data;

    } catch (e) {
      console.log('ERROR 12333', e.message)
    }
    await next()
  }
);

router.get("(.*)", async (ctx) => {
  const shop = ctx.query.shop;
  const activeShop = (await activeShopModel.findOne({shop}))
  if (!activeShop) {
    ctx.redirect(`/auth?shop=${shop}`);

  } else {
    ctx.type = 'html';
    ctx.body = createReadStream(__dirname + '/static/index.html');
  }
});

server.use(myCustomShopifyAuth)
server.use(serve(__dirname + "/static"));
server.use(router.allowedMethods());
server.use(router.routes());

mongoose.connect('mongodb://localhost:27017', () => console.log('connect to database'));
server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
});
