import { property } from '../../utils';
import {
    ARMENIAN, CIRCLE, DECIMAL, DECIMAL_LEADING_ZERO, DISC, GEORGIAN, INSIDE,
    LIST_CONTAINER, LIST_ITEM, LOWER_ALPHA, LOWER_GREEK, LOWER_LATIN,
    LOWER_ROMAN, NONE, OUTSIDE, SQUARE, UPPER_ALPHA, UPPER_GREEK, UPPER_LATIN,
    UPPER_ROMAN
} from '../../constants';

const ListStyle = property('listStyle');
export { ListStyle };

const ListStyleType = property('listStyleType');
ListStyleType.NONE = ListStyleType(NONE);
ListStyleType.DISC = ListStyleType(DISC);
ListStyleType.CIRCLE = ListStyleType(CIRCLE);
ListStyleType.SQUARE = ListStyleType(SQUARE);
ListStyleType.DECIMAL = ListStyleType(DECIMAL);
ListStyleType.DECIMAL_LEADING_ZERO = ListStyleType(DECIMAL_LEADING_ZERO);
ListStyleType.LOWER_ROMAN = ListStyleType(LOWER_ROMAN);
ListStyleType.UPPER_ROMAN = ListStyleType(UPPER_ROMAN);
ListStyleType.LOWER_GREEK = ListStyleType(LOWER_GREEK);
ListStyleType.UPPER_GREEK = ListStyleType(UPPER_GREEK);
ListStyleType.LOWER_LATIN = ListStyleType(LOWER_LATIN);
ListStyleType.UPPER_LATIN = ListStyleType(UPPER_LATIN);
ListStyleType.ARMENIAN = ListStyleType(ARMENIAN);
ListStyleType.GEORGIAN = ListStyleType(GEORGIAN);
ListStyleType.LOWER_ALPHA = ListStyleType(LOWER_ALPHA);
ListStyleType.UPPER_ALPHA = ListStyleType(UPPER_ALPHA);
export { ListStyleType };

const ListStyleImage = property('listStyleImage');
ListStyleImage.NONE = ListStyleImage(NONE);
export { ListStyleImage };

const ListStylePosition = property('listStylePosition');
ListStylePosition.INSIDE = ListStylePosition(INSIDE);
ListStylePosition.OUTSIDE = ListStylePosition(OUTSIDE);
export { ListStylePosition };

const MarkerSide = property('markerSide');
MarkerSide.LIST_ITEM = MarkerSide(LIST_ITEM);
MarkerSide.LIST_CONTAINER = MarkerSide(LIST_CONTAINER);
export { MarkerSide };
