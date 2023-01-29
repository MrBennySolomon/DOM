'use strict';

let car1 = document.getElementById('player1-race');
let car2 = document.getElementById('player2-race');

car1 = car1.children;
car2 = car2.children;

let car1Td = car1[0];
let car2Td = car2[0];

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowUp'){
    car1Td.classList.remove('active');
    car1Td = car1Td.nextElementSibling;
    if (car1Td.getAttribute('class') === 'finish') {
      alert('player 1 wins');
      car1Td.classList.remove('active');
      car1Td = car1[0];
      car1Td.classList.add('active');
      car2Td.classList.remove('active');
      car2Td = car2[0];
      car2Td.classList.add('active');
      return;
    }
    car1Td.classList.add('active');
  }else if (e.key === 'ArrowDown') {
    car2Td.classList.remove('active');
    car2Td = car2Td.nextElementSibling;
    if (car2Td.getAttribute('class') === 'finish') {
      alert('player 2 wins');
      car2Td.classList.remove('active');
      car2Td = car2[0];
      car2Td.classList.add('active');
      car1Td.classList.remove('active');
      car1Td = car1[0];
      car1Td.classList.add('active');
      return;
    }
    car2Td.classList.add('active');
  }
});