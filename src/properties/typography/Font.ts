import { Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Length } from '../../index';

export namespace Font {
    export const set = (...values: Value[]): Sheet => ({font: property(values)});
    export const CAPTION: Sheet = set(Keywords.CAPTION);
    export const ICON: Sheet = set(Keywords.ICON);
    export const MENU: Sheet = set(Keywords.MENU);
    export const MESSAGE_BOX: Sheet = set(Keywords.MESSAGE_BOX);
    export const SMALL_CAPTION: Sheet = set(Keywords.SMALL_CAPTION);
    export const STATUS_BAR: Sheet = set(Keywords.STATUS_BAR);
}

export namespace FontFamily {
    export const set = (...values: Value[]): Sheet => ({fontFamily: property(values)});
    export const SERIF: Sheet = set(Keywords.SERIF);
    export const SANS_SERIF: Sheet = set(Keywords.SANS_SERIF);
    export const CURSIVE: Sheet = set(Keywords.CURSIVE);
    export const FANTASY: Sheet = set(Keywords.FANTASY);
    export const MONOSPACE: Sheet = set(Keywords.MONOSPACE);
    export const serif = (...params: Param[]) => set([...params, Keywords.SERIF]);
    export const sansSerif = (...params: Param[]) => set([...params, Keywords.SANS_SERIF]);
    export const cursive = (...params: Param[]) => set([...params, Keywords.CURSIVE]);
    export const fantasy = (...params: Param[]) => set([...params, Keywords.FANTASY]);
    export const monospace = (...params: Param[]) => set([...params, Keywords.MONOSPACE]);
}

export namespace FontFeatureSettings {
    export const set = (...values: Value[]): Sheet => ({fontFeatureSettings: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
}

export namespace FontKerning {
    export const set = (...values: Value[]): Sheet => ({fontKerning: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace FontStyle {
    export const set = (...values: Value[]): Sheet => ({fotnStyle: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const ITALIC: Sheet = set(Keywords.ITALIC);
    export const OBLIQUE: Sheet = set(Keywords.OBLIQUE);
}

export namespace FontVariant {
    export const set = (...values: Value[]): Sheet => ({fontVariant: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace FontVariantCaps {
    export const set = (...values: Value[]): Sheet => ({fontVariantCaps: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const SMALL_CAPS: Sheet = set(Keywords.SMALL_CAPS);
    export const ALL_SMALL_CAPS: Sheet = set(Keywords.ALL_SMALL_CAPS);
    export const PETITE_CAPS: Sheet = set(Keywords.PETITE_CAPS);
    export const ALL_PETITE_CAPS: Sheet = set(Keywords.ALL_PETITE_CAPS);
    export const UNICASE: Sheet = set(Keywords.UNICASE);
    export const TITLING_CAPS: Sheet = set(Keywords.TITLING_CAPS);
}

export namespace FontVariantEastAsian {
    export const set = (...values: Value[]): Sheet => ({fontVariantEastAsian: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const JIS78: Sheet = set(Keywords.JIS78);
    export const JIS83: Sheet = set(Keywords.JIS83);
    export const JIS90: Sheet = set(Keywords.JIS90);
    export const JIS04: Sheet = set(Keywords.JIS04);
    export const SIMPLIFIED: Sheet = set(Keywords.SIMPLIFIED);
    export const TRADITIONAL: Sheet = set(Keywords.TRADITIONAL);
    export const FULL_WIDTH: Sheet = set(Keywords.FULL_WIDTH);
    export const PROPORTIONAL_WIDTH: Sheet = set(Keywords.PROPORTIONAL_WIDTH);
    export const RUBY: Sheet = set(Keywords.RUBY);
}

export namespace FontVariantLigatures {
    export const set = (...values: Value[]): Sheet => ({fontVariantLigatures: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const NONE: Sheet = set(Keywords.NONE);
    export const COMMON_LIGATURES: Sheet = set(Keywords.COMMON_LIGATURES);
    export const NO_COMMON_LIGATURES: Sheet = set(Keywords.NO_COMMON_LIGATURES);
    export const DISCRETIONARY_LIGATURES: Sheet = set(Keywords.DISCRETIONARY_LIGATURES);
    export const NO_DISCRETIONARY_LIGATURES: Sheet = set(Keywords.NO_DISCRETIONARY_LIGATURES);
    export const HISTORICAL_LIGATURES: Sheet = set(Keywords.HISTORICAL_LIGATURES);
    export const NO_HISTORICAL_LIGATURES: Sheet = set(Keywords.NO_HISTORICAL_LIGATURES);
    export const CONTEXTUAL: Sheet = set(Keywords.CONTEXTUAL);
    export const NO_CONTEXTUAL: Sheet = set(Keywords.NO_CONTEXTUAL);
}

export namespace FontVariantNumeric {
    export const set = (...values: Value[]): Sheet => ({fontVariantNumeric: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const LINING_NUMS: Sheet = set(Keywords.LINING_NUMS);
    export const OLDSTYLE_NUMS: Sheet = set(Keywords.OLDSTYLE_NUMS);
    export const PROPORTIONAL_NUMS: Sheet = set(Keywords.PROPORTIONAL_NUMS);
    export const TABULAR_NUMS: Sheet = set(Keywords.TABULAR_NUMS);
    export const DIAGONAL_FRACTIONS: Sheet = set(Keywords.DIAGONAL_FRACTIONS);
    export const STACKED_FRACTIONS: Sheet = set(Keywords.STACKED_FRACTIONS);
    export const ORDINAL: Sheet = set(Keywords.ORDINAL);
    export const SLASHED_ZERO: Sheet = set(Keywords.SLASHED_ZERO);
}

export namespace FontVariantPosition {
    export const set = (...values: Value[]): Sheet => ({fontVariantSuper: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const SUB: Sheet = set(Keywords.SUB);
    export const SUPER: Sheet = set(Keywords.SUPER);
}

export namespace FontWeight {
    export const set = (...values: Value[]): Sheet => ({fotnWeight: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const BOLD: Sheet = set(Keywords.BOLD);
    export const BOLDER: Sheet = set(Keywords.BOLDER);
    export const LIGHTER: Sheet = set(Keywords.LIGHTER);
    export const _100: Sheet = set(100);
    export const _200: Sheet = set(200);
    export const _300: Sheet = set(300);
    export const _400: Sheet = set(400);
    export const _500: Sheet = set(500);
    export const _600: Sheet = set(600);
    export const _700: Sheet = set(700);
    export const _800: Sheet = set(800);
    export const _900: Sheet = set(900);
}

export namespace FontSize {
    export const set = (...values: Value[]): Sheet => ({fotnSize: property(values)});
    export const XX_SMALL: Sheet = set(Keywords.XX_SMALL);
    export const X_SMALL: Sheet = set(Keywords.X_SMALL);
    export const SMALL: Sheet = set(Keywords.SMALL);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const LARGE: Sheet = set(Keywords.LARGE);
    export const X_LARGE: Sheet = set(Keywords.X_LARGE);
    export const XX_LARGE: Sheet = set(Keywords.XX_LARGE);
    export const LARGER: Sheet = set(Keywords.LARGER);
    export const SMALLER: Sheet = set(Keywords.SMALLER);
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

export namespace FontSizeAdjust {
    export const set = (...values: Value[]): Sheet => ({fontSizeAdjust: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace FontStretch {
    export const set = (...values: Value[]): Sheet => ({fontStretch: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const ULTRA_CONDENSED: Sheet = set(Keywords.ULTRA_CONDENSED);
    export const EXTRA_CONDENSED: Sheet = set(Keywords.EXTRA_CONDENSED);
    export const CONDENSED: Sheet = set(Keywords.CONDENSED);
    export const SEMI_CONDENSED: Sheet = set(Keywords.SEMI_CONDENSED);
    export const SEMI_EXPANDED: Sheet = set(Keywords.SEMI_EXPANDED);
    export const EXPANDED: Sheet = set(Keywords.EXPANDED);
    export const EXTRA_EXPANDED: Sheet = set(Keywords.EXTRA_EXPANDED);
    export const ULTRA_EXPANDED: Sheet = set(Keywords.ULTRA_EXPANDED);
}

export namespace FontSynthesis {
    export const set = (...values: Value[]): Sheet => ({fotnSynthesis: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

