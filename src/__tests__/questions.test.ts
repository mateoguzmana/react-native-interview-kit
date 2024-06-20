import { questions } from '../questions';

describe('Questions', () => {
  it('should return a list of questions', async () => {
    expect(questions).toBeDefined();
    expect(questions.length).toBeGreaterThan(0);
  });
});
