function login(password) {
    return password === 'aba';
}

// password: a-zA-Z

let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// function brut(long = 1, arr = arrEn, tryPass = '') {
//
//     for (let j = 0; j< arr.length; j++){
//         for (let i = 0; i < arr.length; i++) {
//             let tryPassword = tryPass + arr[i]
//             console.log(tryPassword)
//             if (login(tryPassword) === true) {
//                 return tryPassword
//             }
//             if (i === arr.length - 1) {
//                 // console.log('ind:',i)
//                 brut(long++ , arr = arrEn, )
//             }
//         }
//     }
//
// }

// console.log(brut())

class FailedLogin extends Error {

}

//
// function tryLogin(allowedChars = arrEn, minLength = 1, maxLength = 4) {
//     let passwordChars = [],
//         passwordPosition = 0,
//         positionOfAllowedChar = 0,
//         currentPasswordLength = minLength;
//
//     do {
//         // passwordChars[passwordPosition] = allowedChars[positionOfAllowedChar];
//
//         positionOfAllowedChar++;
//         currentPasswordLength++;
//
//         for (let i = 0; i < allowedChars.length; i++) {
//             passwordChars[passwordPosition] = allowedChars[i];
//
//             if (i === allowedChars.length-1 && passwordPosition < currentPasswordLength) {
//                 passwordChars[passwordPosition] = allowedChars[i];
//
//                 passwordPosition++;
//
//             }
//
//             console.log(passwordChars,i)
//
//         }
//         // passwordChars = []
//         // passwordPosition++;
//         if (currentPasswordLength > maxLength) {
//             console.log(passwordChars.join(''));
//             throw new FailedLogin();
//         }
//     } while (!login(passwordChars.join('')))
//     const password = passwordChars.join('')
//     return password;
// }
//
// try {
//     console.log("Successfully authorized. Password: ", tryLogin())
// } catch (error) {
//     if (error instanceof FailedLogin) {
//         console.log("Failed login")
//     }
// }


function brut(minLength = 1, maxLength = 4, arr = arrEn) {



    console.log("Failed login")
}

const matrix = {
    0: 0,
    // 1: 0,
    // 2: 0,
    // 3: 2,
};

function matrixToString(allowedCharacters, matrix) {
    let characters = [];
    for(let key in matrix) {
        characters[key] = allowedCharacters[matrix[key]]
    }

    return characters.join('');
}

console.log(matrixToString(arrEn, matrix));
// console.log(brut())
