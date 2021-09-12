export class Human {
    constructor({age, name, eyesColor, weight, gender, maxAge}) {
        this.age = age;
        this.name = name;
        this.eyesColor = eyesColor;
        this.weight = weight;
        this.gender = gender;
        this.maxAge = maxAge;
    }

    canPopulate(human) {
        if (this.age < 18 || human.age < 18) {
            return false;
        }

        return this.age % 5 === 0 && human.age % 5 === 0;
    }

    growUp() {
        if (this.age >= this.maxAge) {
            throw new Error(`this person ${this.name} can\`t growUp`);
        }

        this.age++;

        if (this.weight < 80) {
            this.weight = (this.weight * 1.15).toFixed(2)
        }
    }
}