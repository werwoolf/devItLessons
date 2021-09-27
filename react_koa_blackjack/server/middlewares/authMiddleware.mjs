import jwt from "jsonwebtoken";

export const authMiddleware = async (ctx, next) => {
    try {
        ctx.state.id = jwt.verify(ctx.request.headers.authorization, 'secret');
    } catch (e) {
        ctx.throw(401, "Unauthorized")
    }

    await next()
}