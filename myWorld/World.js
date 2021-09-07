import {Man} from "./Man.js";
import {Woman} from "./Woman.js";
import {getEyesColor} from "./helpers.js"


const maleNames = ['Djonn', 'Djordj', 'Anton', 'Petro', 'Dima', 'Kostya', 'Sergey', 'Evgen', 'Aleksey'];
const femaleNames = ['Anna', 'Dasha', 'Antonina', 'Yulia', 'Diana', 'Aleksandra', 'Alina', 'Angelina', 'Varvara'];


class World {
    constructor(population = []) {
        this.population = population;
        setInterval(() => {
            console.log(this.population.length);
            this.live();

            for (let i = 0; i < Math.ceil(this.population.length / 4); i++) {
                this.childbearing(this.population[Math.ceil(Math.random() * this.population.length - 1)],
                    this.population[Math.ceil(Math.random() * this.population.length - 1)]);
            }
        }, 300);
    }


    live() {
        for (let person of this.population) {
            person.age++;
            console.log(person.canPopulate())
            if (person.age > person.maxAge) {
                this.retirement(person);
                console.log('death', person.maxAge)
            }

            person.weight < 80 ? person.weight = (person.weight * 1.15).toFixed(2) : person.weight;
        }
    }

    newPerson(person) {
        this.population.push(person);
    }

    retirement(person) {
        this.population.splice(this.population.indexOf(person), 1);
    }

    childbearing(parrent1, parrent2) {
        let eyesColor, name;


        if (parrent1.gender !== parrent2.gender && parrent1.age > 17 && parrent2.age > 17) {

            eyesColor = getEyesColor(parrent1, parrent2)

            if (Math.random() < 0.5) {
                name = femaleNames[Math.ceil(Math.random() * femaleNames.length - 1)];
                let newPerson = new Woman({eyesColor, name});
                this.newPerson(newPerson);
                return newPerson
            }

            name = maleNames[Math.ceil(Math.random() * maleNames.length - 1)]
            let newPerson = new Man({eyesColor, name});
            this.newPerson(newPerson);
            return newPerson
        }
    }
}

new World([
    new Man({eyesColor: 'green', name: 'Rudolf'}),
    new Woman({eyesColor: 'black', name: 'Anastasiya'})
]);






