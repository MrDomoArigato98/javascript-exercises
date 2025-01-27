const fibonacci = function(num) {

    if(num <0){
        return "OOPS"
    }
    Number(num)

    let fibonacciArray = [0,1];

    for (let index = 0; index < num; index++) {
        fibonacciArray.push(fibonacciArray[index]+fibonacciArray[index+1])
    }

    console.log(fibonacciArray)

    return fibonacciArray[num]
};

fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
