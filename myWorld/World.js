import {Man} from "./Man.js";
import {Woman} from "./Woman.js";
import {getEyesColor, separate} from "./helpers.js";
import {WorldAnalytics} from "./WorldAnalytics.js";

const maleNames = ['Djonn', 'Djordj', 'Anton', 'Petro', 'Dima', 'Kostya', 'Sergey', 'Evgen', 'Aleksey'];
const femaleNames = ['Anna', 'Dasha', 'Antonina', 'Yulia', 'Diana', 'Aleksandra', 'Alina', 'Angelina', 'Varvara'];

export class World {
    constructor(population = []) {
        this.population = population;

        setInterval(() => {
            this.live();
        }, 300);
    }

    live() {
        const {maleList, femaleList} = separate(this.population);

        for (let person of this.population) {
            try {
                person.growUp();
            } catch (e) {
                this.retirement(person);
            }
        }

        const length = Math.min(maleList.length, femaleList.length)
        for (let i = 0; i < length; i++) {
            this.childbearing(maleList[i], femaleList[i]);
        }
    }

    newPerson(person) {
        this.population.push(person);
    }

    retirement(person) {
        this.population.splice(this.population.indexOf(person), 1);
    }

    childbearing(parrent1, parrent2) {
        if (!parrent1.canPopulate(parrent2)) {
            return;
        }

        let eyesColor = getEyesColor(parrent1, parrent2);

        if (Math.random() < 0.5) {
            this.newPerson(
                new Woman({
                    eyesColor,
                    name: femaleNames[Math.ceil(Math.random() * femaleNames.length - 1)]
                })
            );

            return;
        }

        this.newPerson(
            new Man({
                eyesColor,
                name: maleNames[Math.ceil(Math.random() * maleNames.length - 1)]
            })
        );
    }

    getInfo() {
        return new WorldAnalytics(this.population);
    }
}





