import { property } from '../../utils';
import { BORDER_BOX, CONTENT_BOX } from '../../constants';

const BoxSizing = property('boxSizing');
BoxSizing.CONTENT_BOX = BoxSizing(CONTENT_BOX);
BoxSizing.BORDER_BOX = BoxSizing(BORDER_BOX);
export { BoxSizing };
