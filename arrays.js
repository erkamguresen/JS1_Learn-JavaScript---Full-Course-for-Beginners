var ourArray = ["john", 23];

console.log(ourArray);

ourArray.push("new string to push");
console.log(ourArray);

var multiDimensionalArray = [
  ["the universe", 42],
  ["everthing", 101010],
];
console.log(multiDimensionalArray); //interessant

var exampleArray = ["Stimpson", "J", "cat"];
let shiftedElement = exampleArray.shift();
console.log("Array is: " + exampleArray);
console.log(shiftedElement);

exampleArray.unshift(660);
console.log(exampleArray);

const [z, y, , x] = [1, 2, 3, 4, 5, 6];
console.log(z, y, x);

let a = 8,
  b = 6;
console.log(a, b);

(() => {
  "use strict";
  [a, b] = [b, a];
})();

console.log(a, b);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwoElement(list) {
  const [, , ...returnArray] = list;
  return returnArray;
}

console.log(source);
console.log(removeFirstTwoElement(source));
