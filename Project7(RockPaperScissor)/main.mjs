import random from "random";
import PromptSync from "prompt-sync";

const options = ["Rock","Paper","Scissor"];
const randomValue = random.int(0,2);
const prompt = PromptSync();

let userNumber = prompt("Write 0,1 and 2 for Rock, Paper and Scissor respectively: ");
let computerChoice = options[randomValue];
userNumber = Number(userNumber);
let userChoice = options[userNumber];
let result;

if(userChoice === computerChoice){
    result = "Draw";
} else {
    if(userNumber > randomValue){
        if((userNumber === 1) && (randomValue === 0)){
            result = "Player win, Computer lose!";
        }
        else if((userNumber === 2) && (randomValue === 0)){
            result = "Computer win, Player lose!";
        } else {
            result = "Player win, Computer lose!";
        }
    }
    else if(userNumber < randomValue){
        if((userNumber === 0) && (randomValue === 1)){
            result = "Computer win, Player lose!";
        }
        else if((userNumber === 0) && (randomValue === 2)){
            result = "Player win, Computer lose!";
        } else {
            result = "Computer win, Player lose!";
        }
    }
}

console.log(`Computer choose: ${computerChoice}`);
console.log(`User choose: ${userChoice}`);
console.log("Result: "+result);



