
//This loop will execute the code block at least once because the condition i < 5 is checked after the loop body. It prints numbers from 0 to 4.

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);


//This loop repeatedly prompts the user to enter a number until they enter a value greater than 100 or cancel the prompt.

let userInput;

do {
  userInput = prompt("Enter a number greater than 100:", "");
} while (userInput <= 100 && userInput !== null);

console.log("You entered: " + userInput);


//This loop continuously prompts the user to enter numbers and calculates their sum until they enter 0, at which point the loop terminates.

let sum = 0;
let number;

do {
  number = parseInt(prompt("Enter a number (0 to stop):", ""));
  sum += number;
} while (number !== 0);

console.log("Sum of entered numbers: " + sum);


//This loop prompts the user to enter either 'yes' or 'no' (case-insensitive) and continues until a valid input is provided.

let userInput1;

do {
  userInput1 = prompt("Enter 'yes' or 'no':", "").toLowerCase();
} while (userInput1 !== 'yes' && userInput1 !== 'no');

console.log("You entered: " + userInput1);
