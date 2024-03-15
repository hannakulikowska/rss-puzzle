import { contentWrapper, titleElement, paragraphElement } from './StartContent';
import ElementCreator from '../../utils/elementСreator';

export default class StartPage {
  public getContent(): HTMLElement {
    const wrapper = new ElementCreator({
      tag: 'main',
      classNames: ['start'],
    });

    if (contentWrapper) {
      wrapper.addInnerElement(contentWrapper);
      if (titleElement) contentWrapper.appendChild(titleElement);
      if (paragraphElement) contentWrapper.appendChild(paragraphElement);
    }

    return wrapper.getElement() as HTMLElement;
  }
}
