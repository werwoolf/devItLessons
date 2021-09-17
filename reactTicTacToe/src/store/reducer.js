import {checkWinner} from "../helpers.js";
import {handleActions} from 'redux-actions';
import {add, resetState} from "./actions.js";

const defaultState = {
    stateGameField: ['', '', '', '', '', '', '', '', ''],
    currentStep: 'X',
    winner: null
};

const handleAddChar = (state, action) => {
    let stateGameField = [...state.stateGameField];
    stateGameField[action.payload.id] = state.currentStep;

    return {
        ...state,
        stateGameField,
        currentStep: state.currentStep === "X" ? '0' : 'X',
        winner: checkWinner(stateGameField)
    }
}

const handleReset = () => defaultState;

export const todos = handleActions(
    {
        [add]: handleAddChar,
        [resetState]: handleReset
    },
    defaultState
);