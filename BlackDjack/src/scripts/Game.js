import Card from './Card.js';
import Player from './Player.js';
import {setPlayers, shuffle} from './helpers.js';

const listCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Lady', 'King', 'Ace'];
const listSuits = ['club', 'diamond', 'heart', 'spade'];
const cardsCount = document.querySelector('.cardsCount');

export default class Game {
    constructor(players) {
        this.players = players.filter(player => player);
        if (this.players.length === 0) {
            throw new Error('need min 1 player');
        }
        this.cards = [];
        this.cardGenerate();
        this.players = this.playersGenerate(this.players);
        setPlayers(this.players);
        this.firstDealCards();
        this.activePlayer = null;

    }

    cardGenerate() {
        for (let i = 0; i < listCards.length; i++) {
            let raiting = null;
            typeof listCards[i] === 'number' ? raiting = listCards[i] : raiting = 10;
            if (listCards[i] === 'Ace') {
                raiting = 11;
            }
            this.cards.push(new Card({suit: listSuits[0], raiting, name: listCards[i]}));
            this.cards.push(new Card({suit: listSuits[1], raiting, name: listCards[i]}));
            this.cards.push(new Card({suit: listSuits[2], raiting, name: listCards[i]}));
            this.cards.push(new Card({suit: listSuits[3], raiting, name: listCards[i]}));
        }
        this.setCardsCount();
        this.cards = shuffle(this.cards);
    }

    playersGenerate(players) {
        return players.map(player => new Player(player))
    }

    setCardsCount() {
        this.cardsCount = this.cards.length;
        cardsCount.innerHTML = this.cardsCount;
    }

    firstDealCards() {
        this.players.forEach(player => player.getCard(this.cards.pop(), this.cards.pop()))
        this.setCardsCount()
    }
}

