import {sleep} from "./helpers.js";
import {DbConnection} from "./DbConnection.js";

export default class MongoDB {
    async connect() {
        await sleep(3000);

        return new DbConnection("MongoDB");
    }
}
