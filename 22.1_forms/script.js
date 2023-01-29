'use strict';

const nameField  = document.querySelector('.name');
const ageField   = document.querySelector('.age');
const emailField = document.querySelector('.email');
const submit     = document.querySelector('.submit');
const form       = document.getElementById('form');

const formArr = [];
const inputs = [nameField, ageField, emailField];

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focusout', function(e) {
    inputs[i].after(e.target.value);
    formArr.push(e.target.value);
    });
}

form.addEventListener('submit', function(e) {
  if (window.confirm("are you sure the data is correct?")) {
    alert("Thanks");
  }else{
    form.reset();
    return;
  }
  e.preventDefault();
});
