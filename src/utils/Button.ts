import ElementCreator from './elementСreator';
import ButtonParams from '../models/interfaces/ButtonParams';

export default function Button({
  type,
  textContent,
  classNames = [],
  disabled = true,
}: ButtonParams): HTMLButtonElement {
  const buttonCreator = new ElementCreator({
    tag: 'button',
    classNames: ['button', ...classNames],
    textContent: textContent,
  });
  const button = buttonCreator.getElement() as HTMLButtonElement;
  button.type = type;
  button.disabled = disabled;
  return button;
}
