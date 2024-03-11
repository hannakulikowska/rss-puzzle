import ElementCreator from './elementСreator';

export const createInputField = (placeholder: string): HTMLInputElement => {
  const inputCreator = new ElementCreator({
    tag: 'input',
    classNames: ['form__input-field'],
    attributes: { placeholder: placeholder, required: 'true' },
  });
  return inputCreator.getElement() as HTMLInputElement;
};
