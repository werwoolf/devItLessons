import Koa from 'koa'
import Router from '@koa/router'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Game from "./src/Game.mjs";

const app = new Koa();
const router = new Router()

let game = null;

router.post('/start', (ctx, next) => {
    const players = ctx.request.body;
    game = new Game(players);
    ctx.response.body = game;
})

router.get('/getcard', (ctx, next) => {

    if (!game.activeGame) {
        return ctx.response.body = game;
    }

    if (!game.activePlayer || game.activePlayer.rating > 20) {
        game.passPlayer();
        ctx.response.body = game;
    }

    game.activePlayer.getCard(game.cards.pop());

    if (!game.activePlayer || game.activePlayer.rating > 20) {
        game.passPlayer();
        ctx.response.body = game;
    }
    ctx.response.body = game;
})

router.get('/pass', (ctx, next) => {
    if (!game.activeGame) {
        return ctx.response.body = game;
    }

    game.passPlayer();
    ctx.response.body = game;
})


app.use(bodyParser());

app.use(serve('./static'))
app.use(router.routes())
app.listen(3000);