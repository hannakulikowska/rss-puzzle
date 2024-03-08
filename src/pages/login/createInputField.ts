import ElementCreator from '../../utils/elementСreator';

export function createInputField(placeholder: string): HTMLInputElement {
  const inputFieldCreator = new ElementCreator({
    tag: 'input',
    classNames: ['login-form__input-field'],
  });
  const inputField = inputFieldCreator.getElement() as HTMLInputElement;
  inputField.placeholder = placeholder;
  inputField.required = true;
  return inputField;
}
