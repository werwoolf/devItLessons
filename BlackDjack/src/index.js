import './style.scss';
import Game from './scripts/Game.js';

const startGameButton = document.querySelector('.startGameButton');
const takeCardButton = document.querySelector('.takeCardButton');
const stopGameButton = document.querySelector('.stopGameButton');

let game = null;

startGameButton.addEventListener('click', () => {
    game = startGame();
    console.log(game);
});

takeCardButton.addEventListener('click', () => {

    if (!game.activePlayer || game.activePlayer.rating > 20) {
        return game.passPlayer();
    }

    game.activePlayer.getCard(game.cards.pop());

    if (!game.activePlayer || game.activePlayer.rating > 20) {
        return game.passPlayer();
    }
    game.setCardsCount();

});

stopGameButton.addEventListener('click', () => {
    game.passPlayer();
});


function startGame() {

    const playerN1 = document.querySelector('.inputPlayer.n1');
    const playerN2 = document.querySelector('.inputPlayer.n2');
    const playerN3 = document.querySelector('.inputPlayer.n3');
    const playerN4 = document.querySelector('.inputPlayer.n4');

    const players = [playerN1.value, playerN2.value, playerN3.value, playerN4.value].filter(player => player)

    return new Game(players);
}





setTimeout(()=> , 100)