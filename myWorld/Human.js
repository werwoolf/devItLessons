export class Human {
    constructor({age, name, eyesColor, weight, gender,maxAge}) {
        this.age = age;
        this.name = name;
        this.eyesColor = eyesColor;
        this.weight = weight;
        this.gender = gender;
        this.maxAge = maxAge;
    }

    canPopulate() {
        if(this.age < 18) {
            return false;
        }

        return this.age % 5 === 0;
    }
}