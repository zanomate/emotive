import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace PageBreakBefore {
    export const set = (...values: Value[]): Sheet => ({pageBreakBefore: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const ALWAYS: Sheet = set(Keyword.ALWAYS);
    export const AVOID: Sheet = set(Keyword.AVOID);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
}

export namespace PageBreakAfter {
    export const set = (...values: Value[]): Sheet => ({pageBreakAfter: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const ALWAYS: Sheet = set(Keyword.ALWAYS);
    export const AVOID: Sheet = set(Keyword.AVOID);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
}

export namespace PageBreakInside {
    export const set = (...values: Value[]): Sheet => ({pageBreakInside: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const AVOID: Sheet = set(Keyword.AVOID);
}
