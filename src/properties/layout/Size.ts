import { Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Size as Sz } from 'datatypes';
import { Method } from 'methods';

export namespace Size {
    export const set = (...values: Value[]): Sheet => ({size: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const PORTRAIT: Sheet = set(Keyword.PORTRAIT);
    export const LANDSCAPE: Sheet = set(Keyword.LANDSCAPE);
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace BlockSize {
    export const set = (...values: Value[]): Sheet => ({blockSize: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace InlineSize {
    export const set = (...values: Value[]): Sheet => ({inlineSize: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MinBlockSize {
    export const set = (...values: Value[]): Sheet => ({minBlockSize: property(values)});
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MinInlineSize {
    export const set = (...values: Value[]): Sheet => ({minInlineSize: property(values)});
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MaxBlockSize {
    export const set = (...values: Value[]): Sheet => ({maxBlockSize: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MaxInlineSize {
    export const set = (...values: Value[]): Sheet => ({maxInlineSize: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace Resize {
    export const set = (...values: Value[]): Sheet => ({resize: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const BOTH: Sheet = set(Keyword.BOTH);
    export const HORIZONTAL: Sheet = set(Keyword.HORIZONTAL);
    export const VERTICAL: Sheet = set(Keyword.VERTICAL);
}

/* Width */

export namespace Width {
    export const set = (...values: Value[]): Sheet => ({width: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const MIN_CONTENT: Sheet = set(Keyword.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keyword.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Method.fitContent(...params));
    export const x = (...nums: number[]) => set(Sz.x(...nums));
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MinWidth {
    export const set = (...values: Value[]): Sheet => ({minWidth: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const MIN_CONTENT: Sheet = set(Keyword.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keyword.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Method.fitContent(...params));
    export const x = (...nums: number[]) => set(Sz.x(...nums));
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MaxWidth {
    export const set = (...values: Value[]): Sheet => ({maxWidth: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const MIN_CONTENT: Sheet = set(Keyword.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keyword.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Method.fitContent(...params));
    export const x = (...nums: number[]) => set(Sz.x(...nums));
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

/* Height */

export namespace Height {
    export const set = (...values: Value[]): Sheet => ({height: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const MIN_CONTENT: Sheet = set(Keyword.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keyword.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Method.fitContent(...params));
    export const x = (...nums: number[]) => set(Sz.x(...nums));
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MinHeight {
    export const set = (...values: Value[]): Sheet => ({minHeight: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const MIN_CONTENT: Sheet = set(Keyword.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keyword.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Method.fitContent(...params));
    export const x = (...nums: number[]) => set(Sz.x(...nums));
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}

export namespace MaxHeight {
    export const set = (...values: Value[]): Sheet => ({maxHeight: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const MIN_CONTENT: Sheet = set(Keyword.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keyword.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Method.fitContent(...params));
    export const x = (...nums: number[]) => set(Sz.x(...nums));
    export const cap = (...nums: number[]) => set(Sz.cap(...nums));
    export const ch = (...nums: number[]) => set(Sz.ch(...nums));
    export const em = (...nums: number[]) => set(Sz.em(...nums));
    export const ex = (...nums: number[]) => set(Sz.ex(...nums));
    export const ic = (...nums: number[]) => set(Sz.ic(...nums));
    export const lh = (...nums: number[]) => set(Sz.lh(...nums));
    export const rem = (...nums: number[]) => set(Sz.rem(...nums));
    export const rlh = (...nums: number[]) => set(Sz.rlh(...nums));
    export const vh = (...nums: number[]) => set(Sz.vh(...nums));
    export const vw = (...nums: number[]) => set(Sz.vw(...nums));
    export const vi = (...nums: number[]) => set(Sz.vi(...nums));
    export const vb = (...nums: number[]) => set(Sz.vb(...nums));
    export const vmin = (...nums: number[]) => set(Sz.vmin(...nums));
    export const vmax = (...nums: number[]) => set(Sz.vmax(...nums));
    export const px = (...nums: number[]) => set(Sz.px(...nums));
    export const cm = (...nums: number[]) => set(Sz.cm(...nums));
    export const mm = (...nums: number[]) => set(Sz.mm(...nums));
    export const Q = (...nums: number[]) => set(Sz.Q(...nums));
    export const inch = (...nums: number[]) => set(Sz.inch(...nums));
    export const pc = (...nums: number[]) => set(Sz.pc(...nums));
    export const pt = (...nums: number[]) => set(Sz.pt(...nums));
    export const fr = (...nums: number[]) => set(Sz.fr(...nums));
}
