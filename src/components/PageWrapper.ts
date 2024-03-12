import ElementCreator from '../utils/elementСreator';
import { ElementParams } from '../models/interfaces/ElementParams';

export class PageWrapper {
  private wrapperElement: HTMLElement;

  constructor(id?: string, classNames: string[] = ['page-wrapper']) {
    this.wrapperElement = this.createWrapper(classNames, id);
  }

  private createWrapper(classNames: string[], id?: string): HTMLElement {
    const params: ElementParams = {
      tag: 'div',
      classNames: classNames,
      ...(id && { id: id }),
    };
    const wrapperCreator = new ElementCreator(params);
    const wrapper = wrapperCreator.getElement() as HTMLElement;
    return wrapper;
  }

  public getWrapper(): HTMLElement {
    return this.wrapperElement;
  }

  public cleanWrapper(): void {
    this.wrapperElement.innerHTML = '';
  }
}
