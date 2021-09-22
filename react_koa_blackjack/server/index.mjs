import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import {router} from "./routers.mjs";

const app = new Koa();


app.use(serve('./static'));
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);