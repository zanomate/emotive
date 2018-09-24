import { Color, Keyword } from 'constants';
import { Param, property, Sheet, Value } from 'core';
import { Method } from 'methods';

export namespace Filter {
    export const set = (...values: Value[]): Sheet => ({filter: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const blur = (...params: Param[]) => set(Method.blur(...params));
    export const brightness = (...params: Param[]) => set(Method.brightness(...params));
    export const contrast = (...params: Param[]) => set(Method.contrast(...params));
    export const dropShadow = (...params: Param[]) => set(Method.dropShadow(...params));
    export const grayscale = (...params: Param[]) => set(Method.grayscale(...params));
    export const hueRotate = (...params: Param[]) => set(Method.hueRotate(...params));
    export const invert = (...params: Param[]) => set(Method.invert(...params));
    export const opacity = (...params: Param[]) => set(Method.opacity(...params));
    export const sepia = (...params: Param[]) => set(Method.sepia(...params));
    export const saturate = (...params: Param[]) => set(Method.saturate(...params));
}

export namespace FloodColor {
    export const set = (...values: Value[]): Sheet => ({floodColor: property(values)});
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

export namespace FloodOpacity {
    export const set = (...values: Value[]): Sheet => ({floodOpacity: property(values)});
}

export namespace ColorInterpolationFilters {
    export const set = (...values: Value[]): Sheet => ({colorInterpolationFilters: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const SRGB: Sheet = set(Keyword.SRGB);
    export const LINEARRGB: Sheet = set(Keyword.LINEARRGB);
}

export namespace LightingColor {
    export const set = (...values: Value[]): Sheet => ({lightingColor: property(values)});
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
