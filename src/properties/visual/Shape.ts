import { Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Size } from 'datatypes';
import { Method } from 'methods';

export namespace ShapeOutside {
    export const set = (...values: Value[]): Sheet => ({shapeOutside: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const MARGIN_BOX: Sheet = set(Keyword.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
    export const url = (...params: Param[]) => set(Method.url(...params));
    export const inset = (...params: Param[]) => set(Method.inset(...params));
    export const circle = (...params: Param[]) => set(Method.circle(...params));
    export const ellipse = (...params: Param[]) => set(Method.ellipse(...params));
    export const polygon = (...params: Param[]) => set(Method.polygon(...params));
    export const linearGradient = (...params: Param[]) => set(Method.linearGradient(...params));
    export const repeatingLinearGradient = (...params: Param[]) => set(Method.repeatingLinearGradient(...params));
    export const radialGradient = (...params: Param[]) => set(Method.radialGradient(...params));
    export const repeatingRadialGradient = (...params: Param[]) => set(Method.repeatingRadialGradient(...params));
}

export namespace ShapeImageThreshold {
    export const set = (...values: Value[]): Sheet => ({shapeImageThreshold: property(values)});
}

export namespace ShapeMargin {
    export const set = (...values: Value[]): Sheet => ({shapeImageThreshold: property(values)});
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
