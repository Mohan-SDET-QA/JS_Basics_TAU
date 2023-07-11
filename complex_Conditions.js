const car = {
    price: 5000,
    color : "red",
    brand : "Ferrari"

};


if (car.price < 5000 && car.color === "red") {
    console.log("we have the car and come buy it");

} else if (car.price > 5000 && car.brand !== "ferrari" ) {
    console.log("we don't have ferrari and we don't that much expencive cars");

} else {
    console.log("We don't have anything that you're looking for");
};


// in JS we can use if, elseif, else control statements with conditions
// we can also use multiple conditions using AND OR and other operators in JS like === !=== == etc