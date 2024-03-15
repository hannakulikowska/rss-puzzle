import ElementCreator from '../../utils/elementСreator';

export default class MainPage {
  public getMainPage(): HTMLElement {
    const wrapper = new ElementCreator({
      tag: 'main',
      classNames: ['main'],
    });

    return wrapper.getElement() as HTMLElement;
  }
}
