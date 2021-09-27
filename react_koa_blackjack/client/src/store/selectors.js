import {createSelector} from "reselect";

export const game = state => state.game;
export const authorization = state => state.authorization;
export const loading = state => state.loading;
export const message = state => state.message;
export const listClientGames = state => state.listClientGames;


export const winner = createSelector(
    game, (game) => game.winner
);

export const activeGame = createSelector(
    game, (game) => game.activeGame
);

export const activePlayer = createSelector(
    game, (game) => game.activePlayer
);

export const cards = createSelector(
    game, (game) => game.cards
);

export const cardsCount = createSelector(
    cards, (cards) => cards.length
);

export const players = createSelector(
    game, (game) => game.players
);

export const playersName = createSelector(
    game, (game) => {
        return game.players.map(player => player.name)
    }
);

