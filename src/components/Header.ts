import ElementCreator from '../utils/elementСreator';
import LogoutButton from './LogoutButton';
import AppName from './AppName';

export default class Header {
  private headerElement: HTMLElement;

  constructor() {
    this.headerElement = this.createHeader();
    const appNameElement = new AppName();
    const logoutButton = new LogoutButton();
    this.headerElement.appendChild(appNameElement.getElement());
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
