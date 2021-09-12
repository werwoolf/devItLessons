export  function setPlayers(players) {
    const playerTable1 = document.querySelector('.playerTable.n1');
    const playerTable2 = document.querySelector('.playerTable.n2');
    const playerTable3 = document.querySelector('.playerTable.n3');
    const playerTable4 = document.querySelector('.playerTable.n4');

    let playersTable = [playerTable1, playerTable2, playerTable3, playerTable4];

    const playerN1 = document.querySelector('.playerName.n1')
    const playerN2 = document.querySelector('.playerName.n2')
    const playerN3 = document.querySelector('.playerName.n3')
    const playerN4 = document.querySelector('.playerName.n4')

    let playersList = [playerN1, playerN2, playerN3, playerN4]


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
