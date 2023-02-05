'use strict';

const wonderWoman = {
  name: "Diana Prince"
}
const batman = {
  name: "Bruce Wayne"
}

const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
//add your code here
  for (let hero of heroes) {
    printFunc.call(hero);
  }
}

printHeroes(superHeroes, printName);