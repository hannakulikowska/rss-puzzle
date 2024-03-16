import ElementCreator from '../utils/elementСreator';

export default class AppName {
  private appNameElement: HTMLElement;

  constructor() {
    const element = new ElementCreator({
      tag: 'h1',
      classNames: ['header__title'],
      textContent: 'RSS-Puzzle',
    }).getElement();

    this.appNameElement = element;
  }

  public getElement(): HTMLElement {
    return this.appNameElement;
  }
}
