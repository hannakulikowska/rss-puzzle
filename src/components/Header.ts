import ElementCreator from '../utils/elementСreator';
import LogoutButton from './LogoutButton';
import Greeting from './AppName';

export default class Header {
  private headerElement: HTMLElement;

  constructor() {
    this.headerElement = this.createHeader();
    const greeting = new Greeting();
    const logoutButton = new LogoutButton();
    this.headerElement.appendChild(greeting.getElement());
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
