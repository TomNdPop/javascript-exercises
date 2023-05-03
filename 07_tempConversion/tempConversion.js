const convertToCelsius = function(x) {
  x = (x -32)*(5/9);
  x = Math.round(x*10)/10;
  return x;
};

const convertToFahrenheit = function(x) {
  x = (x * (9/5) + 32);
  x = Math.round(x*10)/10;
  return x;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
