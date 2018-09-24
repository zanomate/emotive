import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace MixBlendMode {
    export const set = (...values: Value[]): Sheet => ({mixBlendMode: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const MULTIPLY: Sheet = set(Keyword.MULTIPLY);
    export const SCREEN: Sheet = set(Keyword.SCREEN);
    export const OVERLAY: Sheet = set(Keyword.OVERLAY);
    export const DARKEN: Sheet = set(Keyword.DARKEN);
    export const LIGHTEN: Sheet = set(Keyword.LIGHTEN);
    export const COLOR_DODGE: Sheet = set(Keyword.COLOR_DODGE);
    export const COLOR_BURN: Sheet = set(Keyword.COLOR_BURN);
    export const HARD_LIGHT: Sheet = set(Keyword.HARD_LIGHT);
    export const SOFT_LIGHT: Sheet = set(Keyword.SOFT_LIGHT);
    export const DIFFERENCE: Sheet = set(Keyword.DIFFERENCE);
    export const EXCLUSION: Sheet = set(Keyword.EXCLUSION);
    export const HUE: Sheet = set(Keyword.HUE);
    export const SATURATION: Sheet = set(Keyword.SATURATION);
    export const COLOR: Sheet = set(Keyword.COLOR);
    export const LUMINOSITY: Sheet = set(Keyword.LUMINOSITY);
}

export namespace Isolation {
    export const set = (...values: Value[]): Sheet => ({isolation: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const ISOLATE: Sheet = set(Keyword.ISOLATE);
}

export namespace BackgroundBlendMode {
    export const set = (...values: Value[]): Sheet => ({backgroundBlendMode: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const MULTIPLY: Sheet = set(Keyword.MULTIPLY);
    export const SCREEN: Sheet = set(Keyword.SCREEN);
    export const OVERLAY: Sheet = set(Keyword.OVERLAY);
    export const DARKEN: Sheet = set(Keyword.DARKEN);
    export const LIGHTEN: Sheet = set(Keyword.LIGHTEN);
    export const COLOR_DODGE: Sheet = set(Keyword.COLOR_DODGE);
    export const COLOR_BURN: Sheet = set(Keyword.COLOR_BURN);
    export const HARD_LIGHT: Sheet = set(Keyword.HARD_LIGHT);
    export const SOFT_LIGHT: Sheet = set(Keyword.SOFT_LIGHT);
    export const DIFFERENCE: Sheet = set(Keyword.DIFFERENCE);
    export const EXCLUSION: Sheet = set(Keyword.EXCLUSION);
    export const HUE: Sheet = set(Keyword.HUE);
    export const SATURATION: Sheet = set(Keyword.SATURATION);
    export const COLOR: Sheet = set(Keyword.COLOR);
    export const LUMINOSITY: Sheet = set(Keyword.LUMINOSITY);
}
