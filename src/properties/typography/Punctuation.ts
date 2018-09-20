import { Length, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace HangingPunctuation {
    export const set = (...values: Value[]): Sheet => ({hangingPunctuation: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FIRST: Sheet = set(Keywords.FIRST);
    export const FORCE_END: Sheet = set(Keywords.FORCE_END);
    export const ALLOW_END: Sheet = set(Keywords.ALLOW_END);
    export const LAST: Sheet = set(Keywords.LAST);
}

export namespace Hyphens {
    export const set = (...values: Value[]): Sheet => ({hyphens: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const MANUAL: Sheet = set(Keywords.MANUAL);
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace TabSize {
    export const set = (...values: Value[]): Sheet => ({tabSize: property(values)});
    export const cap = (...nums: number[]) => set(Length.cap(...nums));
    export const ch = (...nums: number[]) => set(Length.ch(...nums));
    export const em = (...nums: number[]) => set(Length.em(...nums));
    export const ex = (...nums: number[]) => set(Length.ex(...nums));
    export const ic = (...nums: number[]) => set(Length.ic(...nums));
    export const lh = (...nums: number[]) => set(Length.lh(...nums));
    export const rem = (...nums: number[]) => set(Length.rem(...nums));
    export const rlh = (...nums: number[]) => set(Length.rlh(...nums));
    export const vh = (...nums: number[]) => set(Length.vh(...nums));
    export const vw = (...nums: number[]) => set(Length.vw(...nums));
    export const vi = (...nums: number[]) => set(Length.vi(...nums));
    export const vb = (...nums: number[]) => set(Length.vb(...nums));
    export const vmin = (...nums: number[]) => set(Length.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Length.vmax(...nums));
    export const px = (...nums: number[]) => set(Length.px(...nums));
    export const cm = (...nums: number[]) => set(Length.cm(...nums));
    export const mm = (...nums: number[]) => set(Length.mm(...nums));
    export const Q = (...nums: number[]) => set(Length.Q(...nums));
    export const inch = (...nums: number[]) => set(Length.inch(...nums));
    export const pc = (...nums: number[]) => set(Length.pc(...nums));
    export const pt = (...nums: number[]) => set(Length.pt(...nums));
    export const fr = (...nums: number[]) => set(Length.fr(...nums));
}
