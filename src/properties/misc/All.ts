import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace All {
    export const set = (...values: Value[]): Sheet => ({all: property(values)});
    export const REVERT: Sheet = set(Keyword.REVERT);
}
