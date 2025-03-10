const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let fact = n;
	if (n === 0) {
    fact = 1
    return fact;
  } else {
    for (let i = n - 1; i > 0; i--) {
      fact *= i;
    }
    return fact;
  }
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
