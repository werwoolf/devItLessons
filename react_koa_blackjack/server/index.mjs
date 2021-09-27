import Koa from 'koa';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import {router} from "./routers.mjs";
import mongoose from 'mongoose';

const PORT = 3000
const app = new Koa();

app.use(serve('./static'));
app.use(bodyParser());
app.use(router.routes());

mongoose.connect('mongodb://localhost:27017', () => console.log('connect'));
app.listen(PORT, () => console.log(`start on ${PORT}`));