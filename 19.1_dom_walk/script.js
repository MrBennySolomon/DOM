const liStartHere = document.querySelector('li.start-here');

// 1. Change the text from “title 2” to “main title”
// const renderedText = htmlElement.innerText;
liStartHere.innerText = 'main title';
// 2. Add another subtitle with the text “subtitle 4”
const ul = document.querySelector('body ul li ul');
const newLi = document.createElement('li');
newLi.innerText = 'sub title 4';
const success = ul.appendChild(newLi);
// 3. Delete the last <li> element from the list.
const uL = document.querySelector('body ul');
const ul3Li = liStartHere.nextElementSibling.nextElementSibling;
uL.removeChild(ul3Li);
// 4. Change the <title> element text to “Master Of The Dom”.
document.title = 'Master Of The Dom';
// 5. Change the text of the <p> element to something else of
//    your
const p = document.querySelector('p');
p.innerText = "H.W";