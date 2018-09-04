import { property } from 'utils';
import { BASELINE, BOTTOM, MIDDLE, NONE, NORMAL, SUB, SUPER, TEXT_BOTTOM, TEXT_TOP, TOP } from 'constants';

export const lineHeight = property('lineHeight');
lineHeight.NORMAL = lineHeight(NORMAL);

export const lineHeightStep = property('lineHeightStep');
lineHeightStep.NONE = lineHeightStep(NONE);

export const verticalAlign = property('verticalAlign');
verticalAlign.BASELINE = verticalAlign(BASELINE);
verticalAlign.SUB = verticalAlign(SUB);
verticalAlign.SUPER = verticalAlign(SUPER);
verticalAlign.TOP = verticalAlign(TOP);
verticalAlign.TEXT_TOP = verticalAlign(TEXT_TOP);
verticalAlign.MIDDLE = verticalAlign(MIDDLE);
verticalAlign.BOTTOM = verticalAlign(BOTTOM);
verticalAlign.TEXT_BOTTOM = verticalAlign(TEXT_BOTTOM);
