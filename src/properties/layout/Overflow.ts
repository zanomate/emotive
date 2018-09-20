import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Overflow {
    export const set = (...values: Value[]): Sheet => ({overflow: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const VISIBLE: Sheet = set(Keywords.VISIBLE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const SCROLL: Sheet = set(Keywords.SCROLL);
}

export namespace OverflowX {
    export const set = (...values: Value[]): Sheet => ({overflowX: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const VISIBLE: Sheet = set(Keywords.VISIBLE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const SCROLL: Sheet = set(Keywords.SCROLL);
}

export namespace OverflowY {
    export const set = (...values: Value[]): Sheet => ({overflowY: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const VISIBLE: Sheet = set(Keywords.VISIBLE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const SCROLL: Sheet = set(Keywords.SCROLL);
}

export namespace OverflowBlock {
    export const set = (...values: Value[]): Sheet => ({overflowBlock: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const VISIBLE: Sheet = set(Keywords.VISIBLE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const SCROLL: Sheet = set(Keywords.SCROLL);
}

export namespace OverflowInline {
    export const set = (...values: Value[]): Sheet => ({overflowInline: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const VISIBLE: Sheet = set(Keywords.VISIBLE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const SCROLL: Sheet = set(Keywords.SCROLL);
}

export namespace BlockOverflow {
    export const set = (...values: Value[]): Sheet => ({blockOverflow: property(values)});
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const ELLIPSIS: Sheet = set(Keywords.ELLIPSIS);
}

export namespace Continue {
    export const set = (...values: Value[]): Sheet => ({continue: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const OVERFLOW: Sheet = set(Keywords.OVERFLOW);
    export const PAGINATE: Sheet = set(Keywords.PAGINATE);
    export const FRAGMENTS: Sheet = set(Keywords.FRAGMENTS);
    export const DISCARD: Sheet = set(Keywords.DISCARD);
}

export namespace LineClamp {
    export const set = (...values: Value[]): Sheet => ({lineClamp: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace MaxLines {
    export const set = (...values: Value[]): Sheet => ({maxLines: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace ScrollbarGutter {
    export const set = (...values: Value[]): Sheet => ({scrollbarGutter: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const STABLE: Sheet = set(Keywords.STABLE);
    export const ALWAYS: Sheet = set(Keywords.ALWAYS);
}
