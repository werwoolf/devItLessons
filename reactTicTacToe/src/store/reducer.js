import {defaultState,add_char,add_winner} from './constants.js'

export default function todos(state = defaultState, action) {
    switch (action.type) {
        case add_char:
            let char, nextStep = null;

            if (state.currentStep === "X") {
                char = 'X';
                nextStep = '0';
            } else {
                char = "0";
                nextStep = 'X';
            }

            let newGameField = state.stateGameField.map(square => square)
            newGameField.splice([action.payload.id], 1, char)

            return {
                ...state,
                stateGameField: newGameField,
                currentStep: nextStep
            }
        case  add_winner:
            return {
                ...state,
                winner: action.payload.winner
            }
        // case : 'default'


        default:
            return state
    }
}
