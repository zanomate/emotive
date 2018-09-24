import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Flex {
    export const set = (...values: Value[]): Sheet => ({flex: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace FlexGrow {
    export const set = (...values: Value[]): Sheet => ({flexGrow: property(values)});
}

export namespace FlexShrink {
    export const set = (...values: Value[]): Sheet => ({flexShrink: property(values)});
}

export namespace FlexBasis {
    export const set = (...values: Value[]): Sheet => ({flexBasis: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const CONTENT: Sheet = set(Keyword.CONTENT);
}

export namespace FlexFlow {
    export const set = (...values: Value[]): Sheet => ({flexFlow: property(values)});
}

export namespace FlexDirection {
    export const set = (...values: Value[]): Sheet => ({flexDirection: property(values)});
    export const ROW: Sheet = set(Keyword.ROW);
    export const ROW_REVERSE: Sheet = set(Keyword.ROW_REVERSE);
    export const COLUMN: Sheet = set(Keyword.COLUMN);
    export const COLUMN_REVERSE: Sheet = set(Keyword.COLUMN_REVERSE);
}

export namespace FlexWrap {
    export const set = (...values: Value[]): Sheet => ({flexWrap: property(values)});
    export const NOWRAP: Sheet = set(Keyword.NOWRAP);
    export const WRAP: Sheet = set(Keyword.WRAP);
    export const WRAP_REVERSE: Sheet = set(Keyword.WRAP_REVERSE);
}

export namespace Order {
    export const set = (...values: Value[]): Sheet => ({order: property(values)});
}

/* Justify */

export namespace JustifyContent {
    export const set = (...values: Value[]): Sheet => ({justifyContent: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const SPACE_BETWEEN: Sheet = set(Keyword.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keyword.SPACE_AROUND);
    export const SPACE_EVENLY: Sheet = set(Keyword.SPACE_EVENLY);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}

export namespace JustifyItems {
    export const set = (...values: Value[]): Sheet => ({justifyItems: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const SELF_START: Sheet = set(Keyword.SELF_START);
    export const SELF_END: Sheet = set(Keyword.SELF_END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const LEGACY: Sheet = set(Keyword.LEGACY);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
    export const legacy = (...values: Value[]) => set(Keyword.LEGACY, ...values);
}

export namespace JustifySelf {
    export const set = (...values: Value[]): Sheet => ({justifySelf: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const SELF_START: Sheet = set(Keyword.SELF_START);
    export const SELF_END: Sheet = set(Keyword.SELF_END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const LEGACY: Sheet = set(Keyword.LEGACY);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
    export const legacy = (...values: Value[]) => set(Keyword.LEGACY, ...values);
}

/* Align */

export namespace AlignContent {
    export const set = (...values: Value[]): Sheet => ({alignContent: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const SPACE_BETWEEN: Sheet = set(Keyword.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keyword.SPACE_AROUND);
    export const SPACE_EVENLY: Sheet = set(Keyword.SPACE_EVENLY);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}

export namespace AlignItems {
    export const set = (...values: Value[]): Sheet => ({alignItems: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const SELF_START: Sheet = set(Keyword.SELF_START);
    export const SELF_END: Sheet = set(Keyword.SELF_END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}

export namespace AlignSelf {
    export const set = (...values: Value[]): Sheet => ({alignSelf: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const SELF_START: Sheet = set(Keyword.SELF_START);
    export const SELF_END: Sheet = set(Keyword.SELF_END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}

/* Place */

export namespace PlaceContent {
    export const set = (...values: Value[]): Sheet => ({placeContent: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const SPACE_BETWEEN: Sheet = set(Keyword.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keyword.SPACE_AROUND);
    export const SPACE_EVENLY: Sheet = set(Keyword.SPACE_EVENLY);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}

export namespace PlaceItems {
    export const set = (...values: Value[]): Sheet => ({placeItems: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const SELF_START: Sheet = set(Keyword.SELF_START);
    export const SELF_END: Sheet = set(Keyword.SELF_END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}

export namespace PlaceSelf {
    export const set = (...values: Value[]): Sheet => ({placeSelf: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const FIRST_BASELINE: Sheet = set(Keyword.FIRST, Keyword.BASELINE);
    export const LAST_BASELINE: Sheet = set(Keyword.LAST, Keyword.BASELINE);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const SELF_START: Sheet = set(Keyword.SELF_START);
    export const SELF_END: Sheet = set(Keyword.SELF_END);
    export const FLEX_START: Sheet = set(Keyword.FLEX_START);
    export const FLEX_END: Sheet = set(Keyword.FLEX_END);
    export const safe = (...values: Value[]) => set(Keyword.SAFE, ...values);
    export const unsafe = (...values: Value[]) => set(Keyword.UNSAFE, ...values);
}
