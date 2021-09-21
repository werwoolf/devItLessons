export const authMiddleware = (ctx,next) => {
    console.log(ctx.request)
    
    next()
}