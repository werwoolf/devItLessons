import {setGame, addMessage} from "./actions";
import {handleActions} from 'redux-actions';


const defaultState = {};

const handleActualGame = (state, action) => {
    return {...action.payload}
}
const handleMessage = (state, action) => {
   return  {message:action.payload}
}

export const reducer = handleActions({
    [setGame]: handleActualGame,
    [addMessage]: handleMessage
}, defaultState)