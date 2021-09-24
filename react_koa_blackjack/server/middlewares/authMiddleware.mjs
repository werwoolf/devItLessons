import jwt from "jsonwebtoken";

const report = (e) => {
    console.log(e.message);
};

export const authMiddleware = (ctx, next) => {
    try {
        ctx.state.id = jwt.verify(ctx.request.headers.authorization, 'secret');
    } catch (e) {
        report(e);
        ctx.throw(401, "Unauthorized")
        return;
    }

    next()
}