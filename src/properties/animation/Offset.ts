import { Keywords } from '../../constants';
import { Angle, Length, Param, property, Sheet, Value } from '../../index';
import * as Method from '../../methods';

export namespace Offset {
    export const set = (...values: Value[]): Sheet => ({offset: property(values)});
}

export namespace OffsetPosition {
    export const set = (...values: Value[]): Sheet => ({offsetPosition: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const TOP: Sheet = set(Keywords.TOP);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const CENTER_LEFT: Sheet = set(Keywords.CENTER, Keywords.LEFT);
    export const CENTER_RIGHT: Sheet = set(Keywords.CENTER, Keywords.RIGHT);
    export const TOP_LEFT: Sheet = set(Keywords.TOP, Keywords.LEFT);
    export const TOP_RIGHT: Sheet = set(Keywords.TOP, Keywords.RIGHT);
    export const TOP_CENTER: Sheet = set(Keywords.TOP, Keywords.CENTER);
    export const BOTTOM_LEFT: Sheet = set(Keywords.BOTTOM, Keywords.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keywords.BOTTOM, Keywords.RIGHT);
    export const BOTTOM_CENTER: Sheet = set(Keywords.BOTTOM, Keywords.CENTER);
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

export namespace OffsetPath {
    export const set = (...values: Value[]): Sheet => ({offsetPath: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FILL_BOX: Sheet = set(Keywords.FILL_BOX);
    export const VIEW_BOX: Sheet = set(Keywords.VIEW_BOX);
    export const STROKE_BOX: Sheet = set(Keywords.STROKE_BOX);
    export const MARGIN_BOX: Sheet = set(Keywords.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
    export const ray = (...params: Param[]) => set(Method.ray(...params));
    export const url = (...params: Param[]) => set(Method.url(...params));
    export const path = (...params: Param[]) => set(Method.path(...params));
    export const inset = (...params: Param[]) => set(Method.inset(...params));
    export const circle = (...params: Param[]) => set(Method.circle(...params));
    export const ellipse = (...params: Param[]) => set(Method.ellipse(...params));
    export const polygon = (...params: Param[]) => set(Method.polygon(...params));
}

export namespace OffsetDistance {
    export const set = (...values: Value[]): Sheet => ({offsetDistance: property(values)});
}

export namespace OffsetRotate {
    export const set = (...values: Value[]): Sheet => ({offsetRotate: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const REVERSE: Sheet = set(Keywords.REVERSE);
    export const deg = (...nums: number[]) => set(Angle.deg(...nums));
    export const grad = (...nums: number[]) => set(Angle.grad(...nums));
    export const rad = (...nums: number[]) => set(Angle.rad(...nums));
    export const turn = (...nums: number[]) => set(Angle.turn(...nums));
}

export namespace OffsetAnchor {
    export const set = (...values: Value[]): Sheet => ({offsetAnchor: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const TOP: Sheet = set(Keywords.TOP);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const CENTER_LEFT: Sheet = set(Keywords.CENTER, Keywords.LEFT);
    export const CENTER_RIGHT: Sheet = set(Keywords.CENTER, Keywords.RIGHT);
    export const TOP_LEFT: Sheet = set(Keywords.TOP, Keywords.LEFT);
    export const TOP_RIGHT: Sheet = set(Keywords.TOP, Keywords.RIGHT);
    export const TOP_CENTER: Sheet = set(Keywords.TOP, Keywords.CENTER);
    export const BOTTOM_LEFT: Sheet = set(Keywords.BOTTOM, Keywords.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keywords.BOTTOM, Keywords.RIGHT);
    export const BOTTOM_CENTER: Sheet = set(Keywords.BOTTOM, Keywords.CENTER);
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
