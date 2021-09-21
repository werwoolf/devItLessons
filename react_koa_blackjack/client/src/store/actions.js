import {createAction} from "redux-actions";
import {createRequestAction} from "../helpers/createRequestAction.js";

export const addMessage = createAction('ADD_MESSAGE', message => message);

export const startGame = createRequestAction('START_GAME', players => ({
    request: {
        url: '/start',
        method: 'post',
        data: {
            players
        },
        headers: {'token': localStorage.getItem('token')},
    }
}));

export const getCard = createRequestAction('GET_CARD', () => ({
    request: {
        url: '/getcard',

    }
}));

export const pass = createRequestAction('PASS', () => ({
    request: {
        url: '/pass',
    }
}));


