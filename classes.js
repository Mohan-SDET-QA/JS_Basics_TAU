const person = {
    name: "Mohini",
    age: 24,
    isGood: false,
    isGettingBetter: true,
}

// //In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// you create a class using class keyword and the value should be in captial
class Person {
    constructor(name, age, isGettingBetter, isGood){
        this.name = name;
        this.isGettingBetter = isGettingBetter;
        this.isGood = isGood;
        this.age = age;
    }
}

// // creating an object\
const myPerson = new Person(
    "Denevenus",
    65,
    true,
    "yes"
);

console.log(myPerson);