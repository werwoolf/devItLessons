import Game from "../src/Game.mjs";
import jwt from "jsonwebtoken";
import {v4 as createUniq} from "uuid";
import GameModel from "../Models/GameModel.mjs";

export const games = {};

export const startGameController = ctx => {
    try {
        const players = ctx.request.body.players;
        if (!players.length) {
            throw new Error('For start game need minimum 1 player');
        }

        if (ctx.request.headers.authorization) {
            const id = jwt.verify(ctx.request.headers.authorization, 'secret');

            games[id] = new Game(players);
            ctx.response.body = {'Game': games[id], 'authorization': ctx.request.headers.authorization};

            return;
        }

        const id = createUniq();
        const token = jwt.sign(id, 'secret');

        games[id] = new Game(players);

        ctx.response.body = {'Game': games[id], 'authorization': token};
    } catch (e) {
        ctx.throw(422, e.message);
    }
}

export const getCardController = async ctx => {
    const id = ctx.state.id;
    const game = games[id];

    try {
        if (!game || !game.activeGame) {
            ctx.throw(422, 'Game not active');
            return;
        }

        if (!game.activePlayer || game.activePlayer.rating > 20) {
            game.passPlayer();
        }

        game.activePlayer.getCard(game.cards.pop());

        if (!game.activePlayer || game.activePlayer.rating > 20) {
            game.passPlayer();
        }

        if(game.winner){
            const {winner, players} = game;
            const gameData = {winner, players, clientId: id};
            await GameModel.create(gameData);
        }

        ctx.body = game;
    } catch (e) {
        ctx.throw(500, 'Internal server error');
    }
}

export const passController = async ctx => {
    const id = ctx.state.id;
    const game = games[id];

    try {
        if (!game || !game.activeGame) {
            throw new Error('Game not active')
        }
        game.passPlayer();

        if(game.winner){
            const {winner, players} = game;
            const gameData = {winner, players, clientId: id};
            await GameModel.create(gameData);
        }

        ctx.body = game;
    } catch (e) {
        ctx.throw(422, 'Game not active');
    }
}

export const findGameController = async ctx => {
    try {
        ctx.body = (await GameModel.find({clientId:ctx.state.id})).reverse();
    } catch (e) {
        ctx.throw (422, 'not have game')
    }
}

