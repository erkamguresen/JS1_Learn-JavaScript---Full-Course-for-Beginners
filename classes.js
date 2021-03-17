class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age(year) + " years old.");

class Car2 {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return `I have a ${this.carName}.`;
  }
}

class Model extends Car2 {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + " It is a " + this.model;
  }
}

let myCar2 = new Model("Ford", "Mustang");

console.log(myCar2.show());
console.log(myCar2.present());

var person = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
  get lang() {
    return this.language;
  },
};
// Set a property using set:
person.lang = "en";
// Display data from the object:
console.log(person.language);
//get the data with getter
console.log(person.lang);
console.log(person.fullName);

var x1 = {}; // object
var x2 = ""; // string
var x3 = 0; // number
var x4 = false; // boolean
var x5 = []; // object (not array)
var x6 = /()/; // object as Regular Expression
var x7 = function () {}; // function

// Display the type of all
console.log("x1: " + typeof x1);
console.log("x2: " + typeof x2);
console.log("x3: " + typeof x3);
console.log("x4: " + typeof x4);
console.log("x5: " + typeof x5);
console.log("x6: " + typeof x6);
console.log("x7: " + typeof x7);
