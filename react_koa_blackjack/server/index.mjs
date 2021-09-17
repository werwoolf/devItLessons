import Koa from 'koa'
import Router from '@koa/router'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Game from "./src/Game.mjs";

const app = new Koa();
const router = new Router()


let game = null;

router.post('/', (ctx, next) => {
    const players = ctx.request.body;
    game = new Game(players);
    ctx.body = game;
})

router.get('/getcard',(ctx=>{
    game.activePlayer.getCard(game.cards.pop());
    ctx.body = game;
}))

app.use(bodyParser());
app.use(serve('./static'))
app.use(router.routes())
app.listen(3000);