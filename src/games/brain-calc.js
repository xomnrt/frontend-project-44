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

export function generateQuestionAndExpectedAnswer() {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  const expected = correctAnswer(randomNumber1, randomNumber2, operator).toString();

  return {
    question,
    expected,
  };
}

export const description = 'What is the result of the expression?';
