import { property } from '../../utils';
import {
    AUTO, COLOR, COLOR_BURN, COLOR_DODGE, DARKEN, DIFFERENCE, EXCLUSION, HARD_LIGHT, HUE, ISOLATE, LIGHTEN, LUMINOSITY,
    MULTIPLY, NORMAL, OVERLAY, SATURATION, SCREEN, SOFT_LIGHT
} from '../../constants';

export const mixBlendMode = property('mixBlendMode');
mixBlendMode.NORMAL = mixBlendMode(NORMAL);
mixBlendMode.MULTIPLY = mixBlendMode(MULTIPLY);
mixBlendMode.SCREEN = mixBlendMode(SCREEN);
mixBlendMode.OVERLAY = mixBlendMode(OVERLAY);
mixBlendMode.DARKEN = mixBlendMode(DARKEN);
mixBlendMode.LIGHTEN = mixBlendMode(LIGHTEN);
mixBlendMode.COLOR_DODGE = mixBlendMode(COLOR_DODGE);
mixBlendMode.COLOR_BURN = mixBlendMode(COLOR_BURN);
mixBlendMode.HARD_LIGHT = mixBlendMode(HARD_LIGHT);
mixBlendMode.SOFT_LIGHT = mixBlendMode(SOFT_LIGHT);
mixBlendMode.DIFFERENCE = mixBlendMode(DIFFERENCE);
mixBlendMode.EXCLUSION = mixBlendMode(EXCLUSION);
mixBlendMode.HUE = mixBlendMode(HUE);
mixBlendMode.SATURATION = mixBlendMode(SATURATION);
mixBlendMode.COLOR = mixBlendMode(COLOR);
mixBlendMode.LUMINOSITY = mixBlendMode(LUMINOSITY);

export const isolation = property('isolation');
isolation.AUTO = isolation(AUTO);
isolation.ISOLATE = isolation(ISOLATE);

export const backgroundBlendMode = property('backgroundBlendMode');
backgroundBlendMode.NORMAL = backgroundBlendMode(NORMAL);
backgroundBlendMode.MULTIPLY = backgroundBlendMode(MULTIPLY);
backgroundBlendMode.SCREEN = backgroundBlendMode(SCREEN);
backgroundBlendMode.OVERLAY = backgroundBlendMode(OVERLAY);
backgroundBlendMode.DARKEN = backgroundBlendMode(DARKEN);
backgroundBlendMode.LIGHTEN = backgroundBlendMode(LIGHTEN);
backgroundBlendMode.COLOR_DODGE = backgroundBlendMode(COLOR_DODGE);
backgroundBlendMode.COLOR_BURN = backgroundBlendMode(COLOR_BURN);
backgroundBlendMode.HARD_LIGHT = backgroundBlendMode(HARD_LIGHT);
backgroundBlendMode.SOFT_LIGHT = backgroundBlendMode(SOFT_LIGHT);
backgroundBlendMode.DIFFERENCE = backgroundBlendMode(DIFFERENCE);
backgroundBlendMode.EXCLUSION = backgroundBlendMode(EXCLUSION);
backgroundBlendMode.HUE = backgroundBlendMode(HUE);
backgroundBlendMode.SATURATION = backgroundBlendMode(SATURATION);
backgroundBlendMode.COLOR = backgroundBlendMode(COLOR);
backgroundBlendMode.LUMINOSITY = backgroundBlendMode(LUMINOSITY);
