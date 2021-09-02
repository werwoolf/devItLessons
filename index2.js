function login(password) {
    return password === 'aZZZZ';
}

// password: a-zA-Z
// '**ZZZ+'

const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// brut('**ZZZ+')
// setMask('**ZZZ+')

function brut(mask = null, minLength = 1, maxLength = 8, allowedChars = arrEn) {
    if (mask) {
        mask = setMask(mask);
        minLength = mask.minLength
        mask.maxLength ? maxLength = mask.maxLength : maxLength
    }
    let passwordLength = minLength,
        prevCharPosition = 0;

    console.log(minLength, maxLength)

    do {
        let matrix = setMatrix(passwordLength),
            password = matrixToString(matrix, allowedChars),
            charPosition;

        do {
            if (login(password)) {
                return password;
            }

            charPosition = shouldIncrement(matrix, allowedChars.length);
            if (charPosition === null) {
                break;
            }

            password = matrixToString(matrix, allowedChars);
            matrix = incrementMatrix(matrix, charPosition, prevCharPosition);
            prevCharPosition = charPosition;
        } while (charPosition != null);

        passwordLength++;
    } while (passwordLength <= maxLength);

    return null;
}

function setMask(mask) {
    let parametrs = {'numberOfUndefinedChar': 0};

    if (mask.indexOf('+') === -1) {
        parametrs.minLength = mask.length;
        parametrs.maxLength = mask.length;
    } else {
        parametrs.minLength = mask.length - 1;
    }

    for (let i = 0; i < mask.length; i++) {
        console.log(mask.split('')[i])
    }


    return parametrs;
}

function shouldIncrement(matrix, allowedCharsLength) {
    const keys = Object.keys(matrix);
    for (let i = keys.length - 1; i >= 0; i--) {
        if (matrix[i] < allowedCharsLength) {
            return i;
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

function setMatrix(length) {
    let matrix = {};
    for (let i = 0; i < length; i++) {
        matrix[i] = 0
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


// console.time('implementation time');
// console.log(brut());
// console.timeEnd('implementation time');



