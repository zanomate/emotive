import { Methods, Param, property, Sheet, Time, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Transition {
    export const set = (...values: Value[]): Sheet => ({transition: property(values)});
}

export namespace TransitionDelay {
    export const set = (...values: Value[]): Sheet => ({transitionDelay: property(values)});
    export const s = (...nums: number[]) => set(Time.s(...nums));
    export const ms = (...nums: number[]) => set(Time.ms(...nums));
}

export namespace TransitionDuration {
    export const set = (...values: Value[]): Sheet => ({transitionDuration: property(values)});
    export const s = (...nums: number[]) => set(Time.s(...nums));
    export const ms = (...nums: number[]) => set(Time.ms(...nums));
}

export namespace TransitionProperty {
    export const set = (...values: Value[]): Sheet => ({transitionProperty: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const ALL: Sheet = set(Keywords.ALL);
}

export namespace TransitionTimingFunction {
    export const set = (...values: Value[]): Sheet => ({transitionTimingFunction: property(values)});
    export const LINEAR: Sheet = set(Keywords.LINEAR);
    export const EASE: Sheet = set(Keywords.EASE);
    export const EASE_IN: Sheet = set(Keywords.EASE_IN);
    export const EASE_OUT: Sheet = set(Keywords.EASE_OUT);
    export const EASE_IN_OUT: Sheet = set(Keywords.EASE_IN_OUT);
    export const STEP_START: Sheet = set(Keywords.STEP_START);
    export const STEP_END: Sheet = set(Keywords.STEP_END);
    export const cubicBezier = (...params: Param[]) => set(Methods.cubicBezier(...params));
    export const steps = (...params: Param[]) => set(Methods.steps(...params));
    export const frames = (...params: Param[]) => set(Methods.frames(...params));
}
