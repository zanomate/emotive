import { property } from 'utils/index';
import { BORDER_BOX, CONTENT_BOX } from 'constants/index';

export const boxSizing = property('boxSizing');
boxSizing.CONTENT_BOX = boxSizing(CONTENT_BOX);
boxSizing.BORDER_BOX = boxSizing(BORDER_BOX);
