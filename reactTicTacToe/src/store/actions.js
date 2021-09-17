import {ADD_CHAR, RESET_STATE} from './constants.js'

export function add(id) {
    return {type: ADD_CHAR, payload: {id}}
}

export function resetState() {
    return {type: RESET_STATE}
}