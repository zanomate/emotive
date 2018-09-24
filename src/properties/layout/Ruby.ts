import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace RubyPosition {
    export const set = (...values: Value[]): Sheet => ({rubyPosition: property(values)});
    export const OVER: Sheet = set(Keyword.OVER);
    export const UNDER: Sheet = set(Keyword.UNDER);
    export const INTER_CHARACTER: Sheet = set(Keyword.INTER_CHARACTER);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const LEFT: Sheet = set(Keyword.LEFT);
}

export namespace RubyMerge {
    export const set = (...values: Value[]): Sheet => ({rubyMerge: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const SEPARATE: Sheet = set(Keyword.SEPARATE);
    export const COLLAPSE: Sheet = set(Keyword.COLLAPSE);
}

export namespace RubyAlign {
    export const set = (...values: Value[]): Sheet => ({rubyAlign: property(values)});
    export const START: Sheet = set(Keyword.START);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const SPACE_BETWEEN: Sheet = set(Keyword.SPACE_BETWEEN);
    export const SPACE_AROUND: Sheet = set(Keyword.SPACE_AROUND);
}
