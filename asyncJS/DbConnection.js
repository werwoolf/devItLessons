import MongoDB from './MongoDB.js';
import PostgreSQL from './PostgreSQL.js'
import Mysql from './MySQL.js';
import {sleep} from "./helpers.js";


class DbConnection {
    constructor() {
        this.mongo = new MongoDB();
        this.postgre = new PostgreSQL();
        this.mysql = new Mysql();
    }

    async getRow(time, row, nameDB) {
        await sleep(time);
        if (nameDB === 'MongoDB') {
            return await this.mongo.connect(row)
        }
        if (nameDB === 'PostgreSQL') {
            return await this.postgre.connect(row)
        }
        if (nameDB === 'Mysql') {
            return await this.mysql.connect(row)
        }


    }
}


let dataBase = new DbConnection()

 function fillingDB() {
    for (let i = 1; i < 10; i++) {
         dataBase.getRow(200 * i, i, 'MongoDB');
    }
    for (let i = 1; i < 10; i++) {
         dataBase.getRow(200 * i, i, 'PostgreSQL');
    }
    for (let i = 1; i < 10; i++) {
         dataBase.getRow(200 * i, i, 'Mysql');
    }


}

fillingDB()
