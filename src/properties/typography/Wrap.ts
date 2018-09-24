import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace WordWrap {
    export const set = (...values: Value[]): Sheet => ({wordWrap: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const BREAK_WORD: Sheet = set(Keyword.BREAK_WORD);
    export const BREAK_SPACES: Sheet = set(Keyword.BREAK_SPACES);
}

export namespace OverflowWrap {
    export const set = (...values: Value[]): Sheet => ({overflowWrap: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const BREAK_WORD: Sheet = set(Keyword.BREAK_WORD);
    export const BREAK_SPACES: Sheet = set(Keyword.BREAK_SPACES);
}
