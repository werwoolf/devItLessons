export default function todos(state , action) {
    switch (action.type) {
        case 'ADD_0':
            console.log(stateGameField)
            return state.stateGameField[action.payload.id] = 0;
        case 'ADD_X':
            return state.stateGameField[action.payload.id] = 'X';

        default:
            return state
    }
}
