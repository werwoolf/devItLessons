import {visualCreateCard} from "./helpers.js";

export default class Player {
    constructor(properties) {
        this.name = properties.name;
        this.id = properties.id;
        this.cards = [];

        this.playerTable = document.querySelector(`.playerTable.n${this.id + 1}`);
        this.playerTable.style.display = 'inline';

        this.placePlayerName = document.querySelector(`.playerName.n${this.id + 1}`);
        this.placePlayerName.innerHTML = this.name;

        this.placeStoreCards = document.querySelector(`.placeStoreCards.n${this.id + 1}`);


        this.placePlayerRaiting = document.querySelector(`.playerRaiting.n${this.id + 1}`);

    }

    getCard(cards) {
        this.cards = this.cards.concat(cards);
        this.calculateTotalRaiting();
    }

    calculateTotalRaiting() {
        this.rating = 0;
        this.cards.forEach(card => this.rating += card.rating);
        this.writeActualData();
    }

    writeActualData() {
        this.placePlayerRaiting.innerHTML = this.rating;

        this.placeStoreCards.innerHTML = '';

        this.cards.forEach(card => this.placeStoreCards.appendChild(visualCreateCard(card)));
    }


}