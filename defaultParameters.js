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

const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log("hi"); //says result is 5 2 times with a 2 in the beginning, interesting
console.log(sum(1, 2, 3));

const sumWithRest = (function () {
  return function sum(...args) {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log("hi"); //says result is 5 2 times with a 2 in the beginning, interesting
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
