// Ask user for value in miles
let miles = prompt("Enter value in Miles.");

// covertion value
oneKilo = 0.6213711922;

// formula
kiloToMile = (miles*oneKilo).toFixed(3);

console.log("The distance of "+ miles +" miles is equal to "+ kiloToMile +" kms.");