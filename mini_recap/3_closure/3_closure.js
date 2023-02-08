
// Example
// Create a function makePassword that returns a function that takes in a password and returns a message indicating whether the input matches the original password.

function makePassword(password) {
  return function (input) {
    return input === password ? "Access granted." : "Access denied.";
  };
}
const checkPassword = makePassword("secret");
console.log(checkPassword("secret")); // "Access granted."
console.log(checkPassword("notsecret")); // "Access denied."

// Explanation: The function makePassword returns another function that takes in an input and compares it to the original password. The inner function has access to the password variable, creating a closure.


// 1. Create a function counter that returns a function that increments and returns a counter variable. The counter should not be accessible from outside the function.
function incrementCounter() {
  let counter = 0;
  return function() {
    return counter++; 
  };
}
const increment = incrementCounter();
console.log(increment());
console.log(increment());
console.log(increment());
// 2. Create a function addMaker that takes in a value and returns a function that adds that value to its input.
function addMaker(value) {
  return function(input) {
    return input + value;
  }
}
const add5 = addMaker(5);
console.log(add5(4));
// 3. Create a function adder that takes in a value and returns an object with two methods: add and reset. The add method takes in a number and returns the sum of the original value and the input, and the reset method resets the value back to the original value.
function adder(value) {
  return {
    add(input) {
      return input + value;
    },
    reset() {
      return value;
    }
  }
}

const obj = adder(5);
console.log(obj.add(4));
console.log(obj.reset(4));