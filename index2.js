function login(password) {
    return password === 'Vaqo';
}

// password: a-zA-Z

let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function brut(minLength = 1, maxLength = 4, allowedChars = arrEn) {
    let passwordLength = minLength,
        prevCharPosition = 0;

    parent:
    do {
        let matrix = setMatrix(passwordLength),
            password = matrixToString(matrix, allowedChars),
            charPosition;
        do {
            if (login(password)) {
                console.log('Loggined', password);
                break parent
            }

            charPosition = shouldIncrement(matrix, allowedChars.length);
            if (charPosition === null) {
                break;
            }

            console.log(matrix,charPosition,prevCharPosition)

            password = matrixToString(matrix, allowedChars)
            matrix = incrementMatrix(matrix, charPosition, prevCharPosition)
            prevCharPosition = charPosition;

        } while (charPosition != null);
        if (login(password)) {
            console.log('Loggined', password);
            break;
        }
        passwordLength++;
    } while (passwordLength <= maxLength);

    console.log('failed login')
}

/**
 * @param matrix
 * @param allowedCharsLength
 * @returns {null|number}
 */
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
    if (currentIndex < prevIndex) {
        let newMatrix = {};
        for (let key in matrix) {
            if (key == currentIndex) {
                    newMatrix[key] = matrix[currentIndex];
            } else if (key < currentIndex) {
                newMatrix[key] = matrix[key];
            } else {
                newMatrix[key] = 0;
            }
        }
        // console.log('new',newMatrix)
        return newMatrix
    } else {
        return matrix
    }
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


brut()


// const a = {
//     0: 0, 1: 52,2:52
//
// }
//
// console.log(incrementMatrix(a, 1, 2))


// console.log(shouldIncrement(a,arrEn.length))
