export default class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.raiting = 0;
    }

    getCard(...cards) {
        this.cards.length === 0 ? this.cards = [...cards] : this.cards = [...cards, this.cards];
        this.setTotalRaiting()
    }

    setTotalRaiting() {
        this.cards.forEach(card => this.raiting += card.raiting)
    }



}