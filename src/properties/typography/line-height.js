import { property } from '../../utils/factory';
import { NONE, NORMAL } from '../../constants';

const LineHeight = property('lineHeight');
LineHeight.NORMAL = LineHeight(NORMAL);
export { LineHeight };

const LineHeightStep = property('lineHeightStep');
LineHeightStep.NONE = LineHeightStep(NONE);
export { LineHeightStep };
