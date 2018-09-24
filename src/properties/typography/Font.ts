import { Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Size } from 'datatypes';

export namespace Font {
    export const set = (...values: Value[]): Sheet => ({font: property(values)});
    export const CAPTION: Sheet = set(Keyword.CAPTION);
    export const ICON: Sheet = set(Keyword.ICON);
    export const MENU: Sheet = set(Keyword.MENU);
    export const MESSAGE_BOX: Sheet = set(Keyword.MESSAGE_BOX);
    export const SMALL_CAPTION: Sheet = set(Keyword.SMALL_CAPTION);
    export const STATUS_BAR: Sheet = set(Keyword.STATUS_BAR);
}

export namespace FontFamily {
    export const set = (...values: Value[]): Sheet => ({fontFamily: property(values)});
    export const SERIF: Sheet = set(Keyword.SERIF);
    export const SANS_SERIF: Sheet = set(Keyword.SANS_SERIF);
    export const CURSIVE: Sheet = set(Keyword.CURSIVE);
    export const FANTASY: Sheet = set(Keyword.FANTASY);
    export const MONOSPACE: Sheet = set(Keyword.MONOSPACE);
    export const serif = (...params: Param[]) => set([...params, Keyword.SERIF]);
    export const sansSerif = (...params: Param[]) => set([...params, Keyword.SANS_SERIF]);
    export const cursive = (...params: Param[]) => set([...params, Keyword.CURSIVE]);
    export const fantasy = (...params: Param[]) => set([...params, Keyword.FANTASY]);
    export const monospace = (...params: Param[]) => set([...params, Keyword.MONOSPACE]);
}

export namespace FontFeatureSettings {
    export const set = (...values: Value[]): Sheet => ({fontFeatureSettings: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
}

export namespace FontKerning {
    export const set = (...values: Value[]): Sheet => ({fontKerning: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace FontStyle {
    export const set = (...values: Value[]): Sheet => ({fotnStyle: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const ITALIC: Sheet = set(Keyword.ITALIC);
    export const OBLIQUE: Sheet = set(Keyword.OBLIQUE);
}

export namespace FontVariant {
    export const set = (...values: Value[]): Sheet => ({fontVariant: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace FontVariantCaps {
    export const set = (...values: Value[]): Sheet => ({fontVariantCaps: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const SMALL_CAPS: Sheet = set(Keyword.SMALL_CAPS);
    export const ALL_SMALL_CAPS: Sheet = set(Keyword.ALL_SMALL_CAPS);
    export const PETITE_CAPS: Sheet = set(Keyword.PETITE_CAPS);
    export const ALL_PETITE_CAPS: Sheet = set(Keyword.ALL_PETITE_CAPS);
    export const UNICASE: Sheet = set(Keyword.UNICASE);
    export const TITLING_CAPS: Sheet = set(Keyword.TITLING_CAPS);
}

export namespace FontVariantEastAsian {
    export const set = (...values: Value[]): Sheet => ({fontVariantEastAsian: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const JIS78: Sheet = set(Keyword.JIS78);
    export const JIS83: Sheet = set(Keyword.JIS83);
    export const JIS90: Sheet = set(Keyword.JIS90);
    export const JIS04: Sheet = set(Keyword.JIS04);
    export const SIMPLIFIED: Sheet = set(Keyword.SIMPLIFIED);
    export const TRADITIONAL: Sheet = set(Keyword.TRADITIONAL);
    export const FULL_WIDTH: Sheet = set(Keyword.FULL_WIDTH);
    export const PROPORTIONAL_WIDTH: Sheet = set(Keyword.PROPORTIONAL_WIDTH);
    export const RUBY: Sheet = set(Keyword.RUBY);
}

export namespace FontVariantLigatures {
    export const set = (...values: Value[]): Sheet => ({fontVariantLigatures: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const NONE: Sheet = set(Keyword.NONE);
    export const COMMON_LIGATURES: Sheet = set(Keyword.COMMON_LIGATURES);
    export const NO_COMMON_LIGATURES: Sheet = set(Keyword.NO_COMMON_LIGATURES);
    export const DISCRETIONARY_LIGATURES: Sheet = set(Keyword.DISCRETIONARY_LIGATURES);
    export const NO_DISCRETIONARY_LIGATURES: Sheet = set(Keyword.NO_DISCRETIONARY_LIGATURES);
    export const HISTORICAL_LIGATURES: Sheet = set(Keyword.HISTORICAL_LIGATURES);
    export const NO_HISTORICAL_LIGATURES: Sheet = set(Keyword.NO_HISTORICAL_LIGATURES);
    export const CONTEXTUAL: Sheet = set(Keyword.CONTEXTUAL);
    export const NO_CONTEXTUAL: Sheet = set(Keyword.NO_CONTEXTUAL);
}

export namespace FontVariantNumeric {
    export const set = (...values: Value[]): Sheet => ({fontVariantNumeric: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const LINING_NUMS: Sheet = set(Keyword.LINING_NUMS);
    export const OLDSTYLE_NUMS: Sheet = set(Keyword.OLDSTYLE_NUMS);
    export const PROPORTIONAL_NUMS: Sheet = set(Keyword.PROPORTIONAL_NUMS);
    export const TABULAR_NUMS: Sheet = set(Keyword.TABULAR_NUMS);
    export const DIAGONAL_FRACTIONS: Sheet = set(Keyword.DIAGONAL_FRACTIONS);
    export const STACKED_FRACTIONS: Sheet = set(Keyword.STACKED_FRACTIONS);
    export const ORDINAL: Sheet = set(Keyword.ORDINAL);
    export const SLASHED_ZERO: Sheet = set(Keyword.SLASHED_ZERO);
}

export namespace FontVariantPosition {
    export const set = (...values: Value[]): Sheet => ({fontVariantSuper: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const SUB: Sheet = set(Keyword.SUB);
    export const SUPER: Sheet = set(Keyword.SUPER);
}

export namespace FontWeight {
    export const set = (...values: Value[]): Sheet => ({fotnWeight: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const BOLD: Sheet = set(Keyword.BOLD);
    export const BOLDER: Sheet = set(Keyword.BOLDER);
    export const LIGHTER: Sheet = set(Keyword.LIGHTER);
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
    export const XX_SMALL: Sheet = set(Keyword.XX_SMALL);
    export const X_SMALL: Sheet = set(Keyword.X_SMALL);
    export const SMALL: Sheet = set(Keyword.SMALL);
    export const MEDIUM: Sheet = set(Keyword.MEDIUM);
    export const LARGE: Sheet = set(Keyword.LARGE);
    export const X_LARGE: Sheet = set(Keyword.X_LARGE);
    export const XX_LARGE: Sheet = set(Keyword.XX_LARGE);
    export const LARGER: Sheet = set(Keyword.LARGER);
    export const SMALLER: Sheet = set(Keyword.SMALLER);
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

export namespace FontSizeAdjust {
    export const set = (...values: Value[]): Sheet => ({fontSizeAdjust: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace FontStretch {
    export const set = (...values: Value[]): Sheet => ({fontStretch: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const ULTRA_CONDENSED: Sheet = set(Keyword.ULTRA_CONDENSED);
    export const EXTRA_CONDENSED: Sheet = set(Keyword.EXTRA_CONDENSED);
    export const CONDENSED: Sheet = set(Keyword.CONDENSED);
    export const SEMI_CONDENSED: Sheet = set(Keyword.SEMI_CONDENSED);
    export const SEMI_EXPANDED: Sheet = set(Keyword.SEMI_EXPANDED);
    export const EXPANDED: Sheet = set(Keyword.EXPANDED);
    export const EXTRA_EXPANDED: Sheet = set(Keyword.EXTRA_EXPANDED);
    export const ULTRA_EXPANDED: Sheet = set(Keyword.ULTRA_EXPANDED);
}

export namespace FontSynthesis {
    export const set = (...values: Value[]): Sheet => ({fotnSynthesis: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

