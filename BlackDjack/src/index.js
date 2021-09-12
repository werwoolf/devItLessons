import './style.scss';
import Card from './scripts/Card.js';
import Game from './scripts/Game.js';
import Player from './scripts/Player.js';


const startGameButton = document.querySelector('.startGameButton');
const takeCardButton = document.querySelector('.takeCardButton');
const stopGameButton = document.querySelector('.stopGameButton');

let game = null;

startGameButton.addEventListener('click', () => {
    game = startGame();
    console.log(game);
});
takeCardButton.addEventListener('click', () => {
    game.activePlayer.getCard(game.cards.pop());
    game.setCardsCount();
    console.log(game.activePlayer)
});



function startGame() {

    const playerN1 = document.querySelector('.inputPlayer.n1');
    const playerN2 = document.querySelector('.inputPlayer.n2');
    const playerN3 = document.querySelector('.inputPlayer.n3');
    const playerN4 = document.querySelector('.inputPlayer.n4');

    return new Game([playerN1.value, playerN2.value, playerN3.value, playerN4.value]);
}


