//in JS we can create classes and Object literals
// for objects we have to declare the properties inside the curly braces

// We can put the values as properties inside an object
// you can put quotes or not put quotes for properties in objects but some conditions may still presists
// if the property name has to have spaces or special characters then it is mandatory for "" when assigning a prop


const book = {
    name: "cant hurt me by david goggins",
    isReadable: true,
    hasReviewed: false,

};
console.log(book);

// the order in object is not guranteed that means you can expect the objects to output randomly
// to get a particular prop from object you have to use "." operator
// given the below is an example

setTimeout(() => console.log(book.isReadable), 2000);

// you can change value of a prop using . operator or a [] bracket to insert a prop and the value would be true

const mohan = {
    name: "Bunny",
    isTall: false,
    hasMoney: false,
    isTalented: true,
}

mohan.hasMoney = true;

console.log(mohan);