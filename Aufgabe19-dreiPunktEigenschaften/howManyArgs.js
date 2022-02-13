// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

const howManyArgs = (...params) => {
    return params.length;
};

console.log(howManyArgs()) 
console.log(howManyArgs(1, false, "hello")) 
console.log(howManyArgs("better")) 

