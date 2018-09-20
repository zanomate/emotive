import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Colors } from '../../index';

export namespace Stroke {
    export const set = (...values: Value[]): Sheet => ({stroke: property(values)});
}

export namespace StrokeWidth {
    export const set = (...values: Value[]): Sheet => ({strokeWidth: property(values)});
}

export namespace StrokeAlign {
    export const set = (...values: Value[]): Sheet => ({strokeAlign: property(values)});
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const INSET: Sheet = set(Keywords.INSET);
    export const OUTSET: Sheet = set(Keywords.OUTSET);
}

export namespace StrokeLinecap {
    export const set = (...values: Value[]): Sheet => ({strokeLinecap: property(values)});
    export const BUTT: Sheet = set(Keywords.BUTT);
    export const ROUND: Sheet = set(Keywords.ROUND);
    export const SQUARE: Sheet = set(Keywords.SQUARE);
}

export namespace StrokeLinejoin {
    export const set = (...values: Value[]): Sheet => ({strokeLinejoin: property(values)});
    export const CROP: Sheet = set(Keywords.CROP);
    export const ARCS: Sheet = set(Keywords.ARCS);
    export const MITER: Sheet = set(Keywords.MITER);
    export const BEVEL: Sheet = set(Keywords.BEVEL);
    export const ROUND: Sheet = set(Keywords.ROUND);
    export const STUPID: Sheet = set(Keywords.STUPID);
}

export namespace StrokeMiterlimit {
    export const set = (...values: Value[]): Sheet => ({strokeMiterlimit: property(values)});
}

export namespace StrokeBreak {
    export const set = (...values: Value[]): Sheet => ({strokeBreak: property(values)});
    export const BOUNDING_BOX: Sheet = set(Keywords.BOUNDING_BOX);
    export const SLICE: Sheet = set(Keywords.SLICE);
    export const CLONE: Sheet = set(Keywords.CLONE);
}

export namespace StrokeDasharray {
    export const set = (...values: Value[]): Sheet => ({strokeDasharray: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace StrokeDashoffset {
    export const set = (...values: Value[]): Sheet => ({strokeDashoffset: property(values)});
}

export namespace StrokeDashCorner {
    export const set = (...values: Value[]): Sheet => ({strokeDashCorner: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace StrokeDashJustify {
    export const set = (...values: Value[]): Sheet => ({strokeDashJustify: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
    export const COMPRESS: Sheet = set(Keywords.COMPRESS);
    export const DASHES: Sheet = set(Keywords.DASHES);
    export const GAPS: Sheet = set(Keywords.GAPS);
}

export namespace StrokeColor {
    export const set = (...values: Value[]): Sheet => ({strokeColor: property(values)});
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
    export const rgb = (...params: Param[]) => set(Methods.rgb(...params));
    export const rgba = (...params: Param[]) => set(Methods.rgba(...params));
    export const hsl = (...params: Param[]) => set(Methods.hsl(...params));
    export const hsla = (...params: Param[]) => set(Methods.hsla(...params));
    export const hex = (code: string) => set(Methods.hex(code));
    export const hexa = (code: string, alpha: number) => set(Methods.hexa(code, alpha));
}

export namespace StrokeImage {
    export const set = (...values: Value[]): Sheet => ({strokeImage: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace StrokeOrigin {
    export const set = (...values: Value[]): Sheet => ({strokeOrigin: property(values)});
    export const MATCH_PARENT: Sheet = set(Keywords.MATCH_PARENT);
    export const FILL_BOX: Sheet = set(Keywords.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keywords.STROKE_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
}

export namespace StrokePosition {
    export const set = (...values: Value[]): Sheet => ({strokePosition: property(values)});
    export const TOP: Sheet = set(Keywords.TOP);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const TOP_LEFT: Sheet = set(Keywords.TOP, Keywords.LEFT);
    export const TOP_RIGHT: Sheet = set(Keywords.TOP, Keywords.RIGHT);
    export const BOTTOM_LEFT: Sheet = set(Keywords.BOTTOM, Keywords.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keywords.BOTTOM, Keywords.RIGHT);
}

export namespace StrokeSize {
    export const set = (...values: Value[]): Sheet => ({strokeSize: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace StrokeRepeat {
    export const set = (...values: Value[]): Sheet => ({strokeRepeat: property(values)});
    export const REPEAT: Sheet = set(Keywords.REPEAT);
    export const REPEAT_X: Sheet = set(Keywords.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keywords.REPEAT_Y);
    export const SPACE: Sheet = set(Keywords.SPACE);
    export const AROUND: Sheet = set(Keywords.AROUND);
    export const NO_REPEAT: Sheet = set(Keywords.NO_REPEAT);
}

export namespace StrokeOpacity {
    export const set = (...values: Value[]): Sheet => ({strokeOpacity: property(values)});
}
