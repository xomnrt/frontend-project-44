import readlineSync from 'readline-sync';

import * as brainEven from './games/brain-even.js';
import * as brainCalc from './games/brain-calc.js';
import * as brainGCD from './games/brain-gcd.js';
import * as brainProg from './games/brain-progression.js';
import * as brainPrime from './games/brain-prime.js';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function answerCheck(userName, answer, expected) {
  if (answer === expected) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.
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

function getGameName(gameNames) {
  const gameNameIndex = readlineSync.keyInSelect(
    gameNames,
    'Which game do you want to play?',
  );

  if (gameNameIndex === -1) {
    return undefined;
  }
  return gameNames[gameNameIndex];
}

function getGameData(defaultGameName) {
  const games = {
    'brain-even': {
      order: 1,
      description: brainEven.description,
      generateQuestionAndExpectedAnswer:
        brainEven.generateQuestionAndExpectedAnswer,
    },
    'brain-calc': {
      order: 2,
      description: brainCalc.description,
      generateQuestionAndExpectedAnswer:
       brainCalc.generateQuestionAndExpectedAnswer,
    },
    'brain-gcd': {
      order: 3,
      description: brainGCD.description,
      generateQuestionAndExpectedAnswer:
      brainGCD.generateQuestionAndExpectedAnswer,
    },
    'brain-progression': {
      order: 4,
      description: brainProg.description,
      generateQuestionAndExpectedAnswer:
      brainProg.generateQuestionAndExpectedAnswer,
    },
    'brain-prime': {
      order: 5,
      description: brainPrime.description,
      generateQuestionAndExpectedAnswer:
      brainPrime.generateQuestionAndExpectedAnswer,
    },

  };

  let gameName = defaultGameName;
  if (gameName === undefined) {
    gameName = getGameName(Object.keys(games).sort(
      (a, b) => games[a].order < games[b].order,
    ));
  }

  if (gameName === undefined) {
    return undefined;
  }

  return games[gameName];
}

export default function main(defaultGameName) {
  const name = greeting();

  const gameData = getGameData(defaultGameName);

  if (gameData === undefined) {
    return;
  }

  game(name, gameData.description, gameData.generateQuestionAndExpectedAnswer);
}
