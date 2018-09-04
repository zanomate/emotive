import { property } from '../../../utils';
import { BORDER_BOX, CONTENT_BOX } from '../../../constants';

export const boxSizing = property('boxSizing');
boxSizing.CONTENT_BOX = boxSizing(CONTENT_BOX);
boxSizing.BORDER_BOX = boxSizing(BORDER_BOX);
