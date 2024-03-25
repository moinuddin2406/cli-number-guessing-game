#!/usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate  random number
// 2) user input for guessing number
// 3) compare user input with computre generated number and show result
console.log("\n\tWellcome to MOIN CLI-NUMBER-GUESSING GAME\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5)"
    },]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! you guess a correct number.");
}
else {
    console.log("sorry, you guess wrong number");
}
