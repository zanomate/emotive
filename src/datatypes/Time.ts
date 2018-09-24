import { Measure } from '../core/Types';
import { measure } from '../core/Utils';
import { Unit } from '../constants';

export namespace Time {
    export const s: Measure = (...values) => measure(Unit.S, values);
    export const ms: Measure = (...values) => measure(Unit.MS, values);
}
