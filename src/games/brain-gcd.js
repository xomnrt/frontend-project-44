import getRandomInRange from '../getRandomInRange.js';

export const description = 'Find the greatest common divisor of given numbers.';

function gcd(number1, number2) {
  if (number2 === 0) {
    return number1;
  }

  return gcd(number2, number1 % number2);
}

function correctAnswer(number1, number2) {
  return gcd(number1, number2);
}

export function generateQuestionAndExpectedAnswer() {
  const randomNumber1 = getRandomInRange(1, 100);
  const randomNumber2 = getRandomInRange(1, 100);

  const question = `${randomNumber1} ${randomNumber2}`;
  const expected = correctAnswer(randomNumber1, randomNumber2).toString();

  return {
    question,
    expected,
  };
}
