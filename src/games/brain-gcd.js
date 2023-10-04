export const description = 'Find the greatest common divider of given numbers.';

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
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;

  const question = `${randomNumber1} ${randomNumber2}`;
  const expected = correctAnswer(randomNumber1, randomNumber2).toString();

  return {
    question,
    expected,
  };
}

generateQuestionAndExpectedAnswer();
