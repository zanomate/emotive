import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Length, Param } from '../../index';
import * as Method from '../../methods';

export namespace ShapeOutside {
    export const set = (...values: Value[]): Sheet => ({shapeOutside: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const MARGIN_BOX: Sheet = set(Keywords.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
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
