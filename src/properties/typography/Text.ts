import { Colors, Methods, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Length, Param } from '../../index';

export namespace TextAlign {
    export const set = (...values: Value[]): Sheet => ({textAlign: property(values)});
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const JUSTIFY: Sheet = set(Keywords.JUSTIFY);
    export const MATCH_PARENT: Sheet = set(Keywords.MATCH_PARENT);
    export const JUSTIFY_ALL: Sheet = set(Keywords.JUSTIFY_ALL);
}

export namespace TextAlignAll {
    export const set = (...values: Value[]): Sheet => ({textAlignAll: property(values)});
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const JUSTIFY: Sheet = set(Keywords.JUSTIFY);
    export const MATCH_PARENT: Sheet = set(Keywords.MATCH_PARENT);
}

export namespace TextAlignLast {
    export const set = (...values: Value[]): Sheet => ({textAlignAll: property(values)});
    export const START: Sheet = set(Keywords.START);
    export const END: Sheet = set(Keywords.END);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const JUSTIFY: Sheet = set(Keywords.JUSTIFY);
}

export namespace TextIndent {
    export const set = (...values: Value[]): Sheet => ({textIndent: property(values)});
    export const x = (...nums: number[]) => set(Length.x(...nums));
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

export namespace TextTransform {
    export const set = (...values: Value[]): Sheet => ({textTransform: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const CAPITALIZE: Sheet = set(Keywords.CAPITALIZE);
    export const UPPERCASE: Sheet = set(Keywords.UPPERCASE);
    export const LOWERCASE: Sheet = set(Keywords.LOWERCASE);
    export const FULL_WIDTH: Sheet = set(Keywords.FULL_WIDTH);
}

export namespace TextShadow {
    export const set = (...values: Value[]): Sheet => ({textShadow: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace TextUnderlinePosition {
    export const set = (...values: Value[]): Sheet => ({textUnderlinePosition: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const UNDER: Sheet = set(Keywords.UNDER);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
}

export namespace TextJustify {
    export const set = (...values: Value[]): Sheet => ({textJustify: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NONE: Sheet = set(Keywords.NONE);
    export const INTER_WORD: Sheet = set(Keywords.INTER_WORD);
    export const INTER_CHARACTER: Sheet = set(Keywords.INTER_CHARACTER);
}

export namespace LetterSpacing {
    export const set = (...values: Value[]): Sheet => ({letterSpacing: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
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

export namespace WhiteSpace {
    export const set = (...values: Value[]): Sheet => ({whiteSpace: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const PRE: Sheet = set(Keywords.PRE);
    export const NOWRAP: Sheet = set(Keywords.NOWRAP);
    export const PRE_WRAP: Sheet = set(Keywords.PRE_WRAP);
    export const PRE_LINE: Sheet = set(Keywords.PRE_LINE);
}

export namespace LineBreak {
    export const set = (...values: Value[]): Sheet => ({lineBreak: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const LOOSE: Sheet = set(Keywords.LOOSE);
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRICT: Sheet = set(Keywords.STRICT);
    export const ANYWHERE: Sheet = set(Keywords.ANYWHERE);
}

export namespace TextOverflow {
    export const set = (...values: Value[]): Sheet => ({textOverflow: property(values)});
    export const CLIP: Sheet = set(Keywords.CLIP);
    export const ELLIPSIS: Sheet = set(Keywords.ELLIPSIS);
}

export namespace TextEmphasis {
    export const set = (...values: Value[]): Sheet => ({textEmphasis: property(values)});
}

export namespace TextEmphasisColor {
    export const set = (...values: Value[]): Sheet => ({textEmphasisColor: property(values)});
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

export namespace TextEmphasisPosition {
    export const set = (...values: Value[]): Sheet => ({textEmphasisPosition: property(values)});
    export const OVER: Sheet = set(Keywords.OVER);
    export const OVER_LEFT: Sheet = set(Keywords.OVER, Keywords.LEFT);
    export const OVER_RIGHT: Sheet = set(Keywords.OVER, Keywords.RIGHT);
    export const UNDER: Sheet = set(Keywords.UNDER);
    export const UNDER_LEFT: Sheet = set(Keywords.UNDER, Keywords.LEFT);
    export const UNDER_RIGHT: Sheet = set(Keywords.UNDER, Keywords.RIGHT);
}

export namespace TextEmphasisStyle {
    export const set = (...values: Value[]): Sheet => ({textEmphasisStyle: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FILLED: Sheet = set(Keywords.FILLED);
    export const OPEN: Sheet = set(Keywords.OPEN);
    export const DOT: Sheet = set(Keywords.DOT);
    export const CIRCLE: Sheet = set(Keywords.CIRCLE);
    export const DOUBLE_CIRCLE: Sheet = set(Keywords.DOUBLE_CIRCLE);
    export const TRIANGLE: Sheet = set(Keywords.TRIANGLE);
    export const SESAME: Sheet = set(Keywords.SESAME);
}

export namespace TextDecoration {
    export const set = (...values: Value[]): Sheet => ({textDecoration: property(values)});
}

export namespace TextDecorationColor {
    export const set = (...values: Value[]): Sheet => ({textDecorationColor: property(values)});
}

export namespace TextDecorationLine {
    export const set = (...values: Value[]): Sheet => ({textDecorationLine: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const UNDERLINE: Sheet = set(Keywords.UNDERLINE);
    export const OVERLINE: Sheet = set(Keywords.OVERLINE);
    export const LINE_THROUGH: Sheet = set(Keywords.LINE_THROUGH);
    export const BLINK: Sheet = set(Keywords.BLINK);
}

export namespace TextDecorationStyle {
    export const set = (...values: Value[]): Sheet => ({textDecorationStyle: property(values)});
    export const SOLID: Sheet = set(Keywords.SOLID);
    export const DOUBLE: Sheet = set(Keywords.DOUBLE);
    export const DOTTED: Sheet = set(Keywords.DOTTED);
    export const DASHED: Sheet = set(Keywords.DASHED);
    export const WAVY: Sheet = set(Keywords.WAVY);
}
