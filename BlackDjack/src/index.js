import './style.scss';
import Game from './scripts/Game.js';
import {visualCreateCard} from './scripts/helpers.js';

const startGameButton = document.querySelector('.startGameButton');
const takeCardButton = document.querySelector('.takeCardButton');
const stopGameButton = document.querySelector('.stopGameButton');

const cardsCount = document.querySelector('.cardsCount');
const containerButton = document.querySelector('.buttonContainer');
const startGameContainer = document.querySelector('.startGameContainer');
const playerTables = document.querySelectorAll('.playerTable');

let game = null;

startGameButton.addEventListener('click', () => {
    game = startGame();
    actuallyVisual(game)
});

takeCardButton.addEventListener('click', () => {
    if (!game.activePlayer || game.activePlayer.rating > 20) {
        actuallyVisual(game)
        return game.passPlayer();
    }

    game.activePlayer.getCard(game.cards.pop());

    if (!game.activePlayer || game.activePlayer.rating > 20) {
        actuallyVisual(game)
        return game.passPlayer();
    }
    actuallyVisual(game)
});

stopGameButton.addEventListener('click', () => {
    game.passPlayer();
    actuallyVisual(game)

});


function startGame() {

    const playerN1 = document.querySelector('.inputPlayer.n1');
    const playerN2 = document.querySelector('.inputPlayer.n2');
    const playerN3 = document.querySelector('.inputPlayer.n3');
    const playerN4 = document.querySelector('.inputPlayer.n4');

    const players = [playerN1.value, playerN2.value, playerN3.value, playerN4.value].filter(player => player)

    return new Game(players);
}

function actuallyVisual(game) {
    console.log(game)
    const playerTables = document.querySelectorAll('.')
    cardsCount.innerHTML = game.cards.length;



}