const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5, 2));
console.log(increment(5));

//short and clear code?
function incrementTrial(number, value = 1) {
  return number + value;
}

console.log(incrementTrial(5, 2));
console.log(incrementTrial(5));
