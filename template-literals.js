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

console.log(makeList(result.failure));
