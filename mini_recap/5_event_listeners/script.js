// Exercise 1: Add a click event listener to the first box element
// that logs "First box clicked" to the console when clicked
// Make the callback function that is being passed in to event listener a named function
const container = document.getElementById('container');
const children =container.children;
//children[0].addEventListener('click', function(e) { console.log('First box clicked')});


// Exercise 2: Add a click event listener to the container element
// that logs "Container clicked" to the console when clicked
// Click on the first box and see which event listener is called first
// Make the callback functions that are being passed in to event listeners named function
container.addEventListener('click', function(e) { console.log('Container clicked')});

// Exercise 3: Add the following code inside the first box event listener function:
// event.stopPropagation();
// Click on the first box and see which event listener is called
// Make the callback function that is being passed in to event listener of the Container a named function
// and the function that is being passed in to the event listener of the first box an anonyms function

//? children[0].addEventListener('click', function(e) { 
//?     e.stopPropagation();
//?     console.log('First box clicked')
//? });

// Exercise 4: Remove the event.stopPropagation() method from the first box element
// Make the event listener run only once
//? children[0].addEventListener('click', function(e) { 
//?   console.log('First box clicked')
//? }, {once : true});

// Exercise 5: Use the removeEventListener method to remove the event listener from the first box element
function removeListener() {
  container.removeEventListener('click', onClick);
  console.log('First box clicked')
}


// Exercise 6: Add a click event listener to the container element that logs the background-color
// of the clicked box to the console
// Use event delegation to listen for clicks on all .box elements
// Make the callback function that passed in to event listener a named function
