import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace Visibility {
    export const set = (...values: Value[]): Sheet => ({visibility: property(values)});
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const COLLAPSE: Sheet = set(Keyword.COLLAPSE);
}
