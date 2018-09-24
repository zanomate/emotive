import { Method, Param, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';
import { Color } from '../../index';

export namespace Stroke {
    export const set = (...values: Value[]): Sheet => ({stroke: property(values)});
}

export namespace StrokeWidth {
    export const set = (...values: Value[]): Sheet => ({strokeWidth: property(values)});
}

export namespace StrokeAlign {
    export const set = (...values: Value[]): Sheet => ({strokeAlign: property(values)});
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const INSET: Sheet = set(Keyword.INSET);
    export const OUTSET: Sheet = set(Keyword.OUTSET);
}

export namespace StrokeLinecap {
    export const set = (...values: Value[]): Sheet => ({strokeLinecap: property(values)});
    export const BUTT: Sheet = set(Keyword.BUTT);
    export const ROUND: Sheet = set(Keyword.ROUND);
    export const SQUARE: Sheet = set(Keyword.SQUARE);
}

export namespace StrokeLinejoin {
    export const set = (...values: Value[]): Sheet => ({strokeLinejoin: property(values)});
    export const CROP: Sheet = set(Keyword.CROP);
    export const ARCS: Sheet = set(Keyword.ARCS);
    export const MITER: Sheet = set(Keyword.MITER);
    export const BEVEL: Sheet = set(Keyword.BEVEL);
    export const ROUND: Sheet = set(Keyword.ROUND);
    export const STUPID: Sheet = set(Keyword.STUPID);
}

export namespace StrokeMiterlimit {
    export const set = (...values: Value[]): Sheet => ({strokeMiterlimit: property(values)});
}

export namespace StrokeBreak {
    export const set = (...values: Value[]): Sheet => ({strokeBreak: property(values)});
    export const BOUNDING_BOX: Sheet = set(Keyword.BOUNDING_BOX);
    export const SLICE: Sheet = set(Keyword.SLICE);
    export const CLONE: Sheet = set(Keyword.CLONE);
}

export namespace StrokeDasharray {
    export const set = (...values: Value[]): Sheet => ({strokeDasharray: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace StrokeDashoffset {
    export const set = (...values: Value[]): Sheet => ({strokeDashoffset: property(values)});
}

export namespace StrokeDashCorner {
    export const set = (...values: Value[]): Sheet => ({strokeDashCorner: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace StrokeDashJustify {
    export const set = (...values: Value[]): Sheet => ({strokeDashJustify: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
    export const COMPRESS: Sheet = set(Keyword.COMPRESS);
    export const DASHES: Sheet = set(Keyword.DASHES);
    export const GAPS: Sheet = set(Keyword.GAPS);
}

export namespace StrokeColor {
    export const set = (...values: Value[]): Sheet => ({strokeColor: property(values)});
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

export namespace StrokeImage {
    export const set = (...values: Value[]): Sheet => ({strokeImage: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace StrokeOrigin {
    export const set = (...values: Value[]): Sheet => ({strokeOrigin: property(values)});
    export const MATCH_PARENT: Sheet = set(Keyword.MATCH_PARENT);
    export const FILL_BOX: Sheet = set(Keyword.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keyword.STROKE_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
}

export namespace StrokePosition {
    export const set = (...values: Value[]): Sheet => ({strokePosition: property(values)});
    export const TOP: Sheet = set(Keyword.TOP);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const TOP_LEFT: Sheet = set(Keyword.TOP, Keyword.LEFT);
    export const TOP_RIGHT: Sheet = set(Keyword.TOP, Keyword.RIGHT);
    export const BOTTOM_LEFT: Sheet = set(Keyword.BOTTOM, Keyword.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keyword.BOTTOM, Keyword.RIGHT);
}

export namespace StrokeSize {
    export const set = (...values: Value[]): Sheet => ({strokeSize: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace StrokeRepeat {
    export const set = (...values: Value[]): Sheet => ({strokeRepeat: property(values)});
    export const REPEAT: Sheet = set(Keyword.REPEAT);
    export const REPEAT_X: Sheet = set(Keyword.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keyword.REPEAT_Y);
    export const SPACE: Sheet = set(Keyword.SPACE);
    export const AROUND: Sheet = set(Keyword.AROUND);
    export const NO_REPEAT: Sheet = set(Keyword.NO_REPEAT);
}

export namespace StrokeOpacity {
    export const set = (...values: Value[]): Sheet => ({strokeOpacity: property(values)});
}
