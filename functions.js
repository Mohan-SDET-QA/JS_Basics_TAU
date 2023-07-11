function add(a, b, c, d) {
    return a + b + c + d;

}
console.log(add(15, 0, 11, 5999));

function multi(x, y, z) {
    return x * y * z;

}
console.log(multi(10, 10, 1000,));

const bigSum = add(15, 16, 17, 18);
console.log(bigSum);

setTimeout(function king() {
    console.log("Hey you are a king and keep going");
},1000)

// this is a function with a name so arrowed function and if the function doesn't have a name then
// it will be anonymus fuction if the name isn't declared
// arrow function is a type of function with an arrow included in the function like "=>"

setTimeout(() => console.log(add(1, 2, 3, 4)), 2000);

//What’s the most common use-case for anonymous functions?
//Function inception - passing one function as an input to another

// When using standard functions, what is the default return value if you don’t use the return keyword?
// undefined

// What’s a difference between arrow functions and standard functions?
// If your arrow function has a single line of code, then the function assumes that it is your return value

// We can use arrow function for one line of code,
// Arrow functions reduce the size of the code. 
// The return statement and functional braces are optional for single-line functions. 
// It increases the readability of the code. Arrow functions provide a lexical this binding, 
// which means that they inherit the value of “this” from the enclosing scope