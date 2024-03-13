import ElementCreator from '../utils/elementСreator';
import LogoutButton from './LogoutButton';

export default class Header {
  private headerElement: HTMLElement;

  constructor() {
    this.headerElement = this.createHeader();
    const logoutButton = new LogoutButton();
    this.headerElement.appendChild(logoutButton.getButton());
  }

  private createHeader(): HTMLElement {
    const elementCreator = new ElementCreator({
      tag: 'header',
      classNames: ['header'],
    });
    return elementCreator.getElement() as HTMLElement;
  }

  public getHeader(): HTMLElement {
    return this.headerElement;
  }
}
