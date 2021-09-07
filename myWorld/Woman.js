import {Human} from "./Human.js";

export class Woman extends Human {
    constructor(properties) {
        super({
            ...properties,
            age: 0,
            weight: (Math.random() * .5 + 2.5).toFixed(2),
            gender: 'female',
            maxAge: Math.ceil(60 + Math.random() * 20)
        })
    }
}

const Katrin = new Woman({eyesColor: 'brown', name: 'Katrin'});


// console.log(Katrin);