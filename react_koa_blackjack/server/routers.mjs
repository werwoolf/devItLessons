import Router from '@koa/router'
import Game from "./src/Game.mjs";
import {authMiddleware} from "./middlewares/authMiddleware.mjs";

export const router = new Router()

let games = {};

let game = null;

router.post('/start', authMiddleware, ctx => {
    const id = ctx.state;
    try {
        if (games[id] === undefined) {
            const players = ctx.request.body.players;

            if (!players.length) {
                throw new Error('For start game need minimum 1 player');
            }
            games[id] = new Game(players)
        }
        ctx.response.body = games[id];
    } catch (e) {
        ctx.throw(422, e.message)
    }
})

router.get('/getcard', authMiddleware, (ctx) => {
    try {
        if (!game || !game.activeGame) {
            throw new Error('Game not active')
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
    } catch (e) {
        ctx.response.body = e.message;
    }
})

router.get('/pass', authMiddleware, (ctx) => {
    try {
        if (!game || !game.activeGame) {
            throw new Error('Game not active')
        }
        game.passPlayer();
        ctx.response.body = game;
    } catch (e) {
        ctx.response.body = e.message;
    }

})