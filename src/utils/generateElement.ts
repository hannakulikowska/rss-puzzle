import ElementCreator from './elementСreator';
import { ElementParams } from '../models/interfaces/ElementParams';

export const generateElement = (params: ElementParams) => {
  const elementCreator = new ElementCreator(params);
  return elementCreator.getElement();
};
