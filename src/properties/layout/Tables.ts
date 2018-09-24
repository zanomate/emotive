import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace TableLayout {
    export const set = (...values: Value[]): Sheet => ({tableLayout: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const FIXED: Sheet = set(Keyword.FIXED);
}

export namespace BorderCollapse {
    export const set = (...values: Value[]): Sheet => ({borderCollapse: property(values)});
    export const COLLAPSE: Sheet = set(Keyword.COLLAPSE);
    export const SEPARATE: Sheet = set(Keyword.SEPARATE);
}

export namespace BorderSpacing {
    export const set = (...values: Value[]): Sheet => ({borderSpacing: property(values)});
}

export namespace CaptionSide {
    export const set = (...values: Value[]): Sheet => ({captionSide: property(values)});
    export const TOP: Sheet = set(Keyword.TOP);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
}

export namespace EmptyCells {
    export const set = (...values: Value[]): Sheet => ({emptyCells: property(values)});
    export const SHOW: Sheet = set(Keyword.SHOW);
    export const HIDE: Sheet = set(Keyword.HIDE);
}
