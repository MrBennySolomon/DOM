Array.prototype.myFilter = function(callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i]
    }
  }
  return undefined;
}

Array.prototype.myReduce = function(callback, initial) {
  let accumulator = initial;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
}

console.log([1, 2, 3, 4, 5].myFilter(x => x > 3));
console.log([1, 2, 3, 4, 5].myFind(x => x > 3));
console.log([1, 2, 3, 4, 5].myReduce((a, b) => a + b, 0));