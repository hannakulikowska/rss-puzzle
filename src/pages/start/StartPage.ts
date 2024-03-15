import { contentWrapper, paragraphElement } from './StartContent';
import ElementCreator from '../../utils/elementСreator';
import Greeting from './StartGreeting';
import { startButton } from './StartButton';

export default class StartPage {
  public getContent(): HTMLElement {
    const wrapper = new ElementCreator({
      tag: 'main',
      classNames: ['start'],
    });

    const greeting = new Greeting().getElement();

    if (contentWrapper) {
      while (contentWrapper.firstChild) {
        contentWrapper.removeChild(contentWrapper.firstChild);
      }
      wrapper.addInnerElement(contentWrapper);
      contentWrapper.appendChild(greeting);
      if (paragraphElement) contentWrapper.appendChild(paragraphElement);
      contentWrapper.appendChild(startButton.getElement());
    }

    return wrapper.getElement() as HTMLElement;
  }
}
