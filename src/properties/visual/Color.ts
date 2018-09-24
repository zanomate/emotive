import { Color as Clr, Method, Param, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Color {
    export const set = (...values: Value[]): Sheet => ({color: property(values)});
    export const CURRENTCOLOR: Sheet = set(Keyword.CURRENTCOLOR);
    export const TRANSPARENT: Sheet = set(Keyword.TRANSPARENT);
    export const BLACK: Sheet = set(Clr.BLACK);
    export const SILVER: Sheet = set(Clr.SILVER);
    export const GRAY: Sheet = set(Clr.GRAY);
    export const WHITE: Sheet = set(Clr.WHITE);
    export const MAROON: Sheet = set(Clr.MAROON);
    export const RED: Sheet = set(Clr.RED);
    export const PURPLE: Sheet = set(Clr.PURPLE);
    export const FUCHSIA: Sheet = set(Clr.FUCHSIA);
    export const GREEN: Sheet = set(Clr.GREEN);
    export const LIME: Sheet = set(Clr.LIME);
    export const OLIVE: Sheet = set(Clr.OLIVE);
    export const YELLOW: Sheet = set(Clr.YELLOW);
    export const NAVY: Sheet = set(Clr.NAVY);
    export const BLUE: Sheet = set(Clr.BLUE);
    export const TEAL: Sheet = set(Clr.TEAL);
    export const AQUA: Sheet = set(Clr.AQUA);
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace CaretColor {
    export const set = (...values: Value[]): Sheet => ({caretColor: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const CURRENTCOLOR: Sheet = set(Keyword.CURRENTCOLOR);
    export const TRANSPARENT: Sheet = set(Keyword.TRANSPARENT);
    export const BLACK: Sheet = set(Clr.BLACK);
    export const SILVER: Sheet = set(Clr.SILVER);
    export const GRAY: Sheet = set(Clr.GRAY);
    export const WHITE: Sheet = set(Clr.WHITE);
    export const MAROON: Sheet = set(Clr.MAROON);
    export const RED: Sheet = set(Clr.RED);
    export const PURPLE: Sheet = set(Clr.PURPLE);
    export const FUCHSIA: Sheet = set(Clr.FUCHSIA);
    export const GREEN: Sheet = set(Clr.GREEN);
    export const LIME: Sheet = set(Clr.LIME);
    export const OLIVE: Sheet = set(Clr.OLIVE);
    export const YELLOW: Sheet = set(Clr.YELLOW);
    export const NAVY: Sheet = set(Clr.NAVY);
    export const BLUE: Sheet = set(Clr.BLUE);
    export const TEAL: Sheet = set(Clr.TEAL);
    export const AQUA: Sheet = set(Clr.AQUA);
    export const rgb = (...params: Param[]) => set(Method.rgb(...params));
    export const rgba = (...params: Param[]) => set(Method.rgba(...params));
    export const hsl = (...params: Param[]) => set(Method.hsl(...params));
    export const hsla = (...params: Param[]) => set(Method.hsla(...params));
    export const hex = (code: string) => set(Method.hex(code));
    export const hexa = (code: string, alpha: number) => set(Method.hexa(code, alpha));
}

export namespace Opacity {
    export const set = (...values: Value[]): Sheet => ({opacity: property(values)});
}
