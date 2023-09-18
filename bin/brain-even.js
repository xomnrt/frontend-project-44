import readlineSync from "readline-sync";

function greeting() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
}

function isEven(number) {
  return number % 2 === 0;
}

function correctAnswer(number) {
  if (isEven(number)) {
    return "yes";
  }

  return "no";
}

function answerCheck(userName, answer, number) {
  const expected = correctAnswer(number);

  if (answer === expected) {
    console.log("Correct!");
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.
      Let's try again, ${userName}!`);
  }
}

export default function evenNumbersGame() {
  const name = greeting();

  const evenGameDescription =
    "Answer 'yes' if the number is even, otherwise answer 'no'.";
  console.log(evenGameDescription);

  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`Question: ${randomNumber}`);

  const answer = readlineSync.question("Your answer: ");

  answerCheck(name, answer, randomNumber);
}
