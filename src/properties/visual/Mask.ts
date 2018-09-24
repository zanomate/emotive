import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';
import { Size } from '../../index';

export namespace Mask {
    export const set = (...values: Value[]): Sheet => ({mask: property(values)});
}

export namespace MaskImage {
    export const set = (...values: Value[]): Sheet => ({maskImage: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace MaskMode {
    export const set = (...values: Value[]): Sheet => ({maskMode: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const ALPHA: Sheet = set(Keyword.ALPHA);
    export const LUMINANCE: Sheet = set(Keyword.LUMINANCE);
}

export namespace MaskRepeat {
    export const set = (...values: Value[]): Sheet => ({maskRepeat: property(values)});
    export const REPEAT: Sheet = set(Keyword.REPEAT);
    export const REPEAT_X: Sheet = set(Keyword.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keyword.REPEAT_Y);
    export const SPACE: Sheet = set(Keyword.SPACE);
    export const AROUND: Sheet = set(Keyword.AROUND);
    export const NO_REPEAT: Sheet = set(Keyword.NO_REPEAT);
}

export namespace MaskPosition {
    export const set = (...values: Value[]): Sheet => ({maskPosition: property(values)});
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const TOP: Sheet = set(Keyword.TOP);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
}

export namespace MaskClip {
    export const set = (...values: Value[]): Sheet => ({maskClip: property(values)});
    export const NO_CLIP: Sheet = set(Keyword.NO_CLIP);
    export const FILL_BOX: Sheet = set(Keyword.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keyword.STROKE_BOX);
    export const VIEW_BOX: Sheet = set(Keyword.VIEW_BOX);
    export const MARGIN_BOX: Sheet = set(Keyword.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
}

export namespace MaskOrigin {
    export const set = (...values: Value[]): Sheet => ({maskOrigin: property(values)});
    export const NO_CLIP: Sheet = set(Keyword.NO_CLIP);
    export const FILL_BOX: Sheet = set(Keyword.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keyword.STROKE_BOX);
    export const VIEW_BOX: Sheet = set(Keyword.VIEW_BOX);
    export const MARGIN_BOX: Sheet = set(Keyword.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
}

export namespace MaskSize {
    export const set = (...values: Value[]): Sheet => ({maskSize: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const COVER: Sheet = set(Keyword.COVER);
    export const CONTAIN: Sheet = set(Keyword.CONTAIN);
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

export namespace MaskComposite {
    export const set = (...values: Value[]): Sheet => ({maskComposite: property(values)});
    export const ADD: Sheet = set(Keyword.ADD);
    export const SUBTRACT: Sheet = set(Keyword.SUBTRACT);
    export const INTERSECT: Sheet = set(Keyword.INTERSECT);
    export const EXCLUDE: Sheet = set(Keyword.EXCLUDE);
}

export namespace MaskBorder {
    export const set = (...values: Value[]): Sheet => ({maskBorder: property(values)});
}

export namespace MaskBorderSource {
    export const set = (...values: Value[]): Sheet => ({maskBorderSource: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace MaskBorderMode {
    export const set = (...values: Value[]): Sheet => ({maskBorderMode: property(values)});
    export const ALPHA: Sheet = set(Keyword.ALPHA);
    export const LUMINANCE: Sheet = set(Keyword.LUMINANCE);
}

export namespace MaskBorderSlice {
    export const set = (...values: Value[]): Sheet => ({maskBorderSlice: property(values)});
    export const FILL: Sheet = set(Keyword.FILL);
}

export namespace MaskBorderWidth {
    export const set = (...values: Value[]): Sheet => ({maskBorderWidth: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace MaskBorderOutset {
    export const set = (...values: Value[]): Sheet => ({maskBorderOutset: property(values)});
}

export namespace MaskBorderRepeat {
    export const set = (...values: Value[]): Sheet => ({maskBorderRepeat: property(values)});
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const REPEAT: Sheet = set(Keyword.REPEAT);
    export const ROUND: Sheet = set(Keyword.ROUND);
    export const SPACE: Sheet = set(Keyword.SPACE);
}

export namespace MaskType {
    export const set = (...values: Value[]): Sheet => ({maskType: property(values)});
    export const ALPHA: Sheet = set(Keyword.ALPHA);
    export const LUMINANCE: Sheet = set(Keyword.LUMINANCE);
}
