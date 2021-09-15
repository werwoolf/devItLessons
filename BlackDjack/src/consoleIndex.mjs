import prompt from 'prompt';
import Game from "./scripts/Game.mjs";

async function getPlayers() {
    const players = await prompt.get('enter players');
    return players
}

async function start() {
    const players = getPlayers();
    const game = new Game(players);
    console.log(game)
}
