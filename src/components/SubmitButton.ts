import Button from '../utils/Button';
import ButtonParams from '../models/interfaces/ButtonParams';

export default function SubmitButton({
  textContent,
  classNames = [],
}: ButtonParams): HTMLButtonElement {
  return Button({
    type: 'submit',
    textContent: textContent,
    classNames: ['button', ...classNames],
  });
}
