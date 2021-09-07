import {Human} from "./Human.js";

export class Man extends Human {
    constructor(properties) {
        super({
            ...properties,
            age: 0,
            weight: (Math.random() + 3).toFixed(2),
            gender: 'male',
            maxAge: Math.ceil(60 + Math.random() * 20)
        })
    }
}

const vasyl = new Man({eyesColor: 'blue', name: 'Vasyl'});

// console.log(vasyl);

