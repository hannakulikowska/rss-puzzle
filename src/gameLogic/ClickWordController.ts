import { puzzleContainer } from '../components/puzzleContainer';
import { phraseContainer } from '../components/phraseContainer';
import { startWordMovement } from './startWordMovement';

export default class ClickWordController {
  static handleWordClick(wordElement: HTMLElement): void {
    const targetContainer =
      wordElement.parentNode === puzzleContainer
        ? phraseContainer
        : puzzleContainer;

    startWordMovement(wordElement, targetContainer);
  }
}
