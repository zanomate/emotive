import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace Chains {
    export const set = (...values: Value[]): Sheet => ({chains: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace Flow {
    export const set = (...values: Value[]): Sheet => ({flow: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const SAME: Sheet = set(Keyword.SAME);
}
