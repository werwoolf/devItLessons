import './style.scss';
import Game from './scripts/Game.mjs';
import {visualCreateCard, writeMessage} from './scripts/helpers.mjs';


const startGameButton = document.querySelector('.startGameButton');
const takeCardButton = document.querySelector('.takeCardButton');
const stopGameButton = document.querySelector('.stopGameButton');

const cardsCount = document.querySelector('.cardsCount');
const containerButton = document.querySelector('.buttonContainer');
const startGameContainer = document.querySelector('.startGameContainer');
const playersTables = document.querySelectorAll('.playerTable');
const placeStoreCards = document.querySelectorAll(`.placeStoreCards`);
const playersRatings = document.querySelectorAll('.playerRaiting')
const placesPlayerNames = document.querySelectorAll(`.playerName`);

let game = null;

startGameButton.addEventListener('click', () => {
    game = startGame();
    writeMessage(`now step ${game.activePlayer.name}`);
    actuallyVisual(game)
});

takeCardButton.addEventListener('click', () => {
    if (!game.activePlayer || game.activePlayer.rating > 20) {
        actuallyVisual(game)
        return writeMessage(game.passPlayer());
    }

    game.activePlayer.getCard(game.cards.pop());

    if (!game.activePlayer || game.activePlayer.rating > 20) {
        actuallyVisual(game)
        return writeMessage(game.passPlayer());
    }
    actuallyVisual(game)
});

stopGameButton.addEventListener('click', () => {
    writeMessage(game.passPlayer());
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
    if (game.activeGame) {
        containerButton.style.display = 'flex';
        startGameContainer.style.display = 'none';
    } else {
        containerButton.style.display = 'none';
        startGameContainer.style.display = 'block';
    }

    game.players.forEach((player, index) => {
        playersTables[index].style.display = 'inline-block';
        placeStoreCards[index].innerHTML = '';
        player.cards.forEach(card => placeStoreCards[index].appendChild(visualCreateCard(card)));
        playersRatings[index].innerHTML = player.rating;
        placesPlayerNames[index].innerHTML = player.name;
    });

    cardsCount.innerHTML = game.cards.length;
}