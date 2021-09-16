import {ADD_CHAR, ADD_WINNER, RESET_STATE} from './constants.js'

export function add(id) {
    return {type: ADD_CHAR, payload: {id}}
}

export function addWinner(winner) {
    return {type: ADD_WINNER, payload: {winner}}
}

export function resetState() {
    return {type: RESET_STATE}
}