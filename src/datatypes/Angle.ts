import { Unit } from '.';
import { Measure } from '../core/Types';
import { measure } from '../core/Utils';

export namespace Angle {
    export const deg: Measure = (...values) => measure(Unit.DEG, values);
    export const grad: Measure = (...values) => measure(Unit.GRAD, values);
    export const rad: Measure = (...values) => measure(Unit.RAD, values);
    export const turn: Measure = (...values) => measure(Unit.TURN, values);
}
