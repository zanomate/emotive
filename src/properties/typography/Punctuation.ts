import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';
import { Size } from 'datatypes';

export namespace HangingPunctuation {
    export const set = (...values: Value[]): Sheet => ({hangingPunctuation: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FIRST: Sheet = set(Keyword.FIRST);
    export const FORCE_END: Sheet = set(Keyword.FORCE_END);
    export const ALLOW_END: Sheet = set(Keyword.ALLOW_END);
    export const LAST: Sheet = set(Keyword.LAST);
}

export namespace Hyphens {
    export const set = (...values: Value[]): Sheet => ({hyphens: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const MANUAL: Sheet = set(Keyword.MANUAL);
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace TabSize {
    export const set = (...values: Value[]): Sheet => ({tabSize: property(values)});
    export const cap = (...nums: number[]) => set(Size.cap(...nums));
    export const ch = (...nums: number[]) => set(Size.ch(...nums));
    export const em = (...nums: number[]) => set(Size.em(...nums));
    export const ex = (...nums: number[]) => set(Size.ex(...nums));
    export const ic = (...nums: number[]) => set(Size.ic(...nums));
    export const lh = (...nums: number[]) => set(Size.lh(...nums));
    export const rem = (...nums: number[]) => set(Size.rem(...nums));
    export const rlh = (...nums: number[]) => set(Size.rlh(...nums));
    export const vh = (...nums: number[]) => set(Size.vh(...nums));
    export const vw = (...nums: number[]) => set(Size.vw(...nums));
    export const vi = (...nums: number[]) => set(Size.vi(...nums));
    export const vb = (...nums: number[]) => set(Size.vb(...nums));
    export const vmin = (...nums: number[]) => set(Size.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Size.vmax(...nums));
    export const px = (...nums: number[]) => set(Size.px(...nums));
    export const cm = (...nums: number[]) => set(Size.cm(...nums));
    export const mm = (...nums: number[]) => set(Size.mm(...nums));
    export const Q = (...nums: number[]) => set(Size.Q(...nums));
    export const inch = (...nums: number[]) => set(Size.inch(...nums));
    export const pc = (...nums: number[]) => set(Size.pc(...nums));
    export const pt = (...nums: number[]) => set(Size.pt(...nums));
    export const fr = (...nums: number[]) => set(Size.fr(...nums));
}
