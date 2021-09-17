import {createAction} from "redux-actions";

export const add = createAction('ADD_CHAR', (id) => ({id}));

export const resetState = createAction('RESET_STATE');