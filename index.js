// Number Guessing Game
import inquirer from "inquirer";
// intializing a random number
let ranNum = Math.floor(Math.random() * 10);
console.log(ranNum);
// input from user to guess a number
let number = await inquirer.prompt([
    {
        name: "guessNum",
        message: "Guess a Number: ",
        type: "number"
    }
]);
// checking the number  
switch (number.guessNum) {
    case ranNum:
        console.log("Your guessed number is correct");
        break;
    default:
        console.log("Your guessed number is incorrect");
        break;
}
