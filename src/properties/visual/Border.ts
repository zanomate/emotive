import { Color, Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Size } from 'datatypes';
import { Method } from 'methods';

export namespace Border {
    export const set = (...values: Value[]): Sheet => ({border: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderTop {
    export const set = (...values: Value[]): Sheet => ({borderTop: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderBottom {
    export const set = (...values: Value[]): Sheet => ({borderBottom: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderLeft {
    export const set = (...values: Value[]): Sheet => ({borderLeft: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderRight {
    export const set = (...values: Value[]): Sheet => ({borderRight: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderBlock {
    export const set = (...values: Value[]): Sheet => ({borderBlock: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderBlockStart {
    export const set = (...values: Value[]): Sheet => ({borderBlockStart: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderBlockEnd {
    export const set = (...values: Value[]): Sheet => ({borderBlockEnd: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderInline {
    export const set = (...values: Value[]): Sheet => ({borderInline: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderInlineStart {
    export const set = (...values: Value[]): Sheet => ({borderInlineStart: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

export namespace BorderInlineEnd {
    export const set = (...values: Value[]): Sheet => ({borderInlineEnd: property(values)});
    export const hidden = (...values: Value[]) => set(Keyword.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keyword.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keyword.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keyword.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keyword.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keyword.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keyword.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keyword.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keyword.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keyword.THIN, Keyword.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keyword.MEDIUM, Keyword.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keyword.THICK, Keyword.OUTSET, ...values);
}

/* Width */

export namespace BorderWidth {
    export const set = (...values: Value[]): Sheet => ({borderWidth: property(values)});
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

export namespace BorderTopWidth {
    export const set = (...values: Value[]): Sheet => ({borderTopWidth: property(values)});
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

export namespace BorderBottomWidth {
    export const set = (...values: Value[]): Sheet => ({borderBottomWidth: property(values)});
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

export namespace BorderLeftWidth {
    export const set = (...values: Value[]): Sheet => ({borderLeftWidth: property(values)});
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

export namespace BorderRightWidth {
    export const set = (...values: Value[]): Sheet => ({borderRightWidth: property(values)});
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

export namespace BorderBlockWidth {
    export const set = (...values: Value[]): Sheet => ({borderBlockWidth: property(values)});
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

export namespace BorderBlockStartWidth {
    export const set = (...values: Value[]): Sheet => ({borderBlockStartWidth: property(values)});
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

export namespace BorderBlockEndWidth {
    export const set = (...values: Value[]): Sheet => ({borderBlockEndWidth: property(values)});
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

export namespace BorderInlineWidth {
    export const set = (...values: Value[]): Sheet => ({borderInlineWidth: property(values)});
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

export namespace BorderInlineStartWidth {
    export const set = (...values: Value[]): Sheet => ({borderInlineStartWidth: property(values)});
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

export namespace BorderInlineEndWidth {
    export const set = (...values: Value[]): Sheet => ({borderInlineEndWidth: property(values)});
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

/* Style */

export namespace BorderStyle {
    export const set = (...values: Value[]): Sheet => ({borderStyle: property(values)});
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

export namespace BorderTopStyle {
    export const set = (...values: Value[]): Sheet => ({borderTopStyle: property(values)});
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

export namespace BorderBottomStyle {
    export const set = (...values: Value[]): Sheet => ({borderBottomStyle: property(values)});
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

export namespace BorderLeftStyle {
    export const set = (...values: Value[]): Sheet => ({borderLeftStyle: property(values)});
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

export namespace BorderRightStyle {
    export const set = (...values: Value[]): Sheet => ({borderRightStyle: property(values)});
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

export namespace BorderBlockStyle {
    export const set = (...values: Value[]): Sheet => ({borderBlockStyle: property(values)});
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

export namespace BorderBlockStartStyle {
    export const set = (...values: Value[]): Sheet => ({borderBlockStartStyle: property(values)});
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

export namespace BorderBlockEndStyle {
    export const set = (...values: Value[]): Sheet => ({borderBlockEndStyle: property(values)});
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

export namespace BorderInlineStyle {
    export const set = (...values: Value[]): Sheet => ({borderInlineStyle: property(values)});
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

export namespace BorderInlineStartStyle {
    export const set = (...values: Value[]): Sheet => ({borderInlineStartStyle: property(values)});
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

export namespace BorderInlineEndStyle {
    export const set = (...values: Value[]): Sheet => ({borderInlineEndStyle: property(values)});
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

/* Colors */

export namespace BorderColor {
    export const set = (...values: Value[]): Sheet => ({borderColor: property(values)});
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

export namespace BorderTopColor {
    export const set = (...values: Value[]): Sheet => ({borderTopColor: property(values)});
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

export namespace BorderBottomColor {
    export const set = (...values: Value[]): Sheet => ({borderBottomColor: property(values)});
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

export namespace BorderLeftColor {
    export const set = (...values: Value[]): Sheet => ({borderLeftColor: property(values)});
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

export namespace BorderRightColor {
    export const set = (...values: Value[]): Sheet => ({borderRightColor: property(values)});
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

export namespace BorderBlockColor {
    export const set = (...values: Value[]): Sheet => ({borderBlockColor: property(values)});
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

export namespace BorderBlockStartColor {
    export const set = (...values: Value[]): Sheet => ({borderBlockStartColor: property(values)});
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

export namespace BorderBlockEndColor {
    export const set = (...values: Value[]): Sheet => ({borderBlockEndColor: property(values)});
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

export namespace BorderInlineColor {
    export const set = (...values: Value[]): Sheet => ({borderInlineColor: property(values)});
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

export namespace BorderInlineStartColor {
    export const set = (...values: Value[]): Sheet => ({borderInlineStartColor: property(values)});
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

export namespace BorderInlineEndColor {
    export const set = (...values: Value[]): Sheet => ({borderInlineEndColor: property(values)});
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

/* Radius */

export namespace BorderRadius {
    export const set = (...values: Value[]): Sheet => ({borderRadius: property(values)});
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

export namespace BorderTopLeftRadius {
    export const set = (...values: Value[]): Sheet => ({borderTopLeftRadius: property(values)});
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

export namespace BorderTopRightRadius {
    export const set = (...values: Value[]): Sheet => ({borderTopRightRadius: property(values)});
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

export namespace BorderBottomLeftRadius {
    export const set = (...values: Value[]): Sheet => ({borderBottomLeftRadius: property(values)});
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

export namespace BorderBottomRightRadius {
    export const set = (...values: Value[]): Sheet => ({borderBottomRightRadius: property(values)});
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

export namespace BorderStartStartRadius {
    export const set = (...values: Value[]): Sheet => ({borderStartStartRadius: property(values)});
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

export namespace BorderStartEndRadius {
    export const set = (...values: Value[]): Sheet => ({borderStartEndRadius: property(values)});
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

export namespace BorderEndStartRadius {
    export const set = (...values: Value[]): Sheet => ({borderEndStartRadius: property(values)});
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

export namespace BorderEndEndRadius {
    export const set = (...values: Value[]): Sheet => ({borderEndEndRadius: property(values)});
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

/* Image */

export namespace BorderImage {
    export const set = (...values: Value[]): Sheet => ({borderImage: property(values)});
    export const x = (...nums: number[]) => set(Size.x(...nums));
}

export namespace BorderImageOutset {
    export const set = (...values: Value[]): Sheet => ({borderImageOutset: property(values)});
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

export namespace BorderImageRepeat {
    export const set = (...values: Value[]): Sheet => ({borderImageRepeat: property(values)});
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const REPEAT: Sheet = set(Keyword.REPEAT);
    export const ROUND: Sheet = set(Keyword.ROUND);
    export const SPACE: Sheet = set(Keyword.SPACE);
}

export namespace BorderImageSlice {
    export const set = (...values: Value[]): Sheet => ({borderImageSlice: property(values)});
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

export namespace BorderImageSource {
    export const set = (...values: Value[]): Sheet => ({borderImageSource: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const url = (...params: Param[]) => set(Method.url(...params));
    export const image = (...params: Param[]) => set(Method.image(...params));
    export const imageSet = (...params: Param[]) => set(Method.imageSet(...params));
    export const element = (...params: Param[]) => set(Method.element(...params));
    export const crossFade = (...params: Param[]) => set(Method.crossFade(...params));
    export const linearGradient = (...params: Param[]) => set(Method.linearGradient(...params));
    export const repeatingLinearGradient = (...params: Param[]) => set(Method.repeatingLinearGradient(...params));
    export const radialGradient = (...params: Param[]) => set(Method.radialGradient(...params));
    export const repeatingRadialGradient = (...params: Param[]) => set(Method.repeatingRadialGradient(...params));
}

export namespace BorderImageWidth {
    export const set = (...values: Value[]): Sheet => ({borderImageWidth: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
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
