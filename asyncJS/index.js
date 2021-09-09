import MySQL from "./MySQL.js";
import PostgreSQL from "./PostgreSQL.js";
import MongoDB from "./MongoDB.js";

const databases = [new MySQL(), new MongoDB(), new PostgreSQL()];

function connecting() {
    return Promise.all(databases.map(database => getResults(database, 50)));
}

async function getResults(database, count) {
    const connection = await database.connect();
    const results = [];
    for (let i = 0; i < count; i++) {
        const result = await connection.getRow(i);
        results.push(result);
    }

    return results;
}

const results = await connecting();
console.log(results);