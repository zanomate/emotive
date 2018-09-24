import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace BreakBefore {
    export const set = (...values: Value[]): Sheet => ({breakBefore: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const AVOID: Sheet = set(Keyword.AVOID);
    export const AVOID_PAGE: Sheet = set(Keyword.AVOID_PAGE);
    export const PAGE: Sheet = set(Keyword.PAGE);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const RECTO: Sheet = set(Keyword.RECTO);
    export const VERSO: Sheet = set(Keyword.VERSO);
    export const AVOID_COLUMN: Sheet = set(Keyword.AVOID_COLUMN);
    export const COLUMN: Sheet = set(Keyword.COLUMN);
    export const AVOID_REGION: Sheet = set(Keyword.AVOID_REGION);
    export const REGION: Sheet = set(Keyword.REGION);
}

export namespace BreakInside {
    export const set = (...values: Value[]): Sheet => ({breakInside: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const AVOID: Sheet = set(Keyword.AVOID);
    export const AVOID_PAGE: Sheet = set(Keyword.AVOID_PAGE);
    export const AVOID_COLUMN: Sheet = set(Keyword.AVOID_COLUMN);
    export const AVOID_REGION: Sheet = set(Keyword.AVOID_REGION);
}

export namespace Orphans {
    export const set = (...values: Value[]): Sheet => ({orphans: property(values)});
}

export namespace Widows {
    export const set = (...values: Value[]): Sheet => ({widows: property(values)});
}

export namespace BoxDecorationBreak {
    export const set = (...values: Value[]): Sheet => ({boxDecorationBreak: property(values)});
    export const SLICE: Sheet = set(Keyword.SLICE);
    export const CLONE: Sheet = set(Keyword.CLONE);
}
