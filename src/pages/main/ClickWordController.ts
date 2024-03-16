import { puzzleContainer } from './puzzleContainer';

export default class ClickWordController {
  static handleWordClick(wordElement: HTMLElement): void {
    const lastElement = puzzleContainer.lastElementChild;
    let startX = parseFloat(getComputedStyle(puzzleContainer).paddingLeft);
    let startY = parseFloat(getComputedStyle(puzzleContainer).paddingTop);

    if (lastElement) {
      const lastElementRect = lastElement.getBoundingClientRect();
      startX =
        lastElementRect.right -
        puzzleContainer.getBoundingClientRect().left +
        parseFloat(getComputedStyle(puzzleContainer).paddingLeft);
      startY =
        lastElementRect.top -
        puzzleContainer.getBoundingClientRect().top +
        parseFloat(getComputedStyle(puzzleContainer).paddingTop);
    }

    const wordRect = wordElement.getBoundingClientRect();
    const translateX =
      startX - (wordRect.left - puzzleContainer.getBoundingClientRect().left);
    const translateY =
      startY - (wordRect.top - puzzleContainer.getBoundingClientRect().top);

    wordElement.style.transition = 'transform 0.5s ease-in-out';
    wordElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
    setTimeout(() => {
      wordElement.style.transform = '';
      puzzleContainer.appendChild(wordElement);
    }, 500);
  }
}
