const repeatString = function(string, num) {

    let returnString="";
    if (num <0){
        return("ERROR")
    }
    for(let index = 0; index < num; index++){
        returnString += string;
    }
    return returnString;
    
};

// Do not edit below this line
module.exports = repeatString;
