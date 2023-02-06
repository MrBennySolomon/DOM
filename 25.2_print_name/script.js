'use strict'

const obj = {
  name: 'Ronnie',
  print: function () {
    return this.name;
  }
}

function printName(printFunc) {
  console.log(printFunc.call(this));
}

setTimeout(() => {
  printName.call(obj, obj.print);
}, 1000);
