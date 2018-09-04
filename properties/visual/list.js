import { property } from '../../utils';
import {
    ARMENIAN, CIRCLE, DECIMAL, DECIMAL_LEADING_ZERO, DISC, GEORGIAN, INSIDE, LIST_CONTAINER, LIST_ITEM, LOWER_ALPHA,
    LOWER_GREEK, LOWER_LATIN, LOWER_ROMAN, NONE, OUTSIDE, SQUARE, UPPER_ALPHA, UPPER_GREEK, UPPER_LATIN, UPPER_ROMAN
} from '../../constants';

export const listStyle = property('listStyle');

export const listStyleType = property('listStyleType');
listStyleType.NONE = listStyleType(NONE);
listStyleType.DISC = listStyleType(DISC);
listStyleType.CIRCLE = listStyleType(CIRCLE);
listStyleType.SQUARE = listStyleType(SQUARE);
listStyleType.DECIMAL = listStyleType(DECIMAL);
listStyleType.DECIMAL_LEADING_ZERO = listStyleType(DECIMAL_LEADING_ZERO);
listStyleType.LOWER_ROMAN = listStyleType(LOWER_ROMAN);
listStyleType.UPPER_ROMAN = listStyleType(UPPER_ROMAN);
listStyleType.LOWER_GREEK = listStyleType(LOWER_GREEK);
listStyleType.UPPER_GREEK = listStyleType(UPPER_GREEK);
listStyleType.LOWER_LATIN = listStyleType(LOWER_LATIN);
listStyleType.UPPER_LATIN = listStyleType(UPPER_LATIN);
listStyleType.ARMENIAN = listStyleType(ARMENIAN);
listStyleType.GEORGIAN = listStyleType(GEORGIAN);
listStyleType.LOWER_ALPHA = listStyleType(LOWER_ALPHA);
listStyleType.UPPER_ALPHA = listStyleType(UPPER_ALPHA);

export const listStyleImage = property('listStyleImage');
listStyleImage.NONE = listStyleImage(NONE);

export const listStylePosition = property('listStylePosition');
listStylePosition.INSIDE = listStylePosition(INSIDE);
listStylePosition.OUTSIDE = listStylePosition(OUTSIDE);

export const markerSide = property('markerSide');
markerSide.LIST_ITEM = markerSide(LIST_ITEM);
markerSide.LIST_CONTAINER = markerSide(LIST_CONTAINER);
