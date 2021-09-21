import {addMessage, startGame, getCard, pass} from "./actions";
import {handleActions} from 'redux-actions';

const defaultState = {
    loading: false,
    message: 'For starting game type names players and click button "START GAME"',
    game: {
        cards: [],
        players: [],
        winner: null,
        activePlayer: null
    }
};

const handleMessage = (state, action) => {
    return {...state, message: action.payload}
}

const handleStartGame = (state) => {
    return {...state, loading: true};
}

const handleStartGameSuccess = (state, {payload: {data}}) => {
    return {...state, game: data, loading: false, message: false};
}

const handleStartGameFail = (state, {error: {response: {data}}}) => {
    console.log(data)
    return {...state, loading: false, message: data};
}

const handleGetCard = (state) => {
    return {...state, loading: true}
}

const handleGetCardSuccess = (state, {payload: {data}}) => {
    return {...state, game: data, loading: false}
}

const handleGetCardFail = (state) => {
    return {...state, loading: false}
}

const handlePass = (state) => {
    return {...state, loading: true}
}

const handlePassSuccess = (state, {payload: {data}}) => {
    return {...state, game: data, loading: false}
}

const handlePassFail = (state) => {
    return {...state, loading: false}
}

export const reducer = handleActions({
    [addMessage]: handleMessage,
    [startGame]: handleStartGame,
    [startGame.success]: handleStartGameSuccess,
    [startGame.fail]: handleStartGameFail,
    [getCard]: handleGetCard,
    [getCard.success]: handleGetCardSuccess,
    [getCard.fail]: handleGetCardFail,
    [pass]: handlePass,
    [pass.success]: handlePassSuccess,
    [pass.fail]: handlePassFail,
}, defaultState)