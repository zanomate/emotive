import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace WordWrap {
    export const set = (...values: Value[]): Sheet => ({wordWrap: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const BREAK_WORD: Sheet = set(Keywords.BREAK_WORD);
    export const BREAK_SPACES: Sheet = set(Keywords.BREAK_SPACES);
}

export namespace OverflowWrap {
    export const set = (...values: Value[]): Sheet => ({overflowWrap: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const BREAK_WORD: Sheet = set(Keywords.BREAK_WORD);
    export const BREAK_SPACES: Sheet = set(Keywords.BREAK_SPACES);
}
