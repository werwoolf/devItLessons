import {sleep} from "./helpers.js";

export class DbConnection {
    constructor(name) {
        this.name = name;
    }

    async getRow(row) {
        await sleep(1000);

        return row;
    }
}