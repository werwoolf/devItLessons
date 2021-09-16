export function checkWinner(arrGameField) {
    const players = ['X', '0'];
    for (let i = 0; i < players.length; i++) {
        const player = players[i];

        const
            horizont1Winner = [player, player, player, '', '', '', '', '', ''],
            horizont2Winner = ['', '', '', player, player, player, '', '', ''],
            horizont3Winner = ['', '', '', '', '', '', player, player, player],
            vertical1Winner = [player, '', '', player, '', '', player, '', ''],
            vertical2Winner = ['', player, '', '', player, '', '', player, ''],
            vertical3Winner = ['', '', player, '', '', player, '', '', player],
            diagonalLeftWinner = [player, '', '', '', player, '', '', '', player],
            diagonalRightWinner = ['', '', player, '', player, '', player, '', ''];

        const variableWinner = [horizont1Winner, horizont2Winner, horizont3Winner,
            vertical1Winner, vertical2Winner, vertical3Winner,
            diagonalLeftWinner, diagonalRightWinner];

        for (let k = 0; k < variableWinner.length; k++) {
            for (let i = 0, point = 0; i < 9; i++) {
                if (variableWinner[k][i] !== '' && variableWinner[k][i] === arrGameField[i]) {
                    point++;
                    if (point === 3) {
                        return `WINNER ${player}`;
                    }
                }
            }
        }
    }

    return null
}