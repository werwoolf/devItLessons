function login(password) {
    return password === 'zsdW';
}

// password: a-zA-Z
// '**ZZZ+'

const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// brut('**ZZZ+')

// console.log(readMask('**ZZZ+'))

function brut(mask = null, minLength = 1, maxLength = 5, allowedChars = arrEn) {
    if (mask) {
        const dataMask = readMask(mask);
        minLength = dataMask.minLength;
        dataMask.maxLength ? maxLength = dataMask.maxLength : maxLength;
        var certainChars = dataMask.certainChars;
    }
    let passwordLength = minLength,
        prevCharPosition = 0;

    do {
        let matrix = setMatrix(passwordLength, mask, allowedChars),
            password = matrixToString(matrix, allowedChars),
            charPosition;
        console.log(matrix)
        do {

            if (login(password)) {
                return 'Successed login, password :' + password;
            }

            if (mask) {
                charPosition = shouldIncrement(matrix, allowedChars.length, certainChars);
            } else {
                charPosition = shouldIncrement(matrix, allowedChars.length);
            }

            if (charPosition === null) {
                break;
            }

            password = matrixToString(matrix, allowedChars);
            console.log(password)
            matrix = incrementMatrix(matrix, charPosition, prevCharPosition);
            prevCharPosition = charPosition;
        } while (charPosition != null);

        passwordLength++;
    } while (passwordLength <= maxLength);

    return null;
}

function readMask(mask) {
    let parametrs = {'certainChars': []};

    if (mask.indexOf('+') === -1) {
        parametrs.minLength = mask.length;
        parametrs.maxLength = mask.length;
    } else {
        parametrs.minLength = mask.length - 1;
    }

    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === '*') {
            parametrs.certainChars.push(0)
        } else if (mask[i] !== '+') {
            parametrs.certainChars.push(1)
        }
    }


    return parametrs;
}

function shouldIncrement(matrix, allowedCharsLength, certainChars = null) {
    const keys = Object.keys(matrix);

    if (!certainChars) {
        for (let i = keys.length - 1; i >= 0; i--) {
            if (matrix[i] < allowedCharsLength) {
                return i;
            }
        }
    } else {
        for (let i = keys.length - 1; i >= 0; i--) {

            if (matrix[i] < allowedCharsLength && certainChars[i] !== 1) {
                return i;
            }
        }
    }
    return null;
}

function incrementMatrix(matrix, currentIndex, prevIndex) {
    matrix[currentIndex]++;
    if (currentIndex >= prevIndex) {
        return matrix;
    }
    for (let key in matrix) {
        key = parseInt(key, 10);
        if (key === currentIndex) {
            matrix[key] = matrix[currentIndex];
        } else if (key > currentIndex) {
            matrix[key] = 0;
        }
    }

    return matrix;
}

function setMatrix(length, mask = null, allowedChars) {
    let matrix = {};

    if (mask) {
        for (let i = 0; i < length; i++) {
            mask[i] === '*' || allowedChars.indexOf(mask[i]) === -1 ? matrix[i] = 0 : matrix[i] = allowedChars.indexOf(mask[i])
        }
    } else {
        for (let i = 0; i < length; i++) {
            matrix[i] = 0
        }
    }

    return matrix
}

function matrixToString(matrix, allowedCharacters) {
    let characters = [];
    for (let key in matrix) {
        characters[key] = allowedCharacters[matrix[key]]
    }

    return characters.join('');
}


console.time('implementation time');
console.log(brut('z*d*'));
console.timeEnd('implementation time');


// console.log(setMatrix(3,'z*d+',arrEn))
// console.log(matrixToString({ '0': 25, '1': 0, '2': 3 },arrEn))
// console.log(matrixToString({ '0': 25, '1': 0, '2': 3, '3': 0 }
//     ,arrEn))
// console.log(matrixToString({ '0': 25, '1': 0, '2': 3, '3': 0, '4': 0 },arrEn))






