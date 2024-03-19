import { shuffle } from 'lodash';
import _ from 'lodash';
import ClickWordController from './ClickWordController';

export const displayWords = (phrase: string, container: HTMLElement) => {
  const words = phrase.split(' ');
  const shuffledWords = shuffle(words);
  const totalLetters = _.sumBy(words, (word) => word.length);
  container.innerHTML = '';

  shuffledWords.forEach((word) => {
    const wordElement = document.createElement('span');
    wordElement.classList.add('word');
    wordElement.textContent = word;

    const wordWidthPercentage = (word.length / totalLetters) * 100;
    wordElement.style.width = `${wordWidthPercentage}%`;

    wordElement.addEventListener('click', () =>
      ClickWordController.handleWordClick(wordElement)
    );

    container.appendChild(wordElement);
  });
};
