import Card from './Card.mjs';
import Player from './Player.mjs';
import {shuffle, findMaxRaitingPlayers, separatePlayers} from './helpers.mjs';

const listCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Lady', 'King', 'Ace'];
const listSuits = ['club', 'diamond', 'heart', 'spade'];

export default class Game {
    constructor(players) {
        this.activeGame = true;
        this.cards = this.cardGenerate();
        this.players = this.playersGenerate(players);
        this.firstDealCards();

        this.canStep = this.players.filter(player => player.rating < 21);

        if (this.players.length === 0) {
            throw new Error('need min 1 player');
        }

        this.activePlayer = findMaxRaitingPlayers(this.canStep)[0];
    }

    cardGenerate() {
        let cards = []
        for (let i = 0; i < listCards.length; i++) {
            let rating = null;
            typeof listCards[i] === 'number' ? rating = listCards[i] : rating = 10;
            if (listCards[i] === 'Ace') {
                rating = 11;
            }
            cards.push(new Card({suit: listSuits[0], rating, name: listCards[i]}));
            cards.push(new Card({suit: listSuits[1], rating, name: listCards[i]}));
            cards.push(new Card({suit: listSuits[2], rating, name: listCards[i]}));
            cards.push(new Card({suit: listSuits[3], rating, name: listCards[i]}));
        }
        return shuffle(cards);
    }

    playersGenerate(players) {
        return players.map(player => new Player({name: player, id: players.indexOf(player)}))
    }

    firstDealCards() {
        this.players.forEach(player => player.getCard([this.cards.pop(), this.cards.pop()]));
    }

    passPlayer() {
        this.canStep.splice(this.canStep.indexOf(this.activePlayer), 1);

        if (this.canStep.length === 0) {
            this.activePlayer = null;
            return this.endGame()
        }

        if (this.canStep.indexOf(this.activePlayer) + 1) {
            this.activePlayer = this.canStep[this.canStep.indexOf(this.activePlayer)];
        } else {
            this.activePlayer = this.canStep[0];
        }

        return `now step ${this.activePlayer.name}`;


    }

    endGame() {
        let winner = null;
        let listHave21 = [];
        findMaxRaitingPlayers(this.players);
        this.players.forEach(player => player.rating === 21 ? listHave21.push(player.name) : player);
        this.activeGame = false;

        if (listHave21.length) {
            winner = listHave21;
            return (`${winner} is Winner`);
        }

        if (separatePlayers(this.players).listRaitingUnder21.length) {
            winner = separatePlayers(findMaxRaitingPlayers(this.players)).listRaitingUnder21[0].name;
            return `${winner} is Winner`;
        }

        winner = separatePlayers(findMaxRaitingPlayers(this.players)).listRaitingUpper21.reverse()[0].name;

        return `${winner} is Winner`;
    }
}