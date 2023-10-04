export const description = 'What number is missing in the progression?';

export function generateQuestionAndExpectedAnswer() {
  const progressionRow = [];
  const randomNumberToAdd = Math.floor(Math.random() * 10);
  const randomIndex = Math.floor(Math.random() * 10);

  for (let i = Math.floor(Math.random() * 10); progressionRow.length < 10; i += randomNumberToAdd) {
    progressionRow.push(i.toString());
  }

  const expected = progressionRow[randomIndex];
  progressionRow[randomIndex] = '..';

  const question = progressionRow.join(' ');

  return {
    question,
    expected,
  };
}
