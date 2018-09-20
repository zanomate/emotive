import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Colors } from '../../index';

export namespace Background {
    export const set = (...values: Value[]): Sheet => ({background: property(values)});
}

export namespace BackgroundColor {
    export const set = (...values: Value[]): Sheet => ({backgroundColor: property(values)});
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

export namespace BackgroundImage {
    export const set = (...values: Value[]): Sheet => ({backgroundImage: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const url = (...params: Param[]) => set(Methods.url(...params));
    export const image = (...params: Param[]) => set(Methods.image(...params));
    export const imageSet = (...params: Param[]) => set(Methods.imageSet(...params));
    export const element = (...params: Param[]) => set(Methods.element(...params));
    export const crossFade = (...params: Param[]) => set(Methods.crossFade(...params));
    export const linearGradient = (...params: Param[]) => set(Methods.linearGradient(...params));
    export const repeatingLinearGradient = (...params: Param[]) => set(Methods.repeatingLinearGradient(...params));
    export const radialGradient = (...params: Param[]) => set(Methods.radialGradient(...params));
    export const repeatingRadialGradient = (...params: Param[]) => set(Methods.repeatingRadialGradient(...params));
}

export namespace BackgroundRepeat {
    export const set = (...values: Value[]): Sheet => ({backgroundRepeat: property(values)});
    export const REPEAT: Sheet = set(Keywords.REPEAT);
    export const REPEAT_X: Sheet = set(Keywords.REPEAT_X);
    export const REPEAT_Y: Sheet = set(Keywords.REPEAT_Y);
    export const SPACE: Sheet = set(Keywords.SPACE);
    export const AROUND: Sheet = set(Keywords.AROUND);
    export const NO_REPEAT: Sheet = set(Keywords.NO_REPEAT);
}

export namespace BackgroundAttachment {
    export const set = (...values: Value[]): Sheet => ({backgroundAttachment: property(values)});
    export const FIXED: Sheet = set(Keywords.FIXED);
    export const LOCAL: Sheet = set(Keywords.LOCAL);
    export const SCROLL: Sheet = set(Keywords.SCROLL);
}

export namespace BackgroundPosition {
    export const set = (...values: Value[]): Sheet => ({backgroundPosition: property(values)});
    export const TOP: Sheet = set(Keywords.TOP);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const TOP_LEFT: Sheet = set(Keywords.TOP, Keywords.LEFT);
    export const TOP_RIGHT: Sheet = set(Keywords.TOP, Keywords.RIGHT);
    export const BOTTOM_LEFT: Sheet = set(Keywords.BOTTOM, Keywords.LEFT);
    export const BOTTOM_RIGHT: Sheet = set(Keywords.BOTTOM, Keywords.RIGHT);
}

export namespace BackgroundClip {
    export const set = (...values: Value[]): Sheet => ({backgroundClip: property(values)});
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
}

export namespace BackgroundOrigin {
    export const set = (...values: Value[]): Sheet => ({backgroundOrigin: property(values)});
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
}

export namespace BackgroundSize {
    export const set = (...values: Value[]): Sheet => ({backgroundOrigin: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const CONTAIN: Sheet = set(Keywords.CONTAIN);
    export const COVER: Sheet = set(Keywords.COVER);
}
