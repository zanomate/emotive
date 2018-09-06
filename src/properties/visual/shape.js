import { property } from '../../utils';
import { NONE, RECT, ROUND } from '../../constants';

const Shape = property('shape');
Shape.RECT = Shape(RECT);
Shape.ROUND = Shape(ROUND);
export { Shape };

const ShapeOutside = property('shapeOutside');
ShapeOutside.NONE = ShapeOutside(NONE);
export { ShapeOutside };

const ShapeImageThreshold = property('shapeImageThreshold');
export { ShapeImageThreshold };

const ShapeMargin = property('shapeImageThreshold');
export { ShapeMargin };
