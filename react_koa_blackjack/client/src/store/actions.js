import {createAction} from "redux-actions";


export const setGame = createAction('GET_GAME', state => state);
export const addMessage = createAction('ADD_MESSAGE', message => message);
// export const startGame = createAction('START_GAME',players => players);

export const startGame = createAction('test', players => {
    return {
        types: ['LOAD', 'AWESOME', 'OH_NO'],
        method: 'post',
        payload: {
            request: {
                url: '/start',
            },
        }
    }
})

export const getCard = createAction('GET_CARD');
export const pass = createAction('PASS');
