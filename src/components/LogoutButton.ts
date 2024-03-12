import ElementCreator from '../utils/elementСreator';
import { handleLogoutClick } from '../utils/start/LogoutHandler';

export default class LogoutButton {
  private buttonElement: HTMLButtonElement;

  constructor() {
    this.buttonElement = this.createButton();
  }

  private createButton(): HTMLButtonElement {
    const elementCreator = new ElementCreator({
      tag: 'button',
      classNames: ['button', 'start__logout-button', 'icon-logout-1'],
      attributes: { type: 'button', title: 'Log Out' },
      callback: handleLogoutClick,
    });
    return elementCreator.getElement() as HTMLButtonElement;
  }

  public getButton(): HTMLButtonElement {
    return this.buttonElement;
  }
}
