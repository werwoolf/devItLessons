import {getGame, addMessage} from "./actions";
import {handleActions} from 'redux-actions';


const defaultState={};

const handleActualGame = (state, action) => {
    return {...action.payload}
}
const handleMessage = (state, action) => {
    return {...state,...action.payload}
}

export const reducer = handleActions({
    [getGame]: handleActualGame,
    [addMessage]: handleMessage
}, defaultState)