export const cardsCount = state => {
    if (!state.cards) {
        return 0;
    }
    return state.cards.length;
}
export const players = state => {
    if (!state.players) {
        return null;
    }
    return state.players;
}
export const winner = state =>  state.winner;
export const activeGame = state =>  state.activeGame;
export const activePlayer = state =>  state.activePlayer;
export const message = state =>  state.message;






