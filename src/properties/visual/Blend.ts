import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace MixBlendMode {
    export const set = (...values: Value[]): Sheet => ({mixBlendMode: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const MULTIPLY: Sheet = set(Keywords.MULTIPLY);
    export const SCREEN: Sheet = set(Keywords.SCREEN);
    export const OVERLAY: Sheet = set(Keywords.OVERLAY);
    export const DARKEN: Sheet = set(Keywords.DARKEN);
    export const LIGHTEN: Sheet = set(Keywords.LIGHTEN);
    export const COLOR_DODGE: Sheet = set(Keywords.COLOR_DODGE);
    export const COLOR_BURN: Sheet = set(Keywords.COLOR_BURN);
    export const HARD_LIGHT: Sheet = set(Keywords.HARD_LIGHT);
    export const SOFT_LIGHT: Sheet = set(Keywords.SOFT_LIGHT);
    export const DIFFERENCE: Sheet = set(Keywords.DIFFERENCE);
    export const EXCLUSION: Sheet = set(Keywords.EXCLUSION);
    export const HUE: Sheet = set(Keywords.HUE);
    export const SATURATION: Sheet = set(Keywords.SATURATION);
    export const COLOR: Sheet = set(Keywords.COLOR);
    export const LUMINOSITY: Sheet = set(Keywords.LUMINOSITY);
}

export namespace Isolation {
    export const set = (...values: Value[]): Sheet => ({isolation: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const ISOLATE: Sheet = set(Keywords.ISOLATE);
}

export namespace BackgroundBlendMode {
    export const set = (...values: Value[]): Sheet => ({backgroundBlendMode: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const MULTIPLY: Sheet = set(Keywords.MULTIPLY);
    export const SCREEN: Sheet = set(Keywords.SCREEN);
    export const OVERLAY: Sheet = set(Keywords.OVERLAY);
    export const DARKEN: Sheet = set(Keywords.DARKEN);
    export const LIGHTEN: Sheet = set(Keywords.LIGHTEN);
    export const COLOR_DODGE: Sheet = set(Keywords.COLOR_DODGE);
    export const COLOR_BURN: Sheet = set(Keywords.COLOR_BURN);
    export const HARD_LIGHT: Sheet = set(Keywords.HARD_LIGHT);
    export const SOFT_LIGHT: Sheet = set(Keywords.SOFT_LIGHT);
    export const DIFFERENCE: Sheet = set(Keywords.DIFFERENCE);
    export const EXCLUSION: Sheet = set(Keywords.EXCLUSION);
    export const HUE: Sheet = set(Keywords.HUE);
    export const SATURATION: Sheet = set(Keywords.SATURATION);
    export const COLOR: Sheet = set(Keywords.COLOR);
    export const LUMINOSITY: Sheet = set(Keywords.LUMINOSITY);
}
