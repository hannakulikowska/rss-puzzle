import { phraseContainer } from '../components/phraseContainer';

export function returnWordToOriginalPosition(wordElement: HTMLElement) {
  const originalIndex = parseInt(wordElement.dataset.index ?? '0', 10);
  const referenceNode = [...phraseContainer.children].find(
    (element) =>
      parseInt((element as HTMLElement).dataset.index ?? '0', 10) >
      originalIndex
  );

  phraseContainer.insertBefore(wordElement, referenceNode || null);
}
