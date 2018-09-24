import { Param, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';
import { Color, Size } from '../../index';
import * as Method from '../../methods';

export namespace Columns {
    export const set = (...values: Value[]): Sheet => ({columns: property(values)});
}

export namespace ColumnCount {
    export const set = (...values: Value[]): Sheet => ({columnCount: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace ColumnFill {
    export const set = (...values: Value[]): Sheet => ({columnFill: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const BALANCE: Sheet = set(Keyword.BALANCE);
    export const BALANCE_ALL: Sheet = set(Keyword.BALANCE_ALL);
}

export namespace ColumnRule {
    export const set = (...values: Value[]): Sheet => ({columnRule: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.SOLID, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.SOLID, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.SOLID, ...values);
}

export namespace ColumnRuleColor {
    export const set = (...values: Value[]): Sheet => ({columnRuleColor: property(values)});
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

export namespace ColumnRuleStyle {
    export const set = (...values: Value[]): Sheet => ({columnRuleStyle: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const DOTTED: Sheet = set(Keyword.DOTTED);
    export const DASHED: Sheet = set(Keyword.DASHED);
    export const SOLID: Sheet = set(Keyword.SOLID);
    export const DOUBLE: Sheet = set(Keyword.DOUBLE);
    export const GROOVE: Sheet = set(Keyword.GROOVE);
    export const RIDGE: Sheet = set(Keyword.RIDGE);
    export const INSET: Sheet = set(Keyword.INSET);
    export const OUTSET: Sheet = set(Keyword.OUTSET);
}

export namespace ColumnRuleWidth {
    export const set = (...values: Value[]): Sheet => ({columnRuleWidth: property(values)});
    export const THIN: Sheet = set(Keyword.THIN);
    export const MEDIUM: Sheet = set(Keyword.MEDIUM);
    export const THICK: Sheet = set(Keyword.THICK);
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

export namespace ColumnSpan {
    export const set = (...values: Value[]): Sheet => ({columnRuleWidth: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const ALL: Sheet = set(Keyword.ALL);
}

export namespace ColumnWidth {
    export const set = (...values: Value[]): Sheet => ({columnWidth: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const THIN: Sheet = set(Keyword.THIN);
    export const MEDIUM: Sheet = set(Keyword.MEDIUM);
    export const THICK: Sheet = set(Keyword.THICK);
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

/* Gap */

export namespace Gap {
    export const set = (...values: Value[]): Sheet => ({gap: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
}

export namespace RowGap {
    export const set = (...values: Value[]): Sheet => ({rowGap: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
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

export namespace ColumnGap {
    export const set = (...values: Value[]): Sheet => ({columnGap: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
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
