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