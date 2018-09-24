import { Unit } from 'constants';
import { Measure, measure } from 'core';

export namespace Time {
    export const s: Measure = (...values) => measure(Unit.S, values);
    export const ms: Measure = (...values) => measure(Unit.MS, values);
}
