import { ElementParams } from '../models/interfaces/ElementParams';

export default class ElementCreator {
  private element: HTMLElement | null;

  constructor(params: ElementParams) {
    this.element = this.createElement(params);
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }

  public addInnerElement(element: HTMLElement | ElementCreator): void {
    if (!this.element) return;

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
    if (id) this.setID(element, id);
    if (textContent !== undefined) this.setTextContent(element, textContent);
    if (callback) this.setCallback(element, callback);
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

  private setID(element: HTMLElement, id: string): void {
    element.removeAttribute('id');
    element.setAttribute('id', id);
  }

  private setTextContent(element: HTMLElement, text: string): void {
    element.textContent = text;
  }

  private setCallback(
    element: HTMLElement,
    callback: (event: Event) => void
  ): void {
    element.addEventListener('click', callback);
  }
}
