import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Flex {
    export const set = (...values: Value[]): Sheet => ({flex: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace FlexGrow {
    export const set = (...values: Value[]): Sheet => ({flexGrow: property(values)});
}

export namespace FlexShrink {
    export const set = (...values: Value[]): Sheet => ({flexShrink: property(values)});
}

export namespace FlexBasis {
    export const set = (...values: Value[]): Sheet => ({flexBasis: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const CONTENT: Sheet = set(Keywords.CONTENT);
}

export namespace FlexFlow {
    export const set = (...values: Value[]): Sheet => ({flexFlow: property(values)});
}

export namespace FlexDirection {
    export const set = (...values: Value[]): Sheet => ({flexDirection: property(values)});
    export const ROW: Sheet = set(Keywords.ROW);
    export const ROW_REVERSE: Sheet = set(Keywords.ROW_REVERSE);
    export const COLUMN: Sheet = set(Keywords.COLUMN);
    export const COLUMN_REVERSE: Sheet = set(Keywords.COLUMN_REVERSE);
}

export namespace FlexWrap {
    export const set = (...values: Value[]): Sheet => ({flexWrap: property(values)});
    export const NOWRAP: Sheet = set(Keywords.NOWRAP);
    export const WRAP: Sheet = set(Keywords.WRAP);
    export const WRAP_REVERSE: Sheet = set(Keywords.WRAP_REVERSE);
}

export namespace Order {
    export const set = (...values: Value[]): Sheet => ({order: property(values)});
}

/* Justify */

export namespace JustifyContent {
    export const set = (...values: Value[]): Sheet => ({justifyContent: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const SPACE_BETWEEN: Sheet = set(Keywords.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keywords.SPACE_AROUND);
    export const SPACE_EVENLY: Sheet = set(Keywords.SPACE_EVENLY);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}

export namespace JustifyItems {
    export const set = (...values: Value[]): Sheet => ({justifyItems: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const SELF_START: Sheet = set(Keywords.SELF_START);
    export const SELF_END: Sheet = set(Keywords.SELF_END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const LEGACY: Sheet = set(Keywords.LEGACY);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
    export const legacy = (...values: Value[]) => set(Keywords.LEGACY, ...values);
}

export namespace JustifySelf {
    export const set = (...values: Value[]): Sheet => ({justifySelf: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const SELF_START: Sheet = set(Keywords.SELF_START);
    export const SELF_END: Sheet = set(Keywords.SELF_END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const LEGACY: Sheet = set(Keywords.LEGACY);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
    export const legacy = (...values: Value[]) => set(Keywords.LEGACY, ...values);
}

/* Align */

export namespace AlignContent {
    export const set = (...values: Value[]): Sheet => ({alignContent: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const SPACE_BETWEEN: Sheet = set(Keywords.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keywords.SPACE_AROUND);
    export const SPACE_EVENLY: Sheet = set(Keywords.SPACE_EVENLY);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}

export namespace AlignItems {
    export const set = (...values: Value[]): Sheet => ({alignItems: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const SELF_START: Sheet = set(Keywords.SELF_START);
    export const SELF_END: Sheet = set(Keywords.SELF_END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}

export namespace AlignSelf {
    export const set = (...values: Value[]): Sheet => ({alignSelf: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const SELF_START: Sheet = set(Keywords.SELF_START);
    export const SELF_END: Sheet = set(Keywords.SELF_END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}

/* Place */

export namespace PlaceContent {
    export const set = (...values: Value[]): Sheet => ({placeContent: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const SPACE_BETWEEN: Sheet = set(Keywords.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keywords.SPACE_AROUND);
    export const SPACE_EVENLY: Sheet = set(Keywords.SPACE_EVENLY);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}

export namespace PlaceItems {
    export const set = (...values: Value[]): Sheet => ({placeItems: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const SELF_START: Sheet = set(Keywords.SELF_START);
    export const SELF_END: Sheet = set(Keywords.SELF_END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}

export namespace PlaceSelf {
    export const set = (...values: Value[]): Sheet => ({placeSelf: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keywords.FIRST, Keywords.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keywords.LAST, Keywords.BASELINE);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const SELF_START: Sheet = set(Keywords.SELF_START);
    export const SELF_END: Sheet = set(Keywords.SELF_END);
    export const FLEX_START: Sheet = set(Keywords.FLEX_START);
    export const FLEX_END: Sheet = set(Keywords.FLEX_END);
    export const safe = (...values: Value[]) => set(Keywords.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keywords.UNSAFE, ...values);
}
