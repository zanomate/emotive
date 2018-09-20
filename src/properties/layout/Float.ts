import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Float {
    export const set = (...values: Value[]): Sheet => ({float: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const TOP: Sheet = set(Keywords.TOP);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const BLOCK_START: Sheet = set(Keywords.BLOCK_START);
    export const BLOCK_END: Sheet = set(Keywords.BLOCK_END);
    export const INLINE_START: Sheet = set(Keywords.INLINE_START);
    export const INLINE_END: Sheet = set(Keywords.INLINE_END);
    export const SNAP_BLOCK: Sheet = set(Keywords.SNAP_BLOCK);
    export const SNAP_INLINE: Sheet = set(Keywords.SNAP_INLINE);
}

export namespace Clear {
    export const set = (...values: Value[]): Sheet => ({clear: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const TOP: Sheet = set(Keywords.TOP);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const BLOCK_START: Sheet = set(Keywords.BLOCK_START);
    export const BLOCK_END: Sheet = set(Keywords.BLOCK_END);
    export const INLINE_START: Sheet = set(Keywords.INLINE_START);
    export const INLINE_END: Sheet = set(Keywords.INLINE_END);
}

export namespace FloatReference {
    export const set = (...values: Value[]): Sheet => ({floatReference: property(values)});
    export const INLINE: Sheet = set(Keywords.INLINE);
    export const COLUMN: Sheet = set(Keywords.COLUMN);
    export const REGION: Sheet = set(Keywords.REGION);
    export const PAGE: Sheet = set(Keywords.PAGE);
}

export namespace FloatDefer {
    export const set = (...values: Value[]): Sheet => ({floatDefer: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const LAST: Sheet = set(Keywords.LAST);
}

export namespace FloatOffset {
    export const set = (...values: Value[]): Sheet => ({floatOffset: property(values)});
}
