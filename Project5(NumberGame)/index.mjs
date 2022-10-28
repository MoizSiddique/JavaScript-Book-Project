import PromptSync from "prompt-sync";

let dynamicNumber = 10;

const prompt = PromptSync();
let userInput = prompt("Enter a Number to check: ");

if(isNaN(userInput)){
    console.log("Invalid number!!!!");
} 
else if(parseInt(userInput) > dynamicNumber){
    console.log(userInput+" is greater then dynamic number value: "+dynamicNumber);
}
else if(parseInt(userInput) === dynamicNumber){
    console.log(userInput+" is equal to dynamic number value: "+dynamicNumber);
}
else{
    console.log(userInput+" is less then dynamic number value: "+dynamicNumber);
}