import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import Router from "koa-router";
import serve from "koa-static";

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const ACTIVE_SHOPIFY_SHOPS = {};
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
server.use(
  createShopifyAuth({
    async afterAuth(ctx) {
      // Access token and shop available in ctx.state.shopify
      const { shop, accessToken, scope } = ctx.state.shopify;
      const host = ctx.query.host;
      ACTIVE_SHOPIFY_SHOPS[shop] = scope;

      const response = await Shopify.Webhooks.Registry.register({
        shop,
        accessToken,
        path: "/webhooks",
        topic: "APP_UNINSTALLED",
        webhookHandler: async (topic, shop, body) =>
          delete ACTIVE_SHOPIFY_SHOPS[shop],
      });

      if (!response.success) {
        console.log(
          `Failed to register APP_UNINSTALLED webhook: ${response.result}`
        );
      }

      // Redirect to app with shop parameter upon auth
      ctx.redirect(`/?shop=${shop}&host=${host}`);
    },
  })
);

server.use(serve(__dirname + "/../static"));

router.post("/webhooks", async (ctx) => {
  try {
    await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
    console.log(`Webhook processed, returned status code 200`);
  } catch (error) {
    console.log(`Failed to process webhook: ${error}`);
  }
});

router.post(
  "/graphql",
  verifyRequest({ returnHeader: true }),
  async (ctx, next) => {
    await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
  }
);

server.use(router.allowedMethods());
server.use(router.routes());
server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
