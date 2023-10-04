function isPrime(number) {
  if (number > 0) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
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
  const randomNumber = Math.floor(Math.random() * 100);

  const question = `${randomNumber}`;
  const expected = correctAnswer(randomNumber).toString();
  return {
    question,
    expected,
  };
}
