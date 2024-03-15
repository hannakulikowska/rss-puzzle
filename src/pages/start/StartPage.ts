import { contentWrapper, titleElement, paragraphElement } from './StartContent';
import ElementCreator from '../../utils/elementСreator';
import Greeting from './StartGreeting';

export default class StartPage {
  public getContent(): HTMLElement {
    const wrapper = new ElementCreator({
      tag: 'main',
      classNames: ['start'],
    });

    const greeting = new Greeting().getElement();

    if (contentWrapper) {
      wrapper.addInnerElement(contentWrapper);
      if (titleElement) contentWrapper.appendChild(titleElement);
      contentWrapper.appendChild(greeting);
      if (paragraphElement) contentWrapper.appendChild(paragraphElement);
    }

    return wrapper.getElement() as HTMLElement;
  }
}
