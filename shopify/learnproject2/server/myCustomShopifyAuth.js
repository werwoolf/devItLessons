import axios from "axios";
import dotenv from "dotenv";
import {activeShopModel} from './activeShopModel.js'
import Shopify, {DataType} from '@shopify/shopify-api';

dotenv.config();

export const myCustomShopifyAuth = async (ctx, next) => {
  try {
    const {shop, code} = ctx.query;

    const activeShop = await activeShopModel.findOne({shop})

    if (shop && !activeShop && !code) {
      return ctx.redirect(`https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=read_products,write_products,write_orders,read_customers,read_products&redirect_uri=${process.env.HOST}/auth/callback`)
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
      const client = new Shopify.Clients.Rest(shop, access_token);
      await client.post({
        path: 'webhooks',
        data: {
          "webhook": {
            "topic": "app/uninstalled",
            "address": `${process.env.HOST}/webhooks`,
            "format": "json",
            "fields": ["id", "note"]
          }
        },
        type: DataType.JSON,
      });


      await activeShopModel.create({shop, access_token});

      ctx.redirect(`/?shop=${shop}&host=${host}`);
    }

  } catch (e) {
    console.log('error is :::::', e.message)
  }

  await next()
}
