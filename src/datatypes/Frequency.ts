import { Unit } from 'constants';
import { Measure, measure } from 'core';

export namespace Frequency {
    export const Hz: Measure = (...values) => measure(Unit.HZ, values);
    export const kHz: Measure = (...values) => measure(Unit.KHZ, values);
}
