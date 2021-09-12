import Card from './Card.js';
import Player from './Player.js';
import {shuffle, findMaxRaitingPlayers} from './helpers.js';

const listCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Lady', 'King', 'Ace'];
const listSuits = ['club', 'diamond', 'heart', 'spade'];
const cardsCount = document.querySelector('.cardsCount');

export default class Game {
    constructor(players) {
        this.players = this.playersGenerate(players.filter(player => player));
        if (this.players.length === 0) {
            throw new Error('need min 1 player');
        }
        this.cards = this.cardGenerate();
        this.setCardsCount();

        this.firstDealCards();
        this.activePlayer = findMaxRaitingPlayers(this.players);
        this.indexActivePlayer = this.players.indexOf(this.activePlayer);
    }

    cardGenerate() {
        let cards = []
        for (let i = 0; i < listCards.length; i++) {
            let raiting = null;
            typeof listCards[i] === 'number' ? raiting = listCards[i] : raiting = 10;
            if (listCards[i] === 'Ace') {
                raiting = 11;
            }
            cards.push(new Card({suit: listSuits[0], raiting, name: listCards[i]}));
            cards.push(new Card({suit: listSuits[1], raiting, name: listCards[i]}));
            cards.push(new Card({suit: listSuits[2], raiting, name: listCards[i]}));
            cards.push(new Card({suit: listSuits[3], raiting, name: listCards[i]}));
        }
        return shuffle(cards);
    }

    playersGenerate(players) {
        return players.map(player => new Player({name: player, id: players.indexOf(player)}))
    }

    setCardsCount() {
        this.cardsCount = this.cards.length;
        cardsCount.innerHTML = this.cardsCount;
    }

    firstDealCards() {
        this.players.forEach(player => player.getCard([this.cards.pop(), this.cards.pop()]))
        this.setCardsCount()
    }

}

