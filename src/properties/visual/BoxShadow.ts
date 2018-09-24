import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace BoxShadow {
    export const set = (...values: Value[]): Sheet => ({boxShadow: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}
