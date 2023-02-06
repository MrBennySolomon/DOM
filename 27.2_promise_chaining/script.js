// // Write two functions that use Promises that you can chain.
// // The first function, makeAllCaps(), will take in an array of words
// // and capitalize them, and then the second function, sortWords(),
// // will sort the words in alphabetical order. If the array contains
// // anything but strings, it should throw an error.
// // Call the functions once with an array of words and call it once
// // with an array that includes at least one item that is not a word.
// // Print the resolve and reject in a .then, .catch.

// const makeAllCaps = (array) => new Promise((resolve, reject) => resolve(array.map((word) => word.toUpperCase())));

// const sortWords = (array) => new Promise((resolve, reject) => resolve(array.sort()));

// const promise = (array) => {
//   return new Promise((resolve, reject) => {
//     for (let word of array) {
//       if (typeof word !== "string") {
//         reject("One of the items in the array is not a string");
//       }
//     }
//     resolve(array);
//   });
// };

// const array = ["hello", "world", "benny"];

// const array2 = [43, "world", "benny"];

// promise(array)
//   .then((array) => makeAllCaps(array))
//   .then((array) => sortWords(array))
//   .catch((err) => console.log(err));


// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const makeAllCaps = (array) =>
  new Promise((resolve, reject) => {
    array.forEach((word) => {
      if (typeof word !== "string") {
        reject("One of the items in the array is not a string");
      }
    });
    resolve(array.join(' ').toUpperCase().split(' '));
  });

const sortWords = (array) =>
  new Promise((resolve, reject) => resolve(array.sort()));

const array = ['hello', "world", "aMarm"];

const array2 = [43, "world", "benny"];

makeAllCaps(array)
  .then((array) => console.log(sortWords(array)))
  .catch((err) => console.log(err));