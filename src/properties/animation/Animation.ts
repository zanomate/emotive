import { Methods, Param, property, Sheet, Time, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Animation {
    export const set = (...values: Value[]): Sheet => ({animation: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace AnimationName {
    export const set = (...values: Value[]): Sheet => ({animationName: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace AnimationTimingFunction {
    export const set = (...values: Value[]): Sheet => ({animationTimingFunction: property(values)});
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
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const REVERSE: Sheet = set(Keywords.REVERSE);
    export const ALTERNATE: Sheet = set(Keywords.ALTERNATE);
    export const ALTERNATE_REVERSE: Sheet = set(Keywords.ALTERNATE_REVERSE);
}

export namespace AnimationFillMode {
    export const set = (...values: Value[]): Sheet => ({animationFillMode: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FORWARDS: Sheet = set(Keywords.FORWARDS);
    export const BACKWARDS: Sheet = set(Keywords.BACKWARDS);
    export const BOTH: Sheet = set(Keywords.BOTH);
}

export namespace AnimationIterationCount {
    export const set = (...values: Value[]): Sheet => ({animationIterationCount: property(values)});
    export const INFINITE: Sheet = set(Keywords.INFINITE);
}

export namespace AnimationPlayState {
    export const set = (...values: Value[]): Sheet => ({animationPlayState: property(values)});
    export const RUNNING: Sheet = set(Keywords.RUNNING);
    export const PAUSED: Sheet = set(Keywords.PAUSED);
}
