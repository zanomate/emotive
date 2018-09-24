import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Overflow {
    export const set = (...values: Value[]): Sheet => ({overflow: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const SCROLL: Sheet = set(Keyword.SCROLL);
}

export namespace OverflowX {
    export const set = (...values: Value[]): Sheet => ({overflowX: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const SCROLL: Sheet = set(Keyword.SCROLL);
}

export namespace OverflowY {
    export const set = (...values: Value[]): Sheet => ({overflowY: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const SCROLL: Sheet = set(Keyword.SCROLL);
}

export namespace OverflowBlock {
    export const set = (...values: Value[]): Sheet => ({overflowBlock: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const SCROLL: Sheet = set(Keyword.SCROLL);
}

export namespace OverflowInline {
    export const set = (...values: Value[]): Sheet => ({overflowInline: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const SCROLL: Sheet = set(Keyword.SCROLL);
}

export namespace BlockOverflow {
    export const set = (...values: Value[]): Sheet => ({blockOverflow: property(values)});
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const ELLIPSIS: Sheet = set(Keyword.ELLIPSIS);
}

export namespace Continue {
    export const set = (...values: Value[]): Sheet => ({continue: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const OVERFLOW: Sheet = set(Keyword.OVERFLOW);
    export const PAGINATE: Sheet = set(Keyword.PAGINATE);
    export const FRAGMENTS: Sheet = set(Keyword.FRAGMENTS);
    export const DISCARD: Sheet = set(Keyword.DISCARD);
}

export namespace LineClamp {
    export const set = (...values: Value[]): Sheet => ({lineClamp: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace MaxLines {
    export const set = (...values: Value[]): Sheet => ({maxLines: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace ScrollbarGutter {
    export const set = (...values: Value[]): Sheet => ({scrollbarGutter: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const STABLE: Sheet = set(Keyword.STABLE);
    export const ALWAYS: Sheet = set(Keyword.ALWAYS);
}
