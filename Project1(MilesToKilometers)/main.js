// Ask user input in miles
let kilometer = prompt("Enter values in kilometer.");

// factor: 1 mile equal to 1.60934 kilometer
let oneMile = 1.60934;

// formula 
let mileToKilometer = (kilometer*oneMile);

// Output
let output = `The distance of ${kilometer} kms is equal to ${mileToKilometer} miles.`;
console.log(output);


