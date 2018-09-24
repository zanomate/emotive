import { Measure } from '../core/Types';
import { measure } from '../core/Utils';
import { Unit } from '../constants';

export namespace Resolution {
    export const dpi: Measure = (...values) => measure(Unit.DPI, values);
    export const dpcm: Measure = (...values) => measure(Unit.DPCM, values);
    export const dppx: Measure = (...values) => measure(Unit.DPPX, values);
}
