const reverseString = function(normalString) {

    let stringLength = normalString.length;
    let reversedString;
    for(let index = stringLength-1; index> 0; index--){
        reversedString += normalString[index];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
