// Instructions
// Your Task: Edit the storm object. Invoke the printSuperPower
// function using the storm object as the context of the function.
// So your output should be: my superpower is flying.
// Well, Storm also controls the weather, so, whatever you
// choose!

const storm = {
    // add code here
    powers: ['wind', 'cold', 'snow'],
    superPower: 'flying',
    
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}
printSuperPower.call(storm);
printSuperPower.apply(storm);
