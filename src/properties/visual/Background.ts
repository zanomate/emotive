import { Method, Param, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';
import { Color } from '../../index';

export namespace Background {
    export const set = (...values: Value[]): Sheet => ({background: property(values)});
}

export namespace BackgroundColor {
    export const set = (...values: Value[]): Sheet => ({backgroundColor: property(values)});
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

export namespace BackgroundImage {
    export const set = (...values: Value[]): Sheet => ({backgroundImage: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const url = (...params: Param[]) => set(Method.url(...params));
    export const image = (...params: Param[]) => set(Method.image(...params));
    export const imageSet = (...params: Param[]) => set(Method.imageSet(...params));
    export const element = (...params: Param[]) => set(Method.element(...params));
    export const crossFade = (...params: Param[]) => set(Method.crossFade(...params));
    export const linearGradient = (...params: Param[]) => set(Method.linearGradient(...params));
    export const repeatingLinearGradient = (...params: Param[]) => set(Method.repeatingLinearGradient(...params));
    export const radialGradient = (...params: Param[]) => set(Method.radialGradient(...params));
    export const repeatingRadialGradient = (...params: Param[]) => set(Method.repeatingRadialGradient(...params));
}

export namespace BackgroundRepeat {
    export const set = (...values: Value[]): Sheet => ({backgroundRepeat: property(values)});
    export const REPEAT: Sheet = set(Keyword.REPEAT);
    export const REPEAT_X: Sheet = set(Keyword.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keyword.REPEAT_Y);
    export const SPACE: Sheet = set(Keyword.SPACE);
    export const AROUND: Sheet = set(Keyword.AROUND);
    export const NO_REPEAT: Sheet = set(Keyword.NO_REPEAT);
}

export namespace BackgroundAttachment {
    export const set = (...values: Value[]): Sheet => ({backgroundAttachment: property(values)});
    export const FIXED: Sheet = set(Keyword.FIXED);
    export const LOCAL: Sheet = set(Keyword.LOCAL);
    export const SCROLL: Sheet = set(Keyword.SCROLL);
}

export namespace BackgroundPosition {
    export const set = (...values: Value[]): Sheet => ({backgroundPosition: property(values)});
    export const TOP: Sheet = set(Keyword.TOP);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const TOP_LEFT: Sheet = set(Keyword.TOP, Keyword.LEFT);
    export const TOP_RIGHT: Sheet = set(Keyword.TOP, Keyword.RIGHT);
    export const BOTTOM_LEFT: Sheet = set(Keyword.BOTTOM, Keyword.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keyword.BOTTOM, Keyword.RIGHT);
}

export namespace BackgroundClip {
    export const set = (...values: Value[]): Sheet => ({backgroundClip: property(values)});
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
}

export namespace BackgroundOrigin {
    export const set = (...values: Value[]): Sheet => ({backgroundOrigin: property(values)});
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
}

export namespace BackgroundSize {
    export const set = (...values: Value[]): Sheet => ({backgroundOrigin: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const CONTAIN: Sheet = set(Keyword.CONTAIN);
    export const COVER: Sheet = set(Keyword.COVER);
}
