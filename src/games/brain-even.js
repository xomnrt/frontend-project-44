function isEven(number) {
  return number % 2 === 0;
}

function correctAnswer(number) {
  if (isEven(number)) {
    return 'yes';
  }

  return 'no';
}

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export function generateQuestionAndExpectedAnswer() {
  const randomNumber = Math.floor(Math.random() * 100);
  const expected = correctAnswer(randomNumber);

  return {
    question: randomNumber.toString(),
    expected,
  };
}
