import { Colors, Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Color {
    export const set = (...values: Value[]): Sheet => ({color: property(values)});
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

export namespace CaretColor {
    export const set = (...values: Value[]): Sheet => ({caretColor: property(values)});
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

export namespace Opacity {
    export const set = (...values: Value[]): Sheet => ({opacity: property(values)});
}
