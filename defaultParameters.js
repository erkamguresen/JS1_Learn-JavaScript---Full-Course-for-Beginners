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
console.log(sumWithRest(1, 2, 3));
console.log(sumWithRest(1, 2, 3, 4));

//why not use this simplified version?
function sum2(...args) {
  // const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

console.log("hi"); //says result is 5 2 times with a 2 in the beginning, interesting
console.log(sum2(1, 2, 3));
console.log(sum2(1, 2, 3, 4));

const array1 = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];

let array2;

(function () {
  array2 = [...array1]; //array copy
  array1[0] = "potato";
})();
console.log(array2);

//From Evan-HackYourFuture
console.log("HYF part");
const increment2 = (function (value = 1) {
  return function increment2(number) {
    return number + value;
  };
})(2);
console.log(increment2(5));
console.log(increment2(5));

const incrementFactory = function (value = 1) {
  return function increment(number) {
    return number + value;
  };
};

const incrementFromTwo = incrementFactory(2);
console.log(incrementFromTwo(5));
console.log(incrementFromTwo(5));

const incrementFromFour = incrementFactory(4);
console.log(incrementFromFour(5));
console.log(incrementFromFour(5));
