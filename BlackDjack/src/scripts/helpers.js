export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function findMaxRaitingPlayers(players) {
    const clone = players.map(player => player);
    return clone.sort((a, b) => b.rating - a.rating);
}

export function separatePlayers(players) {
    const listRaitingUnder21 = [];
    const listRaitingUpper21 = [];

    players.forEach(player => player.rating <= 21 ? listRaitingUnder21.push(player) : listRaitingUpper21.push(player));


    return {listRaitingUnder21,listRaitingUpper21};
}

export function visualCreateCard(cardInfo) {
    const card = document.createElement('div');
    const imageSuit = document.createElement('img');
    imageSuit.src = `./src/images/cardSuits/${cardInfo.suit}.png`;

    card.innerHTML = `${cardInfo.name}`;
    card.appendChild(imageSuit);
    card.classList.add('card');

    return card;
}

export function writeMessage(message) {
    const messageWindow = document.querySelector('.messageWindow');
    messageWindow.innerHTML = message;

}
