const sumAll = function(rangeIntOne, rangeIntTwo) {
 
    if(!Number.isInteger(rangeIntOne) || !Number.isInteger(rangeIntTwo)){
        return "ERROR"
    }
    if(rangeIntOne<0 || rangeIntTwo < 0){
        return "ERROR"
    }

    let startPosition = Math.min(rangeIntOne, rangeIntTwo);
    let endPosition = Math.max(rangeIntOne, rangeIntTwo);
    let sum = 0;

    for (let i = startPosition; i <= endPosition; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
