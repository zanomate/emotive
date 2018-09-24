import { Unit } from 'constants';
import { Measure, measure } from 'core';

export namespace Resolution {
    export const dpi: Measure = (...values) => measure(Unit.DPI, values);
    export const dpcm: Measure = (...values) => measure(Unit.DPCM, values);
    export const dppx: Measure = (...values) => measure(Unit.DPPX, values);
}
