import ElementCreator from '../../utils/elementСreator';

export const puzzleContainer = new ElementCreator({
  tag: 'div',
  classNames: ['puzzle'],
}).getElement() as HTMLElement;
