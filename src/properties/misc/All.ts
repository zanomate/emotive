import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace All {
    export const set = (...values: Value[]): Sheet => ({all: property(values)});
    export const REVERT: Sheet = set(Keywords.REVERT);
}
