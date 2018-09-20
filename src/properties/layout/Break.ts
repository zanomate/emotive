import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace BreakBefore {
    export const set = (...values: Value[]): Sheet => ({breakBefore: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const AVOID: Sheet = set(Keywords.AVOID);
    export const AVOID_PAGE: Sheet = set(Keywords.AVOID_PAGE);
    export const PAGE: Sheet = set(Keywords.PAGE);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const RECTO: Sheet = set(Keywords.RECTO);
    export const VERSO: Sheet = set(Keywords.VERSO);
    export const AVOID_COLUMN: Sheet = set(Keywords.AVOID_COLUMN);
    export const COLUMN: Sheet = set(Keywords.COLUMN);
    export const AVOID_REGION: Sheet = set(Keywords.AVOID_REGION);
    export const REGION: Sheet = set(Keywords.REGION);
}

export namespace BreakInside {
    export const set = (...values: Value[]): Sheet => ({breakInside: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const AVOID: Sheet = set(Keywords.AVOID);
    export const AVOID_PAGE: Sheet = set(Keywords.AVOID_PAGE);
    export const AVOID_COLUMN: Sheet = set(Keywords.AVOID_COLUMN);
    export const AVOID_REGION: Sheet = set(Keywords.AVOID_REGION);
}

export namespace Orphans {
    export const set = (...values: Value[]): Sheet => ({orphans: property(values)});
}

export namespace Widows {
    export const set = (...values: Value[]): Sheet => ({widows: property(values)});
}

export namespace BoxDecorationBreak {
    export const set = (...values: Value[]): Sheet => ({boxDecorationBreak: property(values)});
    export const SLICE: Sheet = set(Keywords.SLICE);
    export const CLONE: Sheet = set(Keywords.CLONE);
}
