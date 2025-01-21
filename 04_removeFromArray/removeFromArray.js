const removeFromArray = function(myArray, ...otherArgs) {

    return myArray.filter(item => !otherArgs.includes(item));
    
    
};


// Do not edit below this line
module.exports = removeFromArray;
