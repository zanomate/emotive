import { Unit } from '.';
import { Measure } from '../core/Types';
import { measure } from '../core/Utils';

export namespace Frequency {
    export const Hz: Measure = (...values) => measure(Unit.HZ, values);
    export const kHz: Measure = (...values) => measure(Unit.KHZ, values);
}
