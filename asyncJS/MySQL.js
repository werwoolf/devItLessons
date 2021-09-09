import {sleep} from "./helpers.js";

export default class MySQL {

    async connect(index) {
        let waiting = [];
        waiting.push(index);

        for (let i = 0; i < waiting.length; i++) {
            console.log('start sleep in MySQL');
            await sleep(922);
            console.log('end sleep in MySQL, row :', waiting.pop());
        }

        return index + 'MySQL';
    }
}
