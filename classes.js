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
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};
// Set a property using set:
person.lang = "en";
// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
