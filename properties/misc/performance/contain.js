import { property } from '../../../utils';
import { CONTENT, LAYOUT, NONE, PAINT, SIZE, STRICT, STYLE } from '../../../constants';

export const contain = property('contain');
contain.NONE = contain(NONE);
contain.STRICT = contain(STRICT);
contain.CONTENT = contain(CONTENT);
contain.SIZE = contain(SIZE);
contain.LAYOUT = contain(LAYOUT);
contain.STYLE = contain(STYLE);
contain.PAINT = contain(PAINT);
