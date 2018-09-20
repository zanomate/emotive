import { Unit } from '.';
import { Measure } from '../core/Types';
import { measure } from '../core/Utils';

export namespace Length {
    export const x: Measure = (...values) => measure(Unit.PERCENTAGE, values);
    export const cap: Measure = (...values) => measure(Unit.CAP, values);
    export const ch: Measure = (...values) => measure(Unit.CH, values);
    export const em: Measure = (...values) => measure(Unit.EM, values);
    export const ex: Measure = (...values) => measure(Unit.EX, values);
    export const ic: Measure = (...values) => measure(Unit.IC, values);
    export const lh: Measure = (...values) => measure(Unit.LH, values);
    export const rem: Measure = (...values) => measure(Unit.REM, values);
    export const rlh: Measure = (...values) => measure(Unit.RLH, values);
    export const vh: Measure = (...values) => measure(Unit.VH, values);
    export const vw: Measure = (...values) => measure(Unit.VW, values);
    export const vi: Measure = (...values) => measure(Unit.VI, values);
    export const vb: Measure = (...values) => measure(Unit.VB, values);
    export const vmin: Measure = (...values) => measure(Unit.VMIN, values);
    export const vmax: Measure = (...values) => measure(Unit.VMAX, values);
    export const px: Measure = (...values) => measure(Unit.PX, values);
    export const cm: Measure = (...values) => measure(Unit.CM, values);
    export const mm: Measure = (...values) => measure(Unit.MM, values);
    export const Q: Measure = (...values) => measure(Unit.Q, values);
    export const inch: Measure = (...values) => measure(Unit.IN, values);
    export const pc: Measure = (...values) => measure(Unit.PC, values);
    export const pt: Measure = (...values) => measure(Unit.PT, values);
    export const fr: Measure = (...values) => measure(Unit.FR, values);
}
