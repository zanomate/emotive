import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Length } from '../../index';

export namespace Mask {
    export const set = (...values: Value[]): Sheet => ({mask: property(values)});
}

export namespace MaskImage {
    export const set = (...values: Value[]): Sheet => ({maskImage: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace MaskMode {
    export const set = (...values: Value[]): Sheet => ({maskMode: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const ALPHA: Sheet = set(Keywords.ALPHA);
    export const LUMINANCE: Sheet = set(Keywords.LUMINANCE);
}

export namespace MaskRepeat {
    export const set = (...values: Value[]): Sheet => ({maskRepeat: property(values)});
    export const REPEAT: Sheet = set(Keywords.REPEAT);
    export const REPEAT_X: Sheet = set(Keywords.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keywords.REPEAT_Y);
    export const SPACE: Sheet = set(Keywords.SPACE);
    export const AROUND: Sheet = set(Keywords.AROUND);
    export const NO_REPEAT: Sheet = set(Keywords.NO_REPEAT);
}

export namespace MaskPosition {
    export const set = (...values: Value[]): Sheet => ({maskPosition: property(values)});
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const TOP: Sheet = set(Keywords.TOP);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
}

export namespace MaskClip {
    export const set = (...values: Value[]): Sheet => ({maskClip: property(values)});
    export const NO_CLIP: Sheet = set(Keywords.NO_CLIP);
    export const FILL_BOX: Sheet = set(Keywords.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keywords.STROKE_BOX);
    export const VIEW_BOX: Sheet = set(Keywords.VIEW_BOX);
    export const MARGIN_BOX: Sheet = set(Keywords.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
}

export namespace MaskOrigin {
    export const set = (...values: Value[]): Sheet => ({maskOrigin: property(values)});
    export const NO_CLIP: Sheet = set(Keywords.NO_CLIP);
    export const FILL_BOX: Sheet = set(Keywords.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keywords.STROKE_BOX);
    export const VIEW_BOX: Sheet = set(Keywords.VIEW_BOX);
    export const MARGIN_BOX: Sheet = set(Keywords.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
}

export namespace MaskSize {
    export const set = (...values: Value[]): Sheet => ({maskSize: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const COVER: Sheet = set(Keywords.COVER);
    export const CONTAIN: Sheet = set(Keywords.CONTAIN);
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

export namespace MaskComposite {
    export const set = (...values: Value[]): Sheet => ({maskComposite: property(values)});
    export const ADD: Sheet = set(Keywords.ADD);
    export const SUBTRACT: Sheet = set(Keywords.SUBTRACT);
    export const INTERSECT: Sheet = set(Keywords.INTERSECT);
    export const EXCLUDE: Sheet = set(Keywords.EXCLUDE);
}

export namespace MaskBorder {
    export const set = (...values: Value[]): Sheet => ({maskBorder: property(values)});
}

export namespace MaskBorderSource {
    export const set = (...values: Value[]): Sheet => ({maskBorderSource: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace MaskBorderMode {
    export const set = (...values: Value[]): Sheet => ({maskBorderMode: property(values)});
    export const ALPHA: Sheet = set(Keywords.ALPHA);
    export const LUMINANCE: Sheet = set(Keywords.LUMINANCE);
}

export namespace MaskBorderSlice {
    export const set = (...values: Value[]): Sheet => ({maskBorderSlice: property(values)});
    export const FILL: Sheet = set(Keywords.FILL);
}

export namespace MaskBorderWidth {
    export const set = (...values: Value[]): Sheet => ({maskBorderWidth: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace MaskBorderOutset {
    export const set = (...values: Value[]): Sheet => ({maskBorderOutset: property(values)});
}

export namespace MaskBorderRepeat {
    export const set = (...values: Value[]): Sheet => ({maskBorderRepeat: property(values)});
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const REPEAT: Sheet = set(Keywords.REPEAT);
    export const ROUND: Sheet = set(Keywords.ROUND);
    export const SPACE: Sheet = set(Keywords.SPACE);
}

export namespace MaskType {
    export const set = (...values: Value[]): Sheet => ({maskType: property(values)});
    export const ALPHA: Sheet = set(Keywords.ALPHA);
    export const LUMINANCE: Sheet = set(Keywords.LUMINANCE);
}
