import { displayWords } from '../gameLogic/displayWords';

export default class Phrase {
  private phrase: string;

  private container: HTMLElement;

  constructor(phrase: string, container: HTMLElement) {
    this.phrase = phrase;
    this.container = container;
    displayWords(this.phrase, this.container);
  }
}
