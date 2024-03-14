import ElementCreator from '../utils/elementСreator';

export class PageWrapper {
  private wrapperElement: HTMLElement;

  constructor(id?: string, classNames: string[] = ['page-wrapper']) {
    const elementCreator = new ElementCreator({
      tag: 'div',
      classNames,
      ...(id && { id }),
    });
    this.wrapperElement = elementCreator.getElement() as HTMLElement;
  }

  public getWrapper(): HTMLElement {
    return this.wrapperElement;
  }

  public cleanWrapper(): void {
    this.wrapperElement.innerHTML = '';
  }
}
