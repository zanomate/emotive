import { Color, Method, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';
import { Size, Param } from '../../index';

export namespace TextAlign {
    export const set = (...values: Value[]): Sheet => ({textAlign: property(values)});
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const JUSTIFY: Sheet = set(Keyword.JUSTIFY);
    export const MATCH_PARENT: Sheet = set(Keyword.MATCH_PARENT);
    export const JUSTIFY_ALL: Sheet = set(Keyword.JUSTIFY_ALL);
}

export namespace TextAlignAll {
    export const set = (...values: Value[]): Sheet => ({textAlignAll: property(values)});
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const JUSTIFY: Sheet = set(Keyword.JUSTIFY);
    export const MATCH_PARENT: Sheet = set(Keyword.MATCH_PARENT);
}

export namespace TextAlignLast {
    export const set = (...values: Value[]): Sheet => ({textAlignAll: property(values)});
    export const START: Sheet = set(Keyword.START);
    export const END: Sheet = set(Keyword.END);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const JUSTIFY: Sheet = set(Keyword.JUSTIFY);
}

export namespace TextIndent {
    export const set = (...values: Value[]): Sheet => ({textIndent: property(values)});
    export const x = (...nums: number[]) => set(Size.x(...nums));
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

export namespace TextTransform {
    export const set = (...values: Value[]): Sheet => ({textTransform: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const CAPITALIZE: Sheet = set(Keyword.CAPITALIZE);
    export const UPPERCASE: Sheet = set(Keyword.UPPERCASE);
    export const LOWERCASE: Sheet = set(Keyword.LOWERCASE);
    export const FULL_WIDTH: Sheet = set(Keyword.FULL_WIDTH);
}

export namespace TextShadow {
    export const set = (...values: Value[]): Sheet => ({textShadow: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace TextUnderlinePosition {
    export const set = (...values: Value[]): Sheet => ({textUnderlinePosition: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const UNDER: Sheet = set(Keyword.UNDER);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
}

export namespace TextJustify {
    export const set = (...values: Value[]): Sheet => ({textJustify: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const NONE: Sheet = set(Keyword.NONE);
    export const INTER_WORD: Sheet = set(Keyword.INTER_WORD);
    export const INTER_CHARACTER: Sheet = set(Keyword.INTER_CHARACTER);
}

export namespace LetterSpacing {
    export const set = (...values: Value[]): Sheet => ({letterSpacing: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
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

export namespace WhiteSpace {
    export const set = (...values: Value[]): Sheet => ({whiteSpace: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const PRE: Sheet = set(Keyword.PRE);
    export const NOWRAP: Sheet = set(Keyword.NOWRAP);
    export const PRE_WRAP: Sheet = set(Keyword.PRE_WRAP);
    export const PRE_LINE: Sheet = set(Keyword.PRE_LINE);
}

export namespace LineBreak {
    export const set = (...values: Value[]): Sheet => ({lineBreak: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const LOOSE: Sheet = set(Keyword.LOOSE);
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRICT: Sheet = set(Keyword.STRICT);
    export const ANYWHERE: Sheet = set(Keyword.ANYWHERE);
}

export namespace TextOverflow {
    export const set = (...values: Value[]): Sheet => ({textOverflow: property(values)});
    export const CLIP: Sheet = set(Keyword.CLIP);
    export const ELLIPSIS: Sheet = set(Keyword.ELLIPSIS);
}

export namespace TextEmphasis {
    export const set = (...values: Value[]): Sheet => ({textEmphasis: property(values)});
}

export namespace TextEmphasisColor {
    export const set = (...values: Value[]): Sheet => ({textEmphasisColor: property(values)});
    export const CURRENTCOLOR: Sheet = set(Keyword.CURRENTCOLOR);
    export const TRANSPARENT: Sheet = set(Keyword.TRANSPARENT);
    export const BLACK: Sheet = set(Color.BLACK);
    export const SILVER: Sheet = set(Color.SILVER);
    export const GRAY: Sheet = set(Color.GRAY);
    export const WHITE: Sheet = set(Color.WHITE);
    export const MAROON: Sheet = set(Color.MAROON);
    export const RED: Sheet = set(Color.RED);
    export const PURPLE: Sheet = set(Color.PURPLE);
    export const FUCHSIA: Sheet = set(Color.FUCHSIA);
    export const GREEN: Sheet = set(Color.GREEN);
    export const LIME: Sheet = set(Color.LIME);
    export const OLIVE: Sheet = set(Color.OLIVE);
    export const YELLOW: Sheet = set(Color.YELLOW);
    export const NAVY: Sheet = set(Color.NAVY);
    export const BLUE: Sheet = set(Color.BLUE);
    export const TEAL: Sheet = set(Color.TEAL);
    export const AQUA: Sheet = set(Color.AQUA);
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace TextEmphasisPosition {
    export const set = (...values: Value[]): Sheet => ({textEmphasisPosition: property(values)});
    export const OVER: Sheet = set(Keyword.OVER);
    export const OVER_LEFT: Sheet = set(Keyword.OVER, Keyword.LEFT);
    export const OVER_RIGHT: Sheet = set(Keyword.OVER, Keyword.RIGHT);
    export const UNDER: Sheet = set(Keyword.UNDER);
    export const UNDER_LEFT: Sheet = set(Keyword.UNDER, Keyword.LEFT);
    export const UNDER_RIGHT: Sheet = set(Keyword.UNDER, Keyword.RIGHT);
}

export namespace TextEmphasisStyle {
    export const set = (...values: Value[]): Sheet => ({textEmphasisStyle: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FILLED: Sheet = set(Keyword.FILLED);
    export const OPEN: Sheet = set(Keyword.OPEN);
    export const DOT: Sheet = set(Keyword.DOT);
    export const CIRCLE: Sheet = set(Keyword.CIRCLE);
    export const DOUBLE_CIRCLE: Sheet = set(Keyword.DOUBLE_CIRCLE);
    export const TRIANGLE: Sheet = set(Keyword.TRIANGLE);
    export const SESAME: Sheet = set(Keyword.SESAME);
}

export namespace TextDecoration {
    export const set = (...values: Value[]): Sheet => ({textDecoration: property(values)});
}

export namespace TextDecorationColor {
    export const set = (...values: Value[]): Sheet => ({textDecorationColor: property(values)});
}

export namespace TextDecorationLine {
    export const set = (...values: Value[]): Sheet => ({textDecorationLine: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const UNDERLINE: Sheet = set(Keyword.UNDERLINE);
    export const OVERLINE: Sheet = set(Keyword.OVERLINE);
    export const LINE_THROUGH: Sheet = set(Keyword.LINE_THROUGH);
    export const BLINK: Sheet = set(Keyword.BLINK);
}

export namespace TextDecorationStyle {
    export const set = (...values: Value[]): Sheet => ({textDecorationStyle: property(values)});
    export const SOLID: Sheet = set(Keyword.SOLID);
    export const DOUBLE: Sheet = set(Keyword.DOUBLE);
    export const DOTTED: Sheet = set(Keyword.DOTTED);
    export const DASHED: Sheet = set(Keyword.DASHED);
    export const WAVY: Sheet = set(Keyword.WAVY);
}
