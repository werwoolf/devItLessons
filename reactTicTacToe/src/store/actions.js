export function add(id) {
    return {type: 'add_char', payload: {id}}
}

export function addWinner(winner) {
    return {type: 'add_winner', payload: {winner}}
}

export function defaultState(){
    return{type:'default'}
}