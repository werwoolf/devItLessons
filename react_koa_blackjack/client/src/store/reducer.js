import {
    addMessage,
    startGame,
    getCard,
    pass,
    setGame,
    abortGame,
    findGames,
    deleteGamesList
} from "./actions";
import {handleActions} from 'redux-actions';

const defaultState = {
    authorization: localStorage.getItem('authorization'),
    loading: false,
    message: 'For starting game type names players and click button "START GAME"',
    listClientGames: null,
    game: {
        cards: [],
        players: [],
        winner: null,
        activePlayer: null
    }
};

const handleMessage = (state, action) => {
    return {...state, message: action.payload};
}

const handleAbortGame = () => {
    return defaultState;
}

const handleDeleteGamesList = state => {
    return {...state, listClientGames: null};
}

const handleSetGame = state => {
    return {...state, loading: true};
}

const handleSetGameSuccess = (state, {payload: {data}}) => {
    return {...state, game: data, loading: false, message: false};
}

const handleSetGameFail = (state) => {
    return {...state, loading: false, message: false};
}

const handleFindGames = state => {
    return {...state, loading: true, message: 'search your games'};
}

const handleFindGamesSuccess = (state, {payload: {data}}) => {
    return {...state, listClientGames: data, loading: false, message: false};
}

const handleFindGamesFail = state => {
    return {...state, loading: false, message: 'cant find your games'};
}

const handleStartGame = (state) => {
    return {...state, loading: true};
}

const handleStartGameSuccess = (state, {payload: {data}}) => {
    localStorage.setItem('authorization', data.authorization);
    return {...state, game: data.Game, authorization: data.authorization, loading: false, message: false};
}

const handleStartGameFail = (state, {error: {response: {data}}}) => {
    return {...state, message: data, loading: false};
}

const handleGetCard = (state) => {
    return {...state, loading: true};
}

const handleGetCardSuccess = (state, {payload: {data}}) => {
    return {...state, game: data, loading: false};
}

const handleGetCardFail = (state) => {
    return {...state, loading: false};
}

const handlePass = (state) => {
    return {...state, loading: true};
}

const handlePassSuccess = (state, {payload: {data}}) => {
    return {...state, game: data, loading: false};
}

const handlePassFail = (state) => {
    return {...state, loading: false};
}

export const reducer = handleActions({
    [addMessage]: handleMessage,
    [abortGame]: handleAbortGame,
    [deleteGamesList]: handleDeleteGamesList,

    [setGame]: handleSetGame,
    [setGame.success]: handleSetGameSuccess,
    [setGame.fail]: handleSetGameFail,

    [findGames]: handleFindGames,
    [findGames.success]: handleFindGamesSuccess,
    [findGames.fail]: handleFindGamesFail,

    [startGame]: handleStartGame,
    [startGame.success]: handleStartGameSuccess,
    [startGame.fail]: handleStartGameFail,

    [getCard]: handleGetCard,
    [getCard.success]: handleGetCardSuccess,
    [getCard.fail]: handleGetCardFail,

    [pass]: handlePass,
    [pass.success]: handlePassSuccess,
    [pass.fail]: handlePassFail,

}, defaultState);