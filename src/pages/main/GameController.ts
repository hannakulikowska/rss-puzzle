import { mainElement } from '../../components/Main';
import { phraseContainer } from './phraseContainer';
import { puzzleContainer } from './puzzleContainer';
import Phrase from './Phrase';
import { fetchPhrases } from './fetchPhrases';

export default class GameController {
  static async updateMainContent(): Promise<void> {
    const phrases = await fetchPhrases();
    const mainDOMElement = mainElement.getElement();
    if (mainDOMElement) {
      mainDOMElement.innerHTML = '';
      const phraseInstance = new Phrase(phrases[0], phraseContainer);
      phraseInstance.displayWords();
      mainDOMElement.appendChild(puzzleContainer);
      mainDOMElement.appendChild(phraseContainer);
    }
  }
}
