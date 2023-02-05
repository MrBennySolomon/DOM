'use strict'

// Create an object with a name property. The object should
// also have a method that prints its name and another method
// that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions.

const obj = {
  name: 'Ronnie',
  print: function () {
    return this.name;
  }
}

function printName(print) {
  console.log(this.print());
}

setTimeout(() => {
  printName.call(obj, obj.print);
}, 1000);
