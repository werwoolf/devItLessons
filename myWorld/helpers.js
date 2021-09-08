export function getEyesColor(parentOne, parentTwo) {
    const eyesColorList = ['green', 'grey', 'blue', 'brown', 'black'];
    const variableColor = Math.random();

    if (variableColor <= 0.4) {
        return parentOne.eyesColor;
    } else if (variableColor <= .8) {
        return parentTwo.eyesColor;
    }

    const randomColorIndex = Math.floor(Math.random() * eyesColorList.length);

    return eyesColorList[randomColorIndex];
}

export function separate(people) {
    let maleList = [];
    let femaleList = [];

    for (let person of people) {
        person.gender === "male" ? maleList.push(person) : femaleList.push(person)
    }

    maleList = shuffle(maleList);
    femaleList = shuffle(femaleList);

    return {maleList,femaleList}
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


