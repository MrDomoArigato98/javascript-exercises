const add = function(val1,val2) {
  let total = 0;
  total = val1+val2
	return total;
};

const subtract = function(val1,val2) {
	let total = 0;
  total = val1 - val2;
  return total;
};

const sum = function(array) {
	total = array.reduce(function(sum,value) {
    return sum + value;
  },0);
  return total;
};

const multiply = function(array) {
  total = array.reduce(function(sum,value){
    return sum*value;
  })
  return total;
};

const power = function(number,power) {
	return Math.pow(number,power);
};

const factorial = function(value) {
  let sum = 1 ;
	for (let index = value; index > 0; index--){
    sum *= index
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
