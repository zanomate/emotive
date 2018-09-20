import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Content {
    export const set = (...values: Value[]): Sheet => ({content: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const CONTENTS: Sheet = set(Keywords.CONTENTS);
    export const OPEN_QUOTE: Sheet = set(Keywords.OPEN_QUOTE);
    export const CLOSE_QUOTE: Sheet = set(Keywords.CLOSE_QUOTE);
    export const NO_OPEN_QUOTE: Sheet = set(Keywords.NO_OPEN_QUOTE);
    export const NO_CLOSE_QUOTE: Sheet = set(Keywords.NO_CLOSE_QUOTE);
    export const DOCUMENT_URL: Sheet = set(Keywords.DOCUMENT_URL);
    export const url = (...params: Param[]) => set(Methods.url(...params));
    export const targetCounter = (...params: Param[]) => set(Methods.targetCounter(...params));
    export const targetCounters = (...params: Param[]) => set(Methods.targetCounters(...params));
    export const targetText = (...params: Param[]) => set(Methods.targetText(...params));
    export const leader = (...params: Param[]) => set(Methods.leader(...params));
}

export namespace Quotes {
    export const set = (...values: Value[]): Sheet => ({quotes: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace StringSet {
    export const set = (...values: Value[]): Sheet => ({stringSet: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace BookmarkLevel {
    export const set = (...values: Value[]): Sheet => ({bookmarkLevel: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace BookmarkLabel {
    export const set = (...values: Value[]): Sheet => ({bookmarkLabel: property(values)});
    export const CONTENTS: Sheet = set(Keywords.CONTENTS);
    export const OPEN_QUOTE: Sheet = set(Keywords.OPEN_QUOTE);
    export const CLOSE_QUOTE: Sheet = set(Keywords.CLOSE_QUOTE);
    export const NO_OPEN_QUOTE: Sheet = set(Keywords.NO_OPEN_QUOTE);
    export const NO_CLOSE_QUOTE: Sheet = set(Keywords.NO_CLOSE_QUOTE);
    export const DOCUMENT_URL: Sheet = set(Keywords.DOCUMENT_URL);
    export const url = (...params: Param[]) => set(Methods.url(...params));
    export const targetCounter = (...params: Param[]) => set(Methods.targetCounter(...params));
    export const targetCounters = (...params: Param[]) => set(Methods.targetCounters(...params));
    export const targetText = (...params: Param[]) => set(Methods.targetText(...params));
    export const leader = (...params: Param[]) => set(Methods.leader(...params));
}

export namespace BookmarkState {
    export const set = (...values: Value[]): Sheet => ({bookmarkState: property(values)});
    export const OPEN: Sheet = set(Keywords.OPEN);
    export const CLOSE: Sheet = set(Keywords.CLOSE);
}
