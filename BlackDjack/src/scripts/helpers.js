

export function setPlayers(players) {
    const playerTable1 = document.querySelector('.playerTable.n1');
    const playerTable2 = document.querySelector('.playerTable.n2');
    const playerTable3 = document.querySelector('.playerTable.n3');
    const playerTable4 = document.querySelector('.playerTable.n4');

    let playersTable = [playerTable1, playerTable2, playerTable3, playerTable4];

    const playerName1 = document.querySelector('.playerName.n1')
    const playerName2 = document.querySelector('.playerName.n2')
    const playerName3 = document.querySelector('.playerName.n3')
    const playerName4 = document.querySelector('.playerName.n4')

    let playersList = [playerName1, playerName2, playerName3, playerName4]


    for (let i = 0; i < players.length; i++) {
        playersTable[i].style.display = 'inline';
        playersList[i].innerHTML = players[i].name;
    }

}

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
    const clone = players.map(player=>player)
    return  clone.sort((a, b) => b.raiting - a.raiting)[0];
}