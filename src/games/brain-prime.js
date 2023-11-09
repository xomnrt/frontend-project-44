import getRandomInRange from '../getRandomInRange.js';

function isPrime(number) {
  for (let i = 2, square = Math.sqrt(number); i <= square; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function correctAnswer(number) {
  const expected = isPrime(number);
  if (expected) {
    return 'yes';
  }
  return 'no';
}

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function generateQuestionAndExpectedAnswer() {
  const randomNumber = getRandomInRange(1, 100);

  const question = `${randomNumber}`;
  const expected = correctAnswer(randomNumber).toString();
  return {
    question,
    expected,
  };
}
