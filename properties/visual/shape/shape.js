import { property } from '../../../utils';
import { NONE, RECT, ROUND } from '../../../constants';

export const shape = property('shape');
shape.RECT = shape(RECT);
shape.ROUND = shape(ROUND);

export const shapeOutside = property('shapeOutside');
shapeOutside.NONE = shapeOutside(NONE);

export const shapeImageThreshold = property('shapeImageThreshold');

export const shapeMargin = property('shapeImageThreshold');
