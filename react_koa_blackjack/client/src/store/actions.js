import {createAction} from "redux-actions";


export const setGame = createAction('GET_GAME', state => state);
export const addMessage = createAction('ADD_MESSAGE', message => message);
