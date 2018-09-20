import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace TableLayout {
    export const set = (...values: Value[]): Sheet => ({tableLayout: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const FIXED: Sheet = set(Keywords.FIXED);
}

export namespace BorderCollapse {
    export const set = (...values: Value[]): Sheet => ({borderCollapse: property(values)});
    export const COLLAPSE: Sheet = set(Keywords.COLLAPSE);
    export const SEPARATE: Sheet = set(Keywords.SEPARATE);
}

export namespace BorderSpacing {
    export const set = (...values: Value[]): Sheet => ({borderSpacing: property(values)});
}

export namespace CaptionSide {
    export const set = (...values: Value[]): Sheet => ({captionSide: property(values)});
    export const TOP: Sheet = set(Keywords.TOP);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
}

export namespace EmptyCells {
    export const set = (...values: Value[]): Sheet => ({emptyCells: property(values)});
    export const SHOW: Sheet = set(Keywords.SHOW);
    export const HIDE: Sheet = set(Keywords.HIDE);
}
