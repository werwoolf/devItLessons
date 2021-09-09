import {separate} from "./helpers.js";

export class WorldAnalytics {
    constructor(population) {
        this.avgAge = this.calculateAvgAge(population);
        this.populationLength = population.length;
        this.relationshipSex = this.calculateRelationshipSex(population);
        this.statisticEyesColor = this.calculateStatisticEyes(population);
    }

    calculateAvgAge(population) {
        return (population.reduce((akkAge, person) => akkAge + person.age, 0)/
                population.length).toFixed(2);
    }

    getAvgAge() {
        return this.avgAge + ' years';
    }

    getPopulationLength() {
        return this.populationLength;
    }

    calculateRelationshipSex(population) {
        const {maleList, femaleList} = separate(population);

        const percentMale = (maleList.length / population.length * 100).toFixed(2);
        const percentFemale = (femaleList.length / population.length * 100).toFixed(2);

        return {'percentMale': ` ${percentMale} %`, 'percentFemale': `${percentFemale} %`};
    }

    getRelationshipSex() {
        return this.relationshipSex;
    }

    calculateStatisticEyes(population) {
        let eyesColorListMatrix = {'green': 0, 'grey': 0, 'blue': 0, 'brown': 0, 'black': 0};

        for (let person of population) {
            eyesColorListMatrix[person.eyesColor]++;
        }

        for (let key in eyesColorListMatrix) {
            eyesColorListMatrix[key] = (eyesColorListMatrix[key] / population.length * 100).toFixed(2) + ' %';
        }

        return eyesColorListMatrix;
    }

    getStatisticEyes() {
        return this.statisticEyesColor;
    }

    getAllInformation() {
        return {
            'average age :': this.getAvgAge(),
            'counter people :': this.getPopulationLength(),
            'percent relation sex :': this.getRelationshipSex(),
            'statistic eyes color :': this.getStatisticEyes()
        }
    }
}

