export function getEyesColor(parentOne, parentTwo) {
    const eyesColorList = ['green', 'grey', 'blue', 'brown', 'black'];
    const variableColor = Math.random();

    if (variableColor <= 0.4) {
        return parentOne.eyesColor;
    } else if (variableColor <= .8) {
        return parentTwo.eyesColor;
    }

    const randomColor = Math.floor(Math.random() * eyesColorList.length);

    return eyesColorList[randomColor];
}