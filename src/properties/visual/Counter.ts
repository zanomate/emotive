import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace CounterSet {
    export const set = (...values: Value[]): Sheet => ({counterSet: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace CounterReset {
    export const set = (...values: Value[]): Sheet => ({counterReset: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace CounterIncrement {
    export const set = (...values: Value[]): Sheet => ({counterIncrement: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}
