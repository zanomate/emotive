import { property } from '../../utils/factory';
import { AUTO, TRANSPARENT } from '../../constants';

const Color = property('color');
Color.TRANSPARENT = Color(TRANSPARENT);
export { Color };

const CaretColor = property('caretColor');
CaretColor.AUTO = CaretColor(AUTO);
CaretColor.TRANSPARENT = CaretColor(TRANSPARENT);
export { CaretColor };

const Opacity = property('opacity');
export { Opacity };
