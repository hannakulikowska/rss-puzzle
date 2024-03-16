import { shuffle } from 'lodash';
import _ from 'lodash';
import ClickWordController from './ClickWordController';

export default class Phrase {
  private phrase: string;

  private container: HTMLElement;

  constructor(phrase: string, container: HTMLElement) {
    this.phrase = phrase;
    this.container = container;
  }

  displayWords(): void {
    const words = this.phrase.split(' ');
    const shuffledWords = shuffle(words);
    const totalLetters = _.sumBy(words, (word) => word.length);
    this.container.innerHTML = '';

    shuffledWords.forEach((word) => {
      const wordElement = document.createElement('span');
      wordElement.classList.add('word');
      wordElement.textContent = word;

      const wordWidthPercentage = (word.length / totalLetters) * 100;
      wordElement.style.width = `${wordWidthPercentage}%`;

      wordElement.addEventListener('click', () =>
        ClickWordController.handleWordClick(wordElement)
      );
      this.container.appendChild(wordElement);
    });
  }
}
