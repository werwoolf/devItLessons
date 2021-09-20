import {createAction} from "redux-actions";


export const setGame = createAction('GET_GAME', state => state);
export const addMessage = createAction('ADD_MESSAGE', message => message);
export const startGame = createAction('START_GAME',players => players);
export const getCard = createAction('GET_CARD');
export const pass = createAction('PASS');
