import Game from "../src/Game.mjs";
import jwt from "jsonwebtoken";
import {v4 as createUniq} from "uuid";

export const games = {};

export const startGameController = ctx => {
    try {
        const players = ctx.request.body.players;
        if (!players.length) {
            throw new Error('For start game need minimum 1 player');
        }

        if (ctx.request.headers.authorization) {
            const id = jwt.verify(ctx.request.headers.authorization, 'secret');
            console.log(ctx.request.headers.authorization)
            games[id] = new Game(players);
            ctx.response.body = {'Game': games[id], 'authorization': ctx.request.headers.authorization};

            return
        }

        const id = createUniq();
        const token = jwt.sign(id, 'secret');

        games[id] = new Game(players);

        ctx.response.body = {'Game': games[id], 'authorization': token};
    } catch (e) {
        ctx.throw(422, e.message);
    }
}

export const getCardController = ctx => {
    const id = ctx.state.id;
    const game = games[id];
    try {
        if (!game || !game.activeGame) {
            ctx.throw(422, 'Game not active');
            return;
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
        ctx.body = 'Internal server error'
        ctx.throw(500, 'Internal server error');
    }
}

export const passController = ctx => {
    const id = ctx.state.id;
    const game = games[id];

    try {
        if (!game || !game.activeGame) {
            throw new Error('Game not active')
        }
        game.passPlayer();
        ctx.response.body = game;
    } catch (e) {
        ctx.response.body = e.message;
    }

}



