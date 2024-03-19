import { contentWrapper, paragraphElement } from './StartContent';
import Greeting from './StartGreeting';
import { startButton } from './StartButton';
import { mainElement } from '../../components/Main';
import { puzzleContainer } from '../../components/puzzleContainer';

export default class StartPage {
  public getContent(): HTMLElement {
    const greeting = new Greeting().getElement();

    while (contentWrapper.firstChild) {
      contentWrapper.removeChild(contentWrapper.firstChild);
    }
    mainElement.getElement().innerHTML = '';
    puzzleContainer.innerHTML = '';
    mainElement.addInnerElement(contentWrapper);
    contentWrapper.appendChild(greeting);
    contentWrapper.appendChild(paragraphElement);
    contentWrapper.appendChild(startButton.getElement());

    return mainElement.getElement() as HTMLElement;
  }
}
