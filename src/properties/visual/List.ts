import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace ListStyle {
    export const set = (...values: Value[]): Sheet => ({listStyle: property(values)});
}

export namespace ListStyleType {
    export const set = (...values: Value[]): Sheet => ({listStyleType: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const DISC: Sheet = set(Keyword.DISC);
    export const CIRCLE: Sheet = set(Keyword.CIRCLE);
    export const SQUARE: Sheet = set(Keyword.SQUARE);
    export const DECIMAL: Sheet = set(Keyword.DECIMAL);
    export const DECIMAL_LEADING_ZERO: Sheet = set(Keyword.DECIMAL_LEADING_ZERO);
    export const LOWER_ROMAN: Sheet = set(Keyword.LOWER_ROMAN);
    export const UPPER_ROMAN: Sheet = set(Keyword.UPPER_ROMAN);
    export const LOWER_GREEK: Sheet = set(Keyword.LOWER_GREEK);
    export const UPPER_GREEK: Sheet = set(Keyword.UPPER_GREEK);
    export const LOWER_LATIN: Sheet = set(Keyword.LOWER_LATIN);
    export const UPPER_LATIN: Sheet = set(Keyword.UPPER_LATIN);
    export const ARMENIAN: Sheet = set(Keyword.ARMENIAN);
    export const GEORGIAN: Sheet = set(Keyword.GEORGIAN);
    export const LOWER_ALPHA: Sheet = set(Keyword.LOWER_ALPHA);
    export const UPPER_ALPHA: Sheet = set(Keyword.UPPER_ALPHA);
}

export namespace ListStyleImage {
    export const set = (...values: Value[]): Sheet => ({listStyleImage: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace ListStylePosition {
    export const set = (...values: Value[]): Sheet => ({listStylePosition: property(values)});
    export const INSIDE: Sheet = set(Keyword.INSIDE);
    export const OUTSIDE: Sheet = set(Keyword.OUTSIDE);
}

export namespace MarkerSide {
    export const set = (...values: Value[]): Sheet => ({markerSide: property(values)});
    export const LIST_ITEM: Sheet = set(Keyword.LIST_ITEM);
    export const LIST_CONTAINER: Sheet = set(Keyword.LIST_CONTAINER);
}
