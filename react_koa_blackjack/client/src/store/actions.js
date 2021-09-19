import {createAction} from "redux-actions";


export const getGame = createAction('GET_GAME', state => state);
export const addMessage = createAction('ADD_MESSAGE', message => message);
