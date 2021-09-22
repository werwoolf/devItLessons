import Game from "../src/Game.mjs";

const games = {};

export const startGameController = ctx => {
    const id = ctx.state;
    try {
        if (games[id] === undefined || !games[id].activeGame) {
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
}

export const getCardController = ctx => {
    const id = ctx.state;
    const game = games[id];
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
}

export const passController = ctx => {
    const id = ctx.state;
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
