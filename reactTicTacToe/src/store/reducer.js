import {ADD_CHAR, ADD_WINNER, RESET_STATE} from './constants.js'

const defaultState = {
    stateGameField: ['', '', '', '', '', '', '', '', ''],
    currentStep: 'X',
    winner: null
};

export default function todos(state = defaultState, action) {
    switch (action.type) {
        case ADD_CHAR:
            let nextStep = null;

            if (state.currentStep === "X") {
                nextStep = '0';
            } else {
                nextStep = 'X';
            }

            let stateGameField = [...state.stateGameField];
            stateGameField[action.payload.id] = state.currentStep;

            return {
                ...state,
                stateGameField,
                currentStep: nextStep
            }

        case  ADD_WINNER:
            return {
                ...state,
                winner: action.payload.winner
            }

        case  RESET_STATE:
            return defaultState;

        default:
            return state
    }
}
