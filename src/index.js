import readlineSync from 'readline-sync';
import greeting from './cli.js';

function answerCheck(userName, answer, expected) {
  if (answer === expected) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expected}".
        Let's try again, ${userName}!`);

  return false;
}

const CORRECT_ANSWERS_TO_WIN = 3;

function game(name, description, generateQuestionAndExpectedAnswer) {
  console.log(description);

  for (
    let rightAnswers = 0;
    rightAnswers < CORRECT_ANSWERS_TO_WIN;
    rightAnswers += 1
  ) {
    const { question, expected } = generateQuestionAndExpectedAnswer();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const isCorrect = answerCheck(name, answer, expected);

    if (!isCorrect) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default function main(gameDescription, generateQuestionAndExpectedAnswer) {
  const name = greeting();
  game(name, gameDescription, generateQuestionAndExpectedAnswer);
}
