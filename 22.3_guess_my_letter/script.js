'use strict';

const keys    = document.querySelector('.keys');
const message = document.querySelector('.message');

const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let user = [];
let char = chars[Math.floor(Math.random() * 26)];

window.addEventListener('keydown', function(e) {
  if (char === e.key) {
    message.innerText = 'SUCCESS';
    message.classList.remove('red');
    message.classList.add('green');
    message.innerText = '';
    this.setTimeout(() => {
      message.classList.remove('red');
      message.classList.remove('green');
      user = [];
      char = chars[Math.floor(Math.random() * 26)];
    }, 2000);
  }else{
    message.innerText = 'KEEP TRYING';
    message.classList.remove('green');
    message.classList.add('red');
    if (e.key === e.key.toLowerCase() &&
      chars.includes(e.key) &&
      !user.includes(e.key)) {
      user.push(e.key);
      keys.innerText = user;
    }
  }
  
});
