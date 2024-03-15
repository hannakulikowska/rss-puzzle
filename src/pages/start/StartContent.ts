import { generateElement } from '../../utils/generateElement';

export const contentWrapper = generateElement({
  tag: 'div',
  classNames: ['start__content'],
});

export const titleElement = generateElement({
  tag: 'h1',
  textContent: 'RSS-Puzzle',
  classNames: ['start__title'],
});

export const paragraphElement = generateElement({
  tag: 'p',
  textContent:
    'RSS Puzzle is an interactive mini-game aimed at enhancing English language skills. Players assemble sentences from jumbled words in Phrase Constructor. The game integrates various levels of difficulty, hint options, and a unique puzzle-like experience with artwork.',
  classNames: ['start__description'],
});
