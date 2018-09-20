import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Colors, Length } from '../../index';

export namespace Outline {
    export const set = (...values: Value[]): Sheet => ({outline: property(values)});
}

export namespace OutlineColor {
    export const set = (...values: Value[]): Sheet => ({outlineColor: property(values)});
    export const INVERT: Sheet = set(Keywords.INVERT);
    export const CURRENTCOLOR: Sheet = set(Keywords.CURRENTCOLOR);
    export const TRANSPARENT: Sheet = set(Keywords.TRANSPARENT);
    export const BLACK: Sheet = set(Colors.BLACK);
    export const SILVER: Sheet = set(Colors.SILVER);
    export const GRAY: Sheet = set(Colors.GRAY);
    export const WHITE: Sheet = set(Colors.WHITE);
    export const MAROON: Sheet = set(Colors.MAROON);
    export const RED: Sheet = set(Colors.RED);
    export const PURPLE: Sheet = set(Colors.PURPLE);
    export const FUCHSIA: Sheet = set(Colors.FUCHSIA);
    export const GREEN: Sheet = set(Colors.GREEN);
    export const LIME: Sheet = set(Colors.LIME);
    export const OLIVE: Sheet = set(Colors.OLIVE);
    export const YELLOW: Sheet = set(Colors.YELLOW);
    export const NAVY: Sheet = set(Colors.NAVY);
    export const BLUE: Sheet = set(Colors.BLUE);
    export const TEAL: Sheet = set(Colors.TEAL);
    export const AQUA: Sheet = set(Colors.AQUA);
    export const rgb = (...params: Param[]) => set(Methods.rgb(...params));
    export const rgba = (...params: Param[]) => set(Methods.rgba(...params));
    export const hsl = (...params: Param[]) => set(Methods.hsl(...params));
    export const hsla = (...params: Param[]) => set(Methods.hsla(...params));
    export const hex = (code: string) => set(Methods.hex(code));
    export const hexa = (code: string, alpha: number) => set(Methods.hexa(code, alpha));
}

export namespace OutlineOffset {
    export const set = (...values: Value[]): Sheet => ({outlineOffset: property(values)});
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

export namespace OutlineStyle {
    export const set = (...values: Value[]): Sheet => ({outlineStyle: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NONE: Sheet = set(Keywords.NONE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const DOTTED: Sheet = set(Keywords.DOTTED);
    export const DASHED: Sheet = set(Keywords.DASHED);
    export const SOLID: Sheet = set(Keywords.SOLID);
    export const DOUBLE: Sheet = set(Keywords.DOUBLE);
    export const GROOVE: Sheet = set(Keywords.GROOVE);
    export const RIDGE: Sheet = set(Keywords.RIDGE);
    export const INSET: Sheet = set(Keywords.INSET);
    export const OUTSET: Sheet = set(Keywords.OUTSET);
}

export namespace OutlineWidth {
    export const set = (...values: Value[]): Sheet => ({outlineWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
}
