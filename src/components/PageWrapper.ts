import ElementCreator from '../utils/elementСreator';
import PageWrapperParams from '../models/interfaces/PageWrapperParams.ts';

export class PageWrapper {
  private wrapperElement: HTMLElement;

  constructor({ classNames = [], id }: PageWrapperParams) {
    this.wrapperElement = this.createWrapper(classNames, id);
  }

  private createWrapper(classNames: string[], id?: string): HTMLElement {
    const wrapperCreator = new ElementCreator({
      tag: 'div',
      classNames: ['page-wrapper', ...classNames],
    });
    const wrapper = wrapperCreator.getElement() as HTMLElement;
    if (id) {
      wrapper.id = id;
    }
    return wrapper;
  }

  getWrapper(): HTMLElement {
    return this.wrapperElement;
  }
}
