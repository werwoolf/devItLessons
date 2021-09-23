import jwt from "jsonwebtoken";

export const authMiddleware = (ctx, next) => {
    try {
        const playerToken = ctx.request.headers.authorization;
        const id = jwt.verify(playerToken, 'secret');
        if (!id) {
            throw new Error('unauthorized')
        }
        ctx.state = {...ctx.state, id}
        next()
    } catch (e) {
        ctx.throw(401, e.message)
    }
}