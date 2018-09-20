import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Position {
    export const set = (...values: Value[]): Sheet => ({position: property(values)});
    export const STATIC: Sheet = set(Keywords.STATIC);
    export const RELATIVE: Sheet = set(Keywords.RELATIVE);
    export const ABSOLUTE: Sheet = set(Keywords.ABSOLUTE);
    export const FIXED: Sheet = set(Keywords.FIXED);
    export const STICKY: Sheet = set(Keywords.STICKY);
}

export namespace Top {
    export const set = (...values: Value[]): Sheet => ({top: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace Left {
    export const set = (...values: Value[]): Sheet => ({left: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace Right {
    export const set = (...values: Value[]): Sheet => ({right: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace Bottom {
    export const set = (...values: Value[]): Sheet => ({bottom: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace OffsetBefore {
    export const set = (...values: Value[]): Sheet => ({offsetBefore: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace OffsetAfter {
    export const set = (...values: Value[]): Sheet => ({offsetAfter: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace OffsetStart {
    export const set = (...values: Value[]): Sheet => ({offsetStart: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace OffsetEnd {
    export const set = (...values: Value[]): Sheet => ({offsetEnd: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}
