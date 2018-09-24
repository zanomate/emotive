import { Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Angle, Size } from 'datatypes';
import { Method } from 'methods';

export namespace Offset {
    export const set = (...values: Value[]): Sheet => ({offset: property(values)});
}

export namespace OffsetPosition {
    export const set = (...values: Value[]): Sheet => ({offsetPosition: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const TOP: Sheet = set(Keyword.TOP);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const CENTER_LEFT: Sheet = set(Keyword.CENTER, Keyword.LEFT);
    export const CENTER_RIGHT: Sheet = set(Keyword.CENTER, Keyword.RIGHT);
    export const TOP_LEFT: Sheet = set(Keyword.TOP, Keyword.LEFT);
    export const TOP_RIGHT: Sheet = set(Keyword.TOP, Keyword.RIGHT);
    export const TOP_CENTER: Sheet = set(Keyword.TOP, Keyword.CENTER);
    export const BOTTOM_LEFT: Sheet = set(Keyword.BOTTOM, Keyword.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keyword.BOTTOM, Keyword.RIGHT);
    export const BOTTOM_CENTER: Sheet = set(Keyword.BOTTOM, Keyword.CENTER);
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

export namespace OffsetPath {
    export const set = (...values: Value[]): Sheet => ({offsetPath: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FILL_BOX: Sheet = set(Keyword.FILL_BOX);
    export const VIEW_BOX: Sheet = set(Keyword.VIEW_BOX);
    export const STROKE_BOX: Sheet = set(Keyword.STROKE_BOX);
    export const MARGIN_BOX: Sheet = set(Keyword.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
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
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const REVERSE: Sheet = set(Keyword.REVERSE);
    export const deg = (...nums: number[]) => set(Angle.deg(...nums));
    export const grad = (...nums: number[]) => set(Angle.grad(...nums));
    export const rad = (...nums: number[]) => set(Angle.rad(...nums));
    export const turn = (...nums: number[]) => set(Angle.turn(...nums));
}

export namespace OffsetAnchor {
    export const set = (...values: Value[]): Sheet => ({offsetAnchor: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const TOP: Sheet = set(Keyword.TOP);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const CENTER_LEFT: Sheet = set(Keyword.CENTER, Keyword.LEFT);
    export const CENTER_RIGHT: Sheet = set(Keyword.CENTER, Keyword.RIGHT);
    export const TOP_LEFT: Sheet = set(Keyword.TOP, Keyword.LEFT);
    export const TOP_RIGHT: Sheet = set(Keyword.TOP, Keyword.RIGHT);
    export const TOP_CENTER: Sheet = set(Keyword.TOP, Keyword.CENTER);
    export const BOTTOM_LEFT: Sheet = set(Keyword.BOTTOM, Keyword.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keyword.BOTTOM, Keyword.RIGHT);
    export const BOTTOM_CENTER: Sheet = set(Keyword.BOTTOM, Keyword.CENTER);
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
