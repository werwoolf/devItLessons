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


dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
export const ACTIVE_SHOPIFY_SHOPS = {};

const server = new Koa();
const router = new Router();

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
server.use(bodyParser())

server.use(myCustomShopifyAuth)

server.use(serve(__dirname + "/static"));


router.post("/webhooks", async (ctx) => {
  try {
    await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
    console.log(`Webhook processed, returned status code 200`);
  } catch (error) {
    console.log(`Failed to process webhook: ${error}`);
  }
});

router.post("/graphql",
  async (ctx, next) => {
    try {
      console.log(ctx.state, 'QUERY')
      let {shop} = ctx.query
      for (let activeShop in ACTIVE_SHOPIFY_SHOPS) {
        shop = activeShop
      }

      const authToken = ctx.request.headers.authorization.split(' ')[1]
      const headers = jwt.verify(authToken, process.env.SHOPIFY_API_SECRET);

      const accessToken = ACTIVE_SHOPIFY_SHOPS[shop];

      console.log(accessToken)

      const response = await axios.post(
        'https://qwertytestst1re2.myshopify.com/admin/api/2021-10/graphql.json',
        ctx.request.body,
        {
          headers: {
            'X-Shopify-Access-Token': accessToken
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
  if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
    console.log('redirect')
    ctx.redirect(`/auth?shop=${shop}`);

  } else {
    console.log('return html')
    ctx.type = 'html';
    ctx.body = createReadStream(__dirname + '/static/index.html');

  }
});


server.use(router.allowedMethods());
server.use(router.routes());
server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});


