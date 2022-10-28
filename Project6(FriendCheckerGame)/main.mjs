import PromptSync from "prompt-sync";

const prompt = PromptSync();
let personName = prompt("Enter name to check you are friend or not: ");
let message = "";

switch(personName.toLowerCase()){
    case "humais":
        message = "You and "+personName+" are friends";
        break;
    case "raheel":
        message = "You and "+personName+" are friends";
        break;
    case "umer":
        message = "You and "+personName+" are friends";
        break;
    case "pasha":
        message = "You and "+personName+" are friends";
        break;
    default:
        message = "Unknown Person or name!!!";
        break;
}

console.log(message);