import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace CounterSet {
    export const set = (...values: Value[]): Sheet => ({counterSet: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace CounterReset {
    export const set = (...values: Value[]): Sheet => ({counterReset: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace CounterIncrement {
    export const set = (...values: Value[]): Sheet => ({counterIncrement: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}
