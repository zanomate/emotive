import { Keyword } from '../../constants/index';
import { Sheet, Value } from '../../core';
import { property } from '../../core/Utils';

export namespace BoxShadow {
    export const set = (...values: Value[]): Sheet => ({boxShadow: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}
