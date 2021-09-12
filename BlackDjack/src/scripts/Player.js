export default class Player {
    constructor(properties) {
        this.name = properties.name;
        this.id = properties.id;
        this.cards = [];

        this.playerTable = document.querySelector(`.playerTable.n${this.id+1}`);
        this.playerTable.style.display = 'inline';

        this.placePlayerName = document.querySelector(`.playerName.n${this.id+1}`);
        this.placePlayerName.innerHTML = this.name;

        this.placePlayerRaiting = document.querySelector(`.playerRaiting.n${this.id+1}`);

    }

    getCard(cards) {
        this.cards = this.cards.concat(cards);
        this.setTotalRaiting();
        this.writeRaitingToPlace();
    }

    setTotalRaiting() {
        this.raiting = 0;
        this.cards.forEach(card => this.raiting += card.raiting);
        this.writeRaitingToPlace();
    }

    writeRaitingToPlace(){
        this.placePlayerRaiting.innerHTML = this.raiting;
    }


}