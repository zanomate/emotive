import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace PageBreakBefore {
    export const set = (...values: Value[]): Sheet => ({pageBreakBefore: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const ALWAYS: Sheet = set(Keywords.ALWAYS);
    export const AVOID: Sheet = set(Keywords.AVOID);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
}

export namespace PageBreakAfter {
    export const set = (...values: Value[]): Sheet => ({pageBreakAfter: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const ALWAYS: Sheet = set(Keywords.ALWAYS);
    export const AVOID: Sheet = set(Keywords.AVOID);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
}

export namespace PageBreakInside {
    export const set = (...values: Value[]): Sheet => ({pageBreakInside: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const AVOID: Sheet = set(Keywords.AVOID);
}
