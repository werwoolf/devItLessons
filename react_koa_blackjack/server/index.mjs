import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import {router} from "./routers.mjs";
import jwt from "jsonwebtoken";

const app = new Koa();

const token = jwt.sign({foo: 'bar'}, 'shhhhh');


app.use(bodyParser());
app.use(router.routes());
app.use(serve('./static'));


app.listen(3000);