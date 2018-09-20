import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace RubyPosition {
    export const set = (...values: Value[]): Sheet => ({rubyPosition: property(values)});
    export const OVER: Sheet = set(Keywords.OVER);
    export const UNDER: Sheet = set(Keywords.UNDER);
    export const INTER_CHARACTER: Sheet = set(Keywords.INTER_CHARACTER);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const LEFT: Sheet = set(Keywords.LEFT);
}

export namespace RubyMerge {
    export const set = (...values: Value[]): Sheet => ({rubyMerge: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const SEPARATE: Sheet = set(Keywords.SEPARATE);
    export const COLLAPSE: Sheet = set(Keywords.COLLAPSE);
}

export namespace RubyAlign {
    export const set = (...values: Value[]): Sheet => ({rubyAlign: property(values)});
    export const START: Sheet = set(Keywords.START);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const SPACE_BETWEEN: Sheet = set(Keywords.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keywords.SPACE_AROUND);
}
