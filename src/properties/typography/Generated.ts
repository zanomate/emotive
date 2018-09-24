import { Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Method } from 'methods';

export namespace Content {
    export const set = (...values: Value[]): Sheet => ({content: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const CONTENTS: Sheet = set(Keyword.CONTENTS);
    export const OPEN_QUOTE: Sheet = set(Keyword.OPEN_QUOTE);
    export const CLOSE_QUOTE: Sheet = set(Keyword.CLOSE_QUOTE);
    export const NO_OPEN_QUOTE: Sheet = set(Keyword.NO_OPEN_QUOTE);
    export const NO_CLOSE_QUOTE: Sheet = set(Keyword.NO_CLOSE_QUOTE);
    export const DOCUMENT_URL: Sheet = set(Keyword.DOCUMENT_URL);
    export const url = (...params: Param[]) => set(Method.url(...params));
    export const targetCounter = (...params: Param[]) => set(Method.targetCounter(...params));
    export const targetCounters = (...params: Param[]) => set(Method.targetCounters(...params));
    export const targetText = (...params: Param[]) => set(Method.targetText(...params));
    export const leader = (...params: Param[]) => set(Method.leader(...params));
}

export namespace Quotes {
    export const set = (...values: Value[]): Sheet => ({quotes: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace StringSet {
    export const set = (...values: Value[]): Sheet => ({stringSet: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace BookmarkLevel {
    export const set = (...values: Value[]): Sheet => ({bookmarkLevel: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace BookmarkLabel {
    export const set = (...values: Value[]): Sheet => ({bookmarkLabel: property(values)});
    export const CONTENTS: Sheet = set(Keyword.CONTENTS);
    export const OPEN_QUOTE: Sheet = set(Keyword.OPEN_QUOTE);
    export const CLOSE_QUOTE: Sheet = set(Keyword.CLOSE_QUOTE);
    export const NO_OPEN_QUOTE: Sheet = set(Keyword.NO_OPEN_QUOTE);
    export const NO_CLOSE_QUOTE: Sheet = set(Keyword.NO_CLOSE_QUOTE);
    export const DOCUMENT_URL: Sheet = set(Keyword.DOCUMENT_URL);
    export const url = (...params: Param[]) => set(Method.url(...params));
    export const targetCounter = (...params: Param[]) => set(Method.targetCounter(...params));
    export const targetCounters = (...params: Param[]) => set(Method.targetCounters(...params));
    export const targetText = (...params: Param[]) => set(Method.targetText(...params));
    export const leader = (...params: Param[]) => set(Method.leader(...params));
}

export namespace BookmarkState {
    export const set = (...values: Value[]): Sheet => ({bookmarkState: property(values)});
    export const OPEN: Sheet = set(Keyword.OPEN);
    export const CLOSE: Sheet = set(Keyword.CLOSE);
}
