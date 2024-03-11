import ElementCreator from './elementСreator';

export const createErrorContainer = (): HTMLElement => {
  const errorCreator = new ElementCreator({
    tag: 'div',
    classNames: ['form__errors'],
  });
  return errorCreator.getElement() as HTMLElement;
};
