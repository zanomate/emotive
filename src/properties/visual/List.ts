import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace ListStyle {
    export const set = (...values: Value[]): Sheet => ({listStyle: property(values)});
}

export namespace ListStyleType {
    export const set = (...values: Value[]): Sheet => ({listStyleType: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const DISC: Sheet = set(Keywords.DISC);
    export const CIRCLE: Sheet = set(Keywords.CIRCLE);
    export const SQUARE: Sheet = set(Keywords.SQUARE);
    export const DECIMAL: Sheet = set(Keywords.DECIMAL);
    export const DECIMAL_LEADING_ZERO: Sheet = set(Keywords.DECIMAL_LEADING_ZERO);
    export const LOWER_ROMAN: Sheet = set(Keywords.LOWER_ROMAN);
    export const UPPER_ROMAN: Sheet = set(Keywords.UPPER_ROMAN);
    export const LOWER_GREEK: Sheet = set(Keywords.LOWER_GREEK);
    export const UPPER_GREEK: Sheet = set(Keywords.UPPER_GREEK);
    export const LOWER_LATIN: Sheet = set(Keywords.LOWER_LATIN);
    export const UPPER_LATIN: Sheet = set(Keywords.UPPER_LATIN);
    export const ARMENIAN: Sheet = set(Keywords.ARMENIAN);
    export const GEORGIAN: Sheet = set(Keywords.GEORGIAN);
    export const LOWER_ALPHA: Sheet = set(Keywords.LOWER_ALPHA);
    export const UPPER_ALPHA: Sheet = set(Keywords.UPPER_ALPHA);
}

export namespace ListStyleImage {
    export const set = (...values: Value[]): Sheet => ({listStyleImage: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace ListStylePosition {
    export const set = (...values: Value[]): Sheet => ({listStylePosition: property(values)});
    export const INSIDE: Sheet = set(Keywords.INSIDE);
    export const OUTSIDE: Sheet = set(Keywords.OUTSIDE);
}

export namespace MarkerSide {
    export const set = (...values: Value[]): Sheet => ({markerSide: property(values)});
    export const LIST_ITEM: Sheet = set(Keywords.LIST_ITEM);
    export const LIST_CONTAINER: Sheet = set(Keywords.LIST_CONTAINER);
}
