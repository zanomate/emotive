import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Colors } from '../../index';

export namespace Fill {
    export const set = (...values: Value[]): Sheet => ({fill: property(values)});
}

export namespace FillRule {
    export const set = (...values: Value[]): Sheet => ({fillRule: property(values)});
    export const NONZERO: Sheet = set(Keywords.NONZERO);
    export const EVENODD: Sheet = set(Keywords.EVENODD);
}

export namespace FillBreak {
    export const set = (...values: Value[]): Sheet => ({fillBreak: property(values)});
    export const BOUNDING_BOX: Sheet = set(Keywords.BOUNDING_BOX);
    export const SLICE: Sheet = set(Keywords.SLICE);
    export const CLONE: Sheet = set(Keywords.CLONE);
}

export namespace FillColor {
    export const set = (...values: Value[]): Sheet => ({fillColor: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
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

export namespace FillImage {
    export const set = (...values: Value[]): Sheet => ({fillImage: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace FillOrigin {
    export const set = (...values: Value[]): Sheet => ({fillOrigin: property(values)});
    export const MATCH_PARENT: Sheet = set(Keywords.MATCH_PARENT);
    export const FILL_BOX: Sheet = set(Keywords.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keywords.STROKE_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
}

export namespace FillPosition {
    export const set = (...values: Value[]): Sheet => ({fillPosition: property(values)});
    export const TOP: Sheet = set(Keywords.TOP);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const TOP_LEFT: Sheet = set(Keywords.TOP, Keywords.LEFT);
    export const TOP_RIGHT: Sheet = set(Keywords.TOP, Keywords.RIGHT);
    export const BOTTOM_LEFT: Sheet = set(Keywords.BOTTOM, Keywords.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keywords.BOTTOM, Keywords.RIGHT);
}

export namespace FillSize {
    export const set = (...values: Value[]): Sheet => ({fillSize: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace FillRepeat {
    export const set = (...values: Value[]): Sheet => ({fillRepeat: property(values)});
    export const REPEAT: Sheet = set(Keywords.REPEAT);
    export const REPEAT_X: Sheet = set(Keywords.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keywords.REPEAT_Y);
    export const SPACE: Sheet = set(Keywords.SPACE);
    export const AROUND: Sheet = set(Keywords.AROUND);
    export const NO_REPEAT: Sheet = set(Keywords.NO_REPEAT);
}

export namespace FillOpacity {
    export const set = (...values: Value[]): Sheet => ({fillOpacity: property(values)});
}
