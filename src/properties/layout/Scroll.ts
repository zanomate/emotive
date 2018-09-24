import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace ScrollBehavior {
    export const set = (...values: Value[]): Sheet => ({scrollBehavior: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const SMOOTH: Sheet = set(Keyword.SMOOTH);
}

export namespace ScrollMargin {
    export const set = (...values: Value[]): Sheet => ({scrollMargin: property(values)});
}

export namespace ScrollMarginBlock {
    export const set = (...values: Value[]): Sheet => ({scrollMarginBlock: property(values)});
}

export namespace ScrollMarginBlockStart {
    export const set = (...values: Value[]): Sheet => ({scrollMarginBlockStart: property(values)});
}

export namespace ScrollMarginBlockEnd {
    export const set = (...values: Value[]): Sheet => ({scrollMarginBlockEnd: property(values)});
}

export namespace ScrollMarginInline {
    export const set = (...values: Value[]): Sheet => ({scrollMarginInline: property(values)});
}

export namespace ScrollMarginInlineStart {
    export const set = (...values: Value[]): Sheet => ({scrollMarginInlineStart: property(values)});
}

export namespace ScrollMarginInlineEnd {
    export const set = (...values: Value[]): Sheet => ({scrollMarginInlineEnd: property(values)});
}

export namespace ScrollMarginTop {
    export const set = (...values: Value[]): Sheet => ({scrollMarginTop: property(values)});
}

export namespace ScrollMarginLeft {
    export const set = (...values: Value[]): Sheet => ({scrollMarginLeft: property(values)});
}

export namespace ScrollMarginRight {
    export const set = (...values: Value[]): Sheet => ({scrollMarginRight: property(values)});
}

export namespace ScrollMarginBottom {
    export const set = (...values: Value[]): Sheet => ({scrollMarginBottom: property(values)});
}

export namespace ScrollPadding {
    export const set = (...values: Value[]): Sheet => ({scrollPadding: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace ScrollPaddingBlock {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingBlock: property(values)});
}

export namespace ScrollPaddingBlockStart {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingBlockStart: property(values)});
}

export namespace ScrollPaddingBlockEnd {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingBlockEnd: property(values)});
}

export namespace ScrollPaddingInline {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingInline: property(values)});
}

export namespace ScrollPaddingInlineStart {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingInlineStart: property(values)});
}

export namespace ScrollPaddingInlineEnd {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingInlineEnd: property(values)});
}

export namespace ScrollPaddingTop {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingTop: property(values)});
}

export namespace ScrollPaddingLeft {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingLeft: property(values)});
}

export namespace ScrollPaddingRight {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingRight: property(values)});
}

export namespace ScrollPaddingBottom {
    export const set = (...values: Value[]): Sheet => ({scrollPaddingBottom: property(values)});
}

export namespace ScrollSnapAlign {
    export const set = (...values: Value[]): Sheet => ({scrollSnapAlign: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const CENTER: Sheet = set(Keyword.CENTER);
}

export namespace ScrollSnapStop {
    export const set = (...values: Value[]): Sheet => ({scrollSnapStop: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const ALWAYS: Sheet = set(Keyword.ALWAYS);
}

export namespace ScrollSnapType {
    export const set = (...values: Value[]): Sheet => ({scrollSnapType: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const X: Sheet = set(Keyword.X);
    export const Y: Sheet = set(Keyword.Y);
    export const INLINE: Sheet = set(Keyword.INLINE);
    export const BLOCK: Sheet = set(Keyword.BLOCK);
    export const BOTH: Sheet = set(Keyword.BOTH);
    export const MANDATORY: Sheet = set(Keyword.MANDATORY);
    export const PROXIMITY: Sheet = set(Keyword.PROXIMITY);
}
