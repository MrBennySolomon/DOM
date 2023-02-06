// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

const func = num => new Promise((resolve, reject) => num > 10 ? resolve() : reject());

func(11)
.then (() => console.log('resolved'))
.catch(() => console.log('rejected'))

func(9)
.then (() => console.log('resolved'))
.catch(() => console.log('rejected'))