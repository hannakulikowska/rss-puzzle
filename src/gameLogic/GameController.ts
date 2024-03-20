import { mainElement } from '../components/Main';
import { phraseContainer } from '../components/phraseContainer';
import { puzzleContainer } from '../components/puzzleContainer';
import Phrase from '../components/Phrase';
import { fetchPhrases } from '../services/fetchPhrases';

export default class GameController {
  static async updateMainContent(): Promise<void> {
    const phrases = await fetchPhrases();
    const mainDOMElement = mainElement.getElement();
    if (mainDOMElement) {
      mainDOMElement.innerHTML = '';
      new Phrase(phrases[0], phraseContainer);
      mainDOMElement.appendChild(puzzleContainer);
      mainDOMElement.appendChild(phraseContainer);
    }
  }
}
