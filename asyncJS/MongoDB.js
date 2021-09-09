import {sleep} from "./helpers.js";

export default class MongoDB {

    async connect(index) {
        let waiting = [];
        waiting.push(index);

        for (let i = 0; i < waiting.length; i++) {
            console.log('start sleep in MongoDB');
            await sleep(922);
            console.log('end sleep in MongoDB, row :', waiting.pop());
        }

        return index + 'MongoDB';
    }
}








