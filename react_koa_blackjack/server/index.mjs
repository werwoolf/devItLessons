import Koa from 'koa'
import Router from '@koa/router'
import serve from 'koa-static'
import Game from "./src/Game.mjs";

const app = new Koa();
const router = new Router()

router.get('/getcard', (ctx, next) => {
    ctx.body = 'getcard';
})

router.get('/pass', (ctx, next) => {
    ctx.body = 'pass';
})

router.post('/', (ctx, next) => {

})

app.use(serve('./static'))
app.use(router.routes())
app.listen(3000);