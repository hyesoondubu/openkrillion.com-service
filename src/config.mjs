export const SITE = {
  name: 'OpenKrillion', origin: 'https://openkrillion.com',
  repository: 'https://github.com/VulcanEon/openkrillion.com-service',
  description: 'Play Krillion online with OpenKrillion, an independent open-source daily trivia game. One prompt, 25 seconds, and a chance at a One in a Krillion answer.',
  title: 'Krillion Game — Play Free Daily Trivia | OpenKrillion',
  languages: ['en', 'zh'], gameplayLanguage: 'en',
  price: { amount: 0, currency: 'USD', label: 'Free to play', checkout: false },
  rounds: 1, previewSeconds: 3, answerSeconds: 25, maxScore: 100, metresPerPoint: 10,
  models: [], credits: false, accounts: false,
  modes: ['daily', 'practice'],
  features: ['Personalized one-question trivia', 'Practice dives', 'Six rarity tiers', 'Typo correction with confirmation', 'Animated ocean descent', 'Synthesized sound effects', 'Score and depth report', 'Answer review', 'Local history and streaks', 'Shareable results', 'Low-power and colorblind modes'],
  analytics: { plausible: 'https://analytics.howtosurvive.ai/js/pa-TN8noFWTdpdOXZHfj4hrX.js' },
};
export const publicConfig = site => ({ name: site.name, origin: site.origin, repository: site.repository, price: site.price, rounds: site.rounds, previewSeconds: site.previewSeconds, answerSeconds: site.answerSeconds, maxScore: site.maxScore, metresPerPoint: site.metresPerPoint, models: site.models, credits: site.credits, accounts: site.accounts, modes: site.modes, features: site.features, languages: site.languages, gameplayLanguage: site.gameplayLanguage });
