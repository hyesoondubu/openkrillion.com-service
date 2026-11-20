// A one-question personalized round. Both spellings are accepted as one answer.
const a = (answer, tier, aliases = []) => ({ answer, tier, aliases });
export const DEMO = {
  dayNumber: 1, source: 'Personalized Krillion round',
  prompts: [
    { id: 'p1', text: 'Something to do on a Friday night', answers: [a('Salt & Light gathering', 'krillion', ['Salt and light gathering'])] },
  ],
};
