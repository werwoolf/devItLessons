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
    const listUnder21 = [];
    const listUpper21 = [];

    players.forEach(player => player.rating < 21 ? listUnder21.push(player) : listUpper21.push(player));


    return {listUnder21, listUpper21};
}

export function getWinner(players) {
    const listHave21 = [];
    const listUnder21 = [];
    const listUpper21 = [];

    players.forEach(player => player.rating === 21 ? listHave21.push(player) : player);

    if (listHave21.length) {
        return listHave21;
    }

    if (separatePlayers(players).listUnder21.length) {
        listUnder21.push(findMaxRaitingPlayers(separatePlayers(players).listUnder21)[0]);

        separatePlayers(findMaxRaitingPlayers(players)).listUnder21.forEach((player, index) => {
            if (player.rating === listUnder21[0].rating && player !== listUnder21[0]) {
                listUnder21.push(player)
            }
        })

        return listUnder21;
    }

    listUpper21.push(separatePlayers(players).listUpper21.reverse()[0])

    separatePlayers(findMaxRaitingPlayers(players)).listUpper21.forEach((player, index) => {
        if (player.rating === listUpper21[0].rating && player !== listUpper21[0]) {
            listUpper21.push(player)
        }
    })

    return listUpper21;
}
