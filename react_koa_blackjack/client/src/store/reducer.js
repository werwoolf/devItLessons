import {setGame, addMessage, startGame, getCard, pass} from "./actions";
import {handleActions} from 'redux-actions';
import axios from "axios";


const defaultState = {};

const handleActualGame = (state, action) => {
    return action.payload
}

const handleMessage = (state, action) => {
    return {...state, message: action.payload}
}

const handleStartGame = async (state, action) => {
    let game = null;
    try {
        const players = action.payload.filter(player => player)
        game = (await axios.post('http://localhost:3000/start', players)).data;

        if (typeof game === 'string') {
            throw game
        }
    } catch (e) {
        addMessage(e)
    }
    return game
}

const handleGetCard = (state, action) => {
    return {message: action.payload}
}

const handlePass = (state, action) => {
    return {message: action.payload}
}


export const reducer = handleActions({
    [setGame]: handleActualGame,
    [addMessage]: handleMessage,
    [startGame]: handleStartGame,
    [getCard]: handleGetCard,
    [pass]: handlePass
}, defaultState)