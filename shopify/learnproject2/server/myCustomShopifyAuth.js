export const myCustomShopifyAuth = (ctx, middleware) => {

  console.log('ctx in custom auth', ctx)
  middleware.afterAuth(ctx)
}
