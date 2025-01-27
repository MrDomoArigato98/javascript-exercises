const palindromes = function (string) {


    let reverseString = (string) => {
        let splitString = string
        .split('')
        .reverse()
        .join('')
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
        .replace(/\s+/g, '')
        .toLowerCase()
        console.log(splitString)
        return splitString;
    }

    let originalReplace = (string) =>{

        let og = string
        .split('')
        .join('')
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
        .replace(/\s+/g, '')
        .toLowerCase()
        console.log(og)
        return og
    }

    let reversed = reverseString(string)
    let og = originalReplace(string)
    if (reversed == og){
        return true
    }
    else return false

    
};

// palindromes('A car, a man, a maraca.')
// palindromes('ZZZZ car, a man, a maracaz.')
// palindromes('rac3e3car')
// Do not edit below this line
module.exports = palindromes;
