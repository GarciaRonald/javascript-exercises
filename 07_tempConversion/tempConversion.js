const convertToCelsius = function(fah) {
  let cel = (fah - 32) * (5 / 9);
  return cel.toFixed(1) * 1;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
