import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Colors, Length, Param } from '../../index';
import * as Method from '../../methods';

export namespace Border {
    export const set = (...values: Value[]): Sheet => ({border: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderTop {
    export const set = (...values: Value[]): Sheet => ({borderTop: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderBottom {
    export const set = (...values: Value[]): Sheet => ({borderBottom: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderLeft {
    export const set = (...values: Value[]): Sheet => ({borderLeft: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderRight {
    export const set = (...values: Value[]): Sheet => ({borderRight: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderBlock {
    export const set = (...values: Value[]): Sheet => ({borderBlock: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderBlockStart {
    export const set = (...values: Value[]): Sheet => ({borderBlockStart: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderBlockEnd {
    export const set = (...values: Value[]): Sheet => ({borderBlockEnd: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderInline {
    export const set = (...values: Value[]): Sheet => ({borderInline: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderInlineStart {
    export const set = (...values: Value[]): Sheet => ({borderInlineStart: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

export namespace BorderInlineEnd {
    export const set = (...values: Value[]): Sheet => ({borderInlineEnd: property(values)});
    export const hidden = (...values: Value[]) => set(Keywords.HIDDEN, ...values);
    export const dotted = (...values: Value[]) => set(Keywords.DOTTED, ...values);
    export const dashed = (...values: Value[]) => set(Keywords.DASHED, ...values);
    export const solid = (...values: Value[]) => set(Keywords.SOLID, ...values);
    export const double = (...values: Value[]) => set(Keywords.DOUBLE, ...values);
    export const groove = (...values: Value[]) => set(Keywords.GROOVE, ...values);
    export const ridge = (...values: Value[]) => set(Keywords.RIDGE, ...values);
    export const inset = (...values: Value[]) => set(Keywords.INSET, ...values);
    export const outset = (...values: Value[]) => set(Keywords.OUTSET, ...values);
    export const thin = (...values: Value[]) => set(Keywords.THIN, Keywords.OUTSET, ...values);
    export const medium = (...values: Value[]) => set(Keywords.MEDIUM, Keywords.OUTSET, ...values);
    export const thick = (...values: Value[]) => set(Keywords.THICK, Keywords.OUTSET, ...values);
}

/* Width */

export namespace BorderWidth {
    export const set = (...values: Value[]): Sheet => ({borderWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderTopWidth {
    export const set = (...values: Value[]): Sheet => ({borderTopWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderBottomWidth {
    export const set = (...values: Value[]): Sheet => ({borderBottomWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderLeftWidth {
    export const set = (...values: Value[]): Sheet => ({borderLeftWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderRightWidth {
    export const set = (...values: Value[]): Sheet => ({borderRightWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderBlockWidth {
    export const set = (...values: Value[]): Sheet => ({borderBlockWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderBlockStartWidth {
    export const set = (...values: Value[]): Sheet => ({borderBlockStartWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderBlockEndWidth {
    export const set = (...values: Value[]): Sheet => ({borderBlockEndWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderInlineWidth {
    export const set = (...values: Value[]): Sheet => ({borderInlineWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderInlineStartWidth {
    export const set = (...values: Value[]): Sheet => ({borderInlineStartWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

export namespace BorderInlineEndWidth {
    export const set = (...values: Value[]): Sheet => ({borderInlineEndWidth: property(values)});
    export const THIN: Sheet = set(Keywords.THIN);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const THICK: Sheet = set(Keywords.THICK);
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

/* Style */

export namespace BorderStyle {
    export const set = (...values: Value[]): Sheet => ({borderStyle: property(values)});
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

export namespace BorderTopStyle {
    export const set = (...values: Value[]): Sheet => ({borderTopStyle: property(values)});
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

export namespace BorderBottomStyle {
    export const set = (...values: Value[]): Sheet => ({borderBottomStyle: property(values)});
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

export namespace BorderLeftStyle {
    export const set = (...values: Value[]): Sheet => ({borderLeftStyle: property(values)});
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

export namespace BorderRightStyle {
    export const set = (...values: Value[]): Sheet => ({borderRightStyle: property(values)});
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

export namespace BorderBlockStyle {
    export const set = (...values: Value[]): Sheet => ({borderBlockStyle: property(values)});
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

export namespace BorderBlockStartStyle {
    export const set = (...values: Value[]): Sheet => ({borderBlockStartStyle: property(values)});
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

export namespace BorderBlockEndStyle {
    export const set = (...values: Value[]): Sheet => ({borderBlockEndStyle: property(values)});
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

export namespace BorderInlineStyle {
    export const set = (...values: Value[]): Sheet => ({borderInlineStyle: property(values)});
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

export namespace BorderInlineStartStyle {
    export const set = (...values: Value[]): Sheet => ({borderInlineStartStyle: property(values)});
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

export namespace BorderInlineEndStyle {
    export const set = (...values: Value[]): Sheet => ({borderInlineEndStyle: property(values)});
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

/* Colors */

export namespace BorderColor {
    export const set = (...values: Value[]): Sheet => ({borderColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderTopColor {
    export const set = (...values: Value[]): Sheet => ({borderTopColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderBottomColor {
    export const set = (...values: Value[]): Sheet => ({borderBottomColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderLeftColor {
    export const set = (...values: Value[]): Sheet => ({borderLeftColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderRightColor {
    export const set = (...values: Value[]): Sheet => ({borderRightColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderBlockColor {
    export const set = (...values: Value[]): Sheet => ({borderBlockColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderBlockStartColor {
    export const set = (...values: Value[]): Sheet => ({borderBlockStartColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderBlockEndColor {
    export const set = (...values: Value[]): Sheet => ({borderBlockEndColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderInlineColor {
    export const set = (...values: Value[]): Sheet => ({borderInlineColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderInlineStartColor {
    export const set = (...values: Value[]): Sheet => ({borderInlineStartColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace BorderInlineEndColor {
    export const set = (...values: Value[]): Sheet => ({borderInlineEndColor: property(values)});
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

export namespace BorderTopLeftRadius {
    export const set = (...values: Value[]): Sheet => ({borderTopLeftRadius: property(values)});
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

export namespace BorderTopRightRadius {
    export const set = (...values: Value[]): Sheet => ({borderTopRightRadius: property(values)});
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

export namespace BorderBottomLeftRadius {
    export const set = (...values: Value[]): Sheet => ({borderBottomLeftRadius: property(values)});
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

export namespace BorderBottomRightRadius {
    export const set = (...values: Value[]): Sheet => ({borderBottomRightRadius: property(values)});
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

export namespace BorderStartStartRadius {
    export const set = (...values: Value[]): Sheet => ({borderStartStartRadius: property(values)});
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

export namespace BorderStartEndRadius {
    export const set = (...values: Value[]): Sheet => ({borderStartEndRadius: property(values)});
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

export namespace BorderEndStartRadius {
    export const set = (...values: Value[]): Sheet => ({borderEndStartRadius: property(values)});
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

export namespace BorderEndEndRadius {
    export const set = (...values: Value[]): Sheet => ({borderEndEndRadius: property(values)});
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

/* Image */

export namespace BorderImage {
    export const set = (...values: Value[]): Sheet => ({borderImage: property(values)});
    export const x = (...nums: number[]) => set(Length.x(...nums));
}

export namespace BorderImageOutset {
    export const set = (...values: Value[]): Sheet => ({borderImageOutset: property(values)});
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

export namespace BorderImageRepeat {
    export const set = (...values: Value[]): Sheet => ({borderImageRepeat: property(values)});
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const REPEAT: Sheet = set(Keywords.REPEAT);
    export const ROUND: Sheet = set(Keywords.ROUND);
    export const SPACE: Sheet = set(Keywords.SPACE);
}

export namespace BorderImageSlice {
    export const set = (...values: Value[]): Sheet => ({borderImageSlice: property(values)});
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

export namespace BorderImageSource {
    export const set = (...values: Value[]): Sheet => ({borderImageSource: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
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
    export const AUTO: Sheet = set(Keywords.AUTO);
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
