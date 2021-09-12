import {Man} from "./Man.js";
import {Woman} from "./Woman.js";
import {World} from "./World.js";

const world = new World([
    new Man({eyesColor: 'green', name: 'Rudolf'}),
    new Woman({eyesColor: 'black', name: 'Anastasiya'})
]);

setInterval(() => {
    const analytics = world.getInfo();

    console.log(
        analytics.getAllInformation()
    );
}, 3000);