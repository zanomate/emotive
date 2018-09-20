import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Grid {
    export const set = (...values: Value[]): Sheet => ({grid: property(values)});
}

export namespace GridArea {
    export const set = (...values: Value[]): Sheet => ({gridArea: property(values)});
}

export namespace GridAutoColumns {
    export const set = (...values: Value[]): Sheet => ({gridAutoColumns: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
}

export namespace GridAutoRows {
    export const set = (...values: Value[]): Sheet => ({gridAutoRows: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
}

export namespace GridAutoFlow {
    export const set = (...values: Value[]): Sheet => ({gridAutoFlow: property(values)});
    export const ROW: Sheet = set(Keywords.ROW);
    export const COLUMN: Sheet = set(Keywords.COLUMN);
    export const DENSE: Sheet = set(Keywords.DENSE);
}

export namespace GridRow {
    export const set = (...values: Value[]): Sheet => ({gridRow: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const span = (...values: Value[]) => set(Keywords.SPAN, ...values);
}

export namespace GridRowStart {
    export const set = (...values: Value[]): Sheet => ({gridRowStart: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const span = (...values: Value[]) => set(Keywords.SPAN, ...values);
}

export namespace GridRowEnd {
    export const set = (...values: Value[]): Sheet => ({gridRowEnd: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const span = (...values: Value[]) => set(Keywords.SPAN, ...values);
}

export namespace GridColumn {
    export const set = (...values: Value[]): Sheet => ({gridColumn: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const span = (...values: Value[]) => set(Keywords.SPAN, ...values);
}

export namespace GridColumnStart {
    export const set = (...values: Value[]): Sheet => ({gridColumnStart: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const span = (...values: Value[]) => set(Keywords.SPAN, ...values);
}

export namespace GridColumnEnd {
    export const set = (...values: Value[]): Sheet => ({gridColumnEnd: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const span = (...values: Value[]) => set(Keywords.SPAN, ...values);
}

export namespace GridTemplate {
    export const set = (...values: Value[]): Sheet => ({gridTemplate: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace GridTemplateAreas {
    export const set = (...values: Value[]): Sheet => ({gridTemplateAreas: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace GridTemplateColumns {
    export const set = (...values: Value[]): Sheet => ({gridTemplateColumns: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace GridTemplateRows {
    export const set = (...values: Value[]): Sheet => ({gridTemplateRows: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}
