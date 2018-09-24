import { Method, Param, property, Sheet, Time, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Animation {
    export const set = (...values: Value[]): Sheet => ({animation: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace AnimationName {
    export const set = (...values: Value[]): Sheet => ({animationName: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace AnimationTimingFunction {
    export const set = (...values: Value[]): Sheet => ({animationTimingFunction: property(values)});
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

export namespace AnimationDelay {
    export const set = (...values: Value[]): Sheet => ({animationDelay: property(values)});
    export const s = (...nums: number[]) => set(Time.s(...nums));
    export const ms = (...nums: number[]) => set(Time.ms(...nums));
}

export namespace AnimationDuration {
    export const set = (...values: Value[]): Sheet => ({animationDuration: property(values)});
    export const s = (...nums: number[]) => set(Time.s(...nums));
    export const ms = (...nums: number[]) => set(Time.ms(...nums));
}

export namespace AnimationDirection {
    export const set = (...values: Value[]): Sheet => ({animationDirection: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const REVERSE: Sheet = set(Keyword.REVERSE);
    export const ALTERNATE: Sheet = set(Keyword.ALTERNATE);
    export const ALTERNATE_REVERSE: Sheet = set(Keyword.ALTERNATE_REVERSE);
}

export namespace AnimationFillMode {
    export const set = (...values: Value[]): Sheet => ({animationFillMode: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FORWARDS: Sheet = set(Keyword.FORWARDS);
    export const BACKWARDS: Sheet = set(Keyword.BACKWARDS);
    export const BOTH: Sheet = set(Keyword.BOTH);
}

export namespace AnimationIterationCount {
    export const set = (...values: Value[]): Sheet => ({animationIterationCount: property(values)});
    export const INFINITE: Sheet = set(Keyword.INFINITE);
}

export namespace AnimationPlayState {
    export const set = (...values: Value[]): Sheet => ({animationPlayState: property(values)});
    export const RUNNING: Sheet = set(Keyword.RUNNING);
    export const PAUSED: Sheet = set(Keyword.PAUSED);
}
