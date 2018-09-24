import { Method, Param, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';
import { Color } from '../../index';

export namespace Fill {
    export const set = (...values: Value[]): Sheet => ({fill: property(values)});
}

export namespace FillRule {
    export const set = (...values: Value[]): Sheet => ({fillRule: property(values)});
    export const NONZERO: Sheet = set(Keyword.NONZERO);
    export const EVENODD: Sheet = set(Keyword.EVENODD);
}

export namespace FillBreak {
    export const set = (...values: Value[]): Sheet => ({fillBreak: property(values)});
    export const BOUNDING_BOX: Sheet = set(Keyword.BOUNDING_BOX);
    export const SLICE: Sheet = set(Keyword.SLICE);
    export const CLONE: Sheet = set(Keyword.CLONE);
}

export namespace FillColor {
    export const set = (...values: Value[]): Sheet => ({fillColor: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
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

export namespace FillImage {
    export const set = (...values: Value[]): Sheet => ({fillImage: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace FillOrigin {
    export const set = (...values: Value[]): Sheet => ({fillOrigin: property(values)});
    export const MATCH_PARENT: Sheet = set(Keyword.MATCH_PARENT);
    export const FILL_BOX: Sheet = set(Keyword.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keyword.STROKE_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
}

export namespace FillPosition {
    export const set = (...values: Value[]): Sheet => ({fillPosition: property(values)});
    export const TOP: Sheet = set(Keyword.TOP);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const TOP_LEFT: Sheet = set(Keyword.TOP, Keyword.LEFT);
    export const TOP_RIGHT: Sheet = set(Keyword.TOP, Keyword.RIGHT);
    export const BOTTOM_LEFT: Sheet = set(Keyword.BOTTOM, Keyword.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keyword.BOTTOM, Keyword.RIGHT);
}

export namespace FillSize {
    export const set = (...values: Value[]): Sheet => ({fillSize: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace FillRepeat {
    export const set = (...values: Value[]): Sheet => ({fillRepeat: property(values)});
    export const REPEAT: Sheet = set(Keyword.REPEAT);
    export const REPEAT_X: Sheet = set(Keyword.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keyword.REPEAT_Y);
    export const SPACE: Sheet = set(Keyword.SPACE);
    export const AROUND: Sheet = set(Keyword.AROUND);
    export const NO_REPEAT: Sheet = set(Keyword.NO_REPEAT);
}

export namespace FillOpacity {
    export const set = (...values: Value[]): Sheet => ({fillOpacity: property(values)});
}
