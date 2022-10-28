import PromptSync from "prompt-sync";

const prompt = PromptSync();
let personName = prompt("Enter name to check you are friend or not: ");
let message = "";

// My method
// switch(personName.toLowerCase()){
//     case "humais":
//         message = "You and "+personName+" are friends";
//         break;
//     case "raheel":
//         message = "You and "+personName+" are friends";
//         break;
//     case "umer":
//         message = "You and "+personName+" are friends";
//         break;
//     case "pasha":
//         message = "You and "+personName+" are friends";
//         break;
//     default:
//         message = "Unknown Person or name!!!";
//         break;
// }

// Book method
switch(personName){
    case "humais":
    case "raheel":
    case "umer":
    case "pasha":
        message = personName+" is my friend.";
        break;
    default:
        message = "I don't know "+personName;
        break;
}

console.log(message);