import axios from "axios";
import dotenv from "dotenv";
import {ACTIVE_SHOPIFY_SHOPS} from './server.js';

dotenv.config();

export const myCustomShopifyAuth = async (ctx, next) => {
    try {
        const {shop, hmac} = ctx.query;
        const code = ctx.query.code || ACTIVE_SHOPIFY_SHOPS[shop];
        ctx.state.shop = shop
        if (shop && !ACTIVE_SHOPIFY_SHOPS[shop] && !code) {
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
            const host = ctx.query.host;
            ACTIVE_SHOPIFY_SHOPS[shop] = access_token;

            ctx.redirect(`/?shop=${shop}&host=${host}`);
        }
    } catch (e) {
        console.log('error is :::::', e.message)
    }

    await next()
}
