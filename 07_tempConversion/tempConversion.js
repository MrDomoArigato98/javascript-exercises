const convertToCelsius = function(fahrenheit) {
  // x °F ≘ (x − 32) × ⁠5/9⁠ °C 

  let celsius = (fahrenheit-32)* (5/9)
  let roundedCelsius = Math.round(celsius * 10) / 10
  return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F 
  let fahrenheit = (celsius * 9/5) + 32
  let roundedFahrenheit = Math.round(fahrenheit*10) / 10
  return roundedFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
