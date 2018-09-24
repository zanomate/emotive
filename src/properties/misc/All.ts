import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace All {
    export const set = (...values: Value[]): Sheet => ({all: property(values)});
    export const REVERT: Sheet = set(Keyword.REVERT);
}
