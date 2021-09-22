import jwt from "jsonwebtoken";
import {v4 as createUniq} from "uuid";

export const authMiddleware = (ctx, next) => {
    if (ctx.request.headers.token === 'null' || !ctx.request.headers.token) {
        const id = createUniq();
        const token = jwt.sign(id, 'secret');

        ctx.set({'token': token});
        ctx.state = id;
        next();
        return;
    }
    ctx.state = jwt.verify(ctx.request.headers.token, 'secret')
    next();
}