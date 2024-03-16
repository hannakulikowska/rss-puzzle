import ElementCreator from '../../utils/elementСreator';

export const phraseContainer = new ElementCreator({
  tag: 'div',
  classNames: ['phrase'],
}).getElement() as HTMLElement;
