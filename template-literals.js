const person = {
  name: "Zodiac Hasbro",
  age: 56,
};
const greetings = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greetings);

const result = {
  success: ["max-lenght", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "line-break"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(array) {
  const resultDisplayArray = [];

  for (let i = 0; i < array.length; i++) {
    resultDisplayArray[i] = `<li class='text-warning'>${array[i]}</li>`;
  }

  return resultDisplayArray;
}

console.log(makeList(result.success));
console.log(makeList(result.failure));
console.log(makeList(result.skipped));

//cool feature you can insert specific elements to specific positions of an empty array
const arrayTrial = [];

arrayTrial[1] = 1;
arrayTrial[10] = 10;

console.log(arrayTrial);
