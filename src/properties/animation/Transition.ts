import { Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Time } from 'datatypes';
import { Method } from 'methods';

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
    export const NONE: Sheet = set(Keyword.NONE);
    export const ALL: Sheet = set(Keyword.ALL);
}

export namespace TransitionTimingFunction {
    export const set = (...values: Value[]): Sheet => ({transitionTimingFunction: property(values)});
    export const LINEAR: Sheet = set(Keyword.LINEAR);
    export const EASE: Sheet = set(Keyword.EASE);
    export const EASE_IN: Sheet = set(Keyword.EASE_IN);
    export const EASE_OUT: Sheet = set(Keyword.EASE_OUT);
    export const EASE_IN_OUT: Sheet = set(Keyword.EASE_IN_OUT);
    export const STEP_START: Sheet = set(Keyword.STEP_START);
    export const STEP_END: Sheet = set(Keyword.STEP_END);
    export const cubicBezier = (...params: Param[]) => set(Method.cubicBezier(...params));
    export const steps = (...params: Param[]) => set(Method.steps(...params));
    export const frames = (...params: Param[]) => set(Method.frames(...params));
}
