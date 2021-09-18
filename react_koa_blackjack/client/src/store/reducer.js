import {getGame} from "./actions";
import {handleActions} from 'redux-actions';


const defaultState={};

const handleActualGame = (state, action) => {
    const actualState = {...action.payload}
    return actualState
}

export const reducer = handleActions({
    [getGame]: handleActualGame
}, defaultState)