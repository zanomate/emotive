import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace Float {
    export const set = (...values: Value[]): Sheet => ({float: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const TOP: Sheet = set(Keyword.TOP);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const BLOCK_START: Sheet = set(Keyword.BLOCK_START);
    export const BLOCK_END: Sheet = set(Keyword.BLOCK_END);
    export const INLINE_START: Sheet = set(Keyword.INLINE_START);
    export const INLINE_END: Sheet = set(Keyword.INLINE_END);
    export const SNAP_BLOCK: Sheet = set(Keyword.SNAP_BLOCK);
    export const SNAP_INLINE: Sheet = set(Keyword.SNAP_INLINE);
}

export namespace Clear {
    export const set = (...values: Value[]): Sheet => ({clear: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const TOP: Sheet = set(Keyword.TOP);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const BLOCK_START: Sheet = set(Keyword.BLOCK_START);
    export const BLOCK_END: Sheet = set(Keyword.BLOCK_END);
    export const INLINE_START: Sheet = set(Keyword.INLINE_START);
    export const INLINE_END: Sheet = set(Keyword.INLINE_END);
}

export namespace FloatReference {
    export const set = (...values: Value[]): Sheet => ({floatReference: property(values)});
    export const INLINE: Sheet = set(Keyword.INLINE);
    export const COLUMN: Sheet = set(Keyword.COLUMN);
    export const REGION: Sheet = set(Keyword.REGION);
    export const PAGE: Sheet = set(Keyword.PAGE);
}

export namespace FloatDefer {
    export const set = (...values: Value[]): Sheet => ({floatDefer: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const LAST: Sheet = set(Keyword.LAST);
}

export namespace FloatOffset {
    export const set = (...values: Value[]): Sheet => ({floatOffset: property(values)});
}
