import { property } from '../../utils';
import { ABSOLUTE, AUTO, FIXED, RELATIVE, STATIC, STICKY } from '../../constants';

export const position = property('position');
position.STATIC = position(STATIC);
position.RELATIVE = position(RELATIVE);
position.ABSOLUTE = position(ABSOLUTE);
position.FIXED = position(FIXED);
position.STICKY = position(STICKY);

export const top = property('top');
top.AUTO = top(AUTO);

export const bottom = property('bottom');
bottom.AUTO = bottom(AUTO);

export const left = property('left');
left.AUTO = left(AUTO);

export const right = property('right');
right.AUTO = right(AUTO);

export const offsetBefore = property('offsetBefore');
offsetBefore.AUTO = offsetBefore(AUTO);

export const offsetAfter = property('offsetAfter');
offsetAfter.AUTO = offsetAfter(AUTO);

export const offsetStart = property('offsetStart');
offsetStart.AUTO = offsetStart(AUTO);

export const offsetEnd = property('offsetEnd');
offsetEnd.AUTO = offsetEnd(AUTO);
