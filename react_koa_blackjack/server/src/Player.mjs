export default class Player {
    constructor(properties) {
        this.name = properties.name;
        this.id = properties.id;
        this.cards = [];
    }

    getCard(cards) {
        this.cards = this.cards.concat(cards);
        this.calculateTotalRaiting();
    }

    calculateTotalRaiting() {
        this.rating = 0;
        this.cards.forEach(card => this.rating += card.rating);
    }
}