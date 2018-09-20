import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';
import { Colors } from '../../index';

export namespace Filter {
    export const set = (...values: Value[]): Sheet => ({filter: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const blur = (...params: Param[]) => set(Methods.blur(...params));
    export const brightness = (...params: Param[]) => set(Methods.brightness(...params));
    export const contrast = (...params: Param[]) => set(Methods.contrast(...params));
    export const dropShadow = (...params: Param[]) => set(Methods.dropShadow(...params));
    export const grayscale = (...params: Param[]) => set(Methods.grayscale(...params));
    export const hueRotate = (...params: Param[]) => set(Methods.hueRotate(...params));
    export const invert = (...params: Param[]) => set(Methods.invert(...params));
    export const opacity = (...params: Param[]) => set(Methods.opacity(...params));
    export const sepia = (...params: Param[]) => set(Methods.sepia(...params));
    export const saturate = (...params: Param[]) => set(Methods.saturate(...params));
}

export namespace FloodColor {
    export const set = (...values: Value[]): Sheet => ({floodColor: property(values)});
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

export namespace FloodOpacity {
    export const set = (...values: Value[]): Sheet => ({floodOpacity: property(values)});
}

export namespace ColorInterpolationFilters {
    export const set = (...values: Value[]): Sheet => ({colorInterpolationFilters: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const SRGB: Sheet = set(Keywords.SRGB);
    export const LINEARRGB: Sheet = set(Keywords.LINEARRGB);
}

export namespace LightingColor {
    export const set = (...values: Value[]): Sheet => ({lightingColor: property(values)});
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
