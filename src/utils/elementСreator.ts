import { ElementParams } from '../models/interfaces/ElementParams';

export default class ElementCreator {
  private element: HTMLElement;

  constructor(params: ElementParams) {
    this.element = this.createElement(params);
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public addInnerElement(element: HTMLElement | ElementCreator): void {
    const childElement =
      element instanceof ElementCreator ? element.getElement() : element;
    if (childElement) this.element.append(childElement);
  }

  private createElement({
    tag,
    classNames,
    id,
    textContent,
    callback,
    attributes,
  }: ElementParams): HTMLElement {
    const element = document.createElement(tag);
    if (classNames) this.setCssClasses(element, classNames);
    if (id) element.setAttribute('id', id);
    if (textContent !== undefined) element.textContent = textContent;
    if (callback) element.addEventListener('click', callback);
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key]);
      });
    }
    return element;
  }

  private setCssClasses(element: HTMLElement, cssClasses: string[]): void {
    cssClasses.forEach((cssClass) => element.classList.add(cssClass));
  }
}
