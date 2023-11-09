import getRandomInRange from '../getRandomInRange.js';

function correctAnswer(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
}

export const description = 'What is the result of the expression?';

export function generateQuestionAndExpectedAnswer() {
  const randomNumber1 = getRandomInRange(0, 100);
  const randomNumber2 = getRandomInRange(0, 100);

  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, operators.length - 1)];

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  const expected = correctAnswer(randomNumber1, randomNumber2, operator).toString();

  return {
    question,
    expected,
  };
}
