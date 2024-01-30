let encrypt = (text, s) => 
{
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}


// const ceaserHash = (char, shiftNo) => {
//     let hashedString = '';
//     for (let i = 0; i < char.length; i++) {
//         let getAscii = char.charCodeAt(i);
//         // Check uppercase
//         if (getAscii >= 65 && getAscii <= 90) {
//             let getHash = (getAscii - 65 + shiftNo) % 26 + 65;
//             hashedString += String.fromCharCode(getHash);
//         }
//         // Check lowercase
//         else if (getAscii >= 97 && getAscii <= 122) {
//             let getHash = (getAscii - 97 + shiftNo) % 26 + 97;
//             hashedString += String.fromCharCode(getHash);
//         }
//         else {
//             hashedString += char[i];
//         }
//     }
//     return hashedString;
// }

let caesarDeHash = (hashedData, shiftNo) => {
    let deHashedString = '';
    for (let i = 0; i < hashedData.length; i++) {
        let getAscii = hashedData.charCodeAt(i);
        // Check uppercase
        if (getAscii >= 65 && getAscii <= 90) {
            let getHash = (getAscii - 65 - shiftNo + 26) % 26 + 65;
            deHashedString += String.fromCharCode(getHash);
        }
        // Check lowercase
        else if (getAscii >= 97 && getAscii <= 122) {
            let getHash = (getAscii - 97 - shiftNo + 26) % 26 + 97;
            deHashedString += String.fromCharCode(getHash);
        }
        else {
            deHashedString += hashedData[i];
        }
    }
    return deHashedString;
}


module.exports = {
    encrypt,
    caesarDeHash
  };