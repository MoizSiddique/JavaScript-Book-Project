// Ask user height and weight in inch and pound respectively.
let heightInInch = prompt("Enter height in Inch."); 
let weightInLb = prompt("Enter Weight in Pound.");

// covertion ratio
const inchToCm = 2.54;
const kiloToLb = 2.2046;
const constainValue = 10000;

// Formulas
// ---> Inch To Cm
let cm = (heightInInch * inchToCm);
// ---> Pounds to Kilos
let kilo = (weightInLb / kiloToLb);

// --> BMI calculation
let BMI = ((kilo / Math.pow(cm,2)) * constainValue).toFixed(4);

// Output
console.log("BMI = "+BMI+" kg per meter squared.");

