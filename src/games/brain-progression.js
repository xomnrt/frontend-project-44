import getRandomInRange from '../getRandomInRange.js';

export const description = 'What number is missing in the progression?';

export function generateQuestionAndExpectedAnswer() {
  const progressionRow = [];
  const randomNumberToAdd = getRandomInRange(1, 10);
  const randomIndex = getRandomInRange(0, 9);
  const base = getRandomInRange(1, 10);

  for (let i = base; progressionRow.length < 10; i += randomNumberToAdd) {
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
