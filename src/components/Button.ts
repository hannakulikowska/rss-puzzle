import ElementCreator from '../utils/elementСreator';
import ButtonParams from '../models/interfaces/ButtonParams';

export default class Button {
  private button: HTMLElement;

  constructor(params: ButtonParams) {
    const {
      textContent,
      classNames = [],
      id,
      type,
      disabled = false,
      onClick,
    } = params;

    const attributes: { [key: string]: string } = { type };
    if (disabled) attributes.disabled = 'true';

    const elementCreator = new ElementCreator({
      tag: 'button',
      classNames: ['button', ...classNames],
      id,
      textContent,
      callback: onClick,
      attributes,
    });

    this.button = elementCreator.getElement();
  }

  public getElement(): HTMLElement {
    return this.button;
  }
}
