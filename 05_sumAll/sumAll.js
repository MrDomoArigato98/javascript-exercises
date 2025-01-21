const sumAll = function(rangeIntOne, rangeIntTwo) {
 

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
