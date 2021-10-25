import * as qs from "querystring";
import pick from "lodash/pick";
import axios from "axios"
import dotenv from "dotenv";
import session from 'koa-session'

dotenv.config();

export const myCustomShopifyAuth = async (ctx, next, middleware) => {
  try {

    const {shop} = pick(qs.parse(ctx.request.url.split('?')[1]), 'shop') || ctx.query;
    const {code} = pick(qs.parse(ctx.request.url.split('?')[1]), 'code') || ctx.query;
    const {hmac} = pick(qs.parse(ctx.request.url.split('?')[1]), 'hmac') || ctx.query;

    ctx.state = {shopify: {'shop': shop}};

    if (shop && !code && !hmac) {
      return ctx.redirect(`https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=read_products,write_orders,read_customers&redirect_uri=${process.env.HOST}/auth/callback&state=shjbkhghjl,op&grant_options[]=per-user`)
    }

    if (code) {
      const resp = await axios.post(`https://${shop}/admin/oauth/access_token`,
        {
          client_id: '70908b7a4acc791eb4905564e8bd965e',
          client_secret: "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",
          code
        })

      const {scope, access_token} = resp.data
      ctx.state.shopify.accessToken = access_token
      ctx.state.shopify.scope = scope
      ctx.set('X-Shopify-Access-Token', access_token)

      // ctx.session.access_token = access_token;
      // ctx.session.shop = shop;
    }


    await middleware.afterAuth(ctx, next);
  } catch (e) {
    console.log('error is :::::', e.message)
  }
  await next()
}
