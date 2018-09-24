import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace ViewportFit {
    export const set = (...values: Value[]): Sheet => ({viewportFit: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const CONTAIN: Sheet = set(Keyword.CONTAIN);
    export const COVER: Sheet = set(Keyword.COVER);
}

export namespace Orientation {
    export const set = (...values: Value[]): Sheet => ({orientation: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const PORTRAIT: Sheet = set(Keyword.PORTRAIT);
    export const LANDSCAPE: Sheet = set(Keyword.LANDSCAPE);
}
