import {sleep} from "./helpers.js";

export default class PostgreSQL {

    async connect(index) {
        let waiting = [];
        waiting.push(index);

        for (let i = 0; i < waiting.length; i++) {
            console.log('start sleep in PostgreSQL');
            await sleep(922);
            console.log('end sleep in PostgreSQL, row :', waiting.pop());
        }

        return index + 'PostgreSQL';
    }
}