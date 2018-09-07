import { property } from '../../utils/factory';
import {
    AUTO, COLOR, COLOR_BURN, COLOR_DODGE, DARKEN, DIFFERENCE, EXCLUSION,
    HARD_LIGHT, HUE, ISOLATE, LIGHTEN, LUMINOSITY, MULTIPLY, NORMAL, OVERLAY,
    SATURATION, SCREEN, SOFT_LIGHT
} from '../../constants';

const MixBlendMode = property('mixBlendMode');
MixBlendMode.NORMAL = MixBlendMode(NORMAL);
MixBlendMode.MULTIPLY = MixBlendMode(MULTIPLY);
MixBlendMode.SCREEN = MixBlendMode(SCREEN);
MixBlendMode.OVERLAY = MixBlendMode(OVERLAY);
MixBlendMode.DARKEN = MixBlendMode(DARKEN);
MixBlendMode.LIGHTEN = MixBlendMode(LIGHTEN);
MixBlendMode.COLOR_DODGE = MixBlendMode(COLOR_DODGE);
MixBlendMode.COLOR_BURN = MixBlendMode(COLOR_BURN);
MixBlendMode.HARD_LIGHT = MixBlendMode(HARD_LIGHT);
MixBlendMode.SOFT_LIGHT = MixBlendMode(SOFT_LIGHT);
MixBlendMode.DIFFERENCE = MixBlendMode(DIFFERENCE);
MixBlendMode.EXCLUSION = MixBlendMode(EXCLUSION);
MixBlendMode.HUE = MixBlendMode(HUE);
MixBlendMode.SATURATION = MixBlendMode(SATURATION);
MixBlendMode.COLOR = MixBlendMode(COLOR);
MixBlendMode.LUMINOSITY = MixBlendMode(LUMINOSITY);
export { MixBlendMode };

const Isolation = property('isolation');
Isolation.AUTO = Isolation(AUTO);
Isolation.ISOLATE = Isolation(ISOLATE);
export { Isolation };

const BackgroundBlendMode = property('backgroundBlendMode');
BackgroundBlendMode.NORMAL = BackgroundBlendMode(NORMAL);
BackgroundBlendMode.MULTIPLY = BackgroundBlendMode(MULTIPLY);
BackgroundBlendMode.SCREEN = BackgroundBlendMode(SCREEN);
BackgroundBlendMode.OVERLAY = BackgroundBlendMode(OVERLAY);
BackgroundBlendMode.DARKEN = BackgroundBlendMode(DARKEN);
BackgroundBlendMode.LIGHTEN = BackgroundBlendMode(LIGHTEN);
BackgroundBlendMode.COLOR_DODGE = BackgroundBlendMode(COLOR_DODGE);
BackgroundBlendMode.COLOR_BURN = BackgroundBlendMode(COLOR_BURN);
BackgroundBlendMode.HARD_LIGHT = BackgroundBlendMode(HARD_LIGHT);
BackgroundBlendMode.SOFT_LIGHT = BackgroundBlendMode(SOFT_LIGHT);
BackgroundBlendMode.DIFFERENCE = BackgroundBlendMode(DIFFERENCE);
BackgroundBlendMode.EXCLUSION = BackgroundBlendMode(EXCLUSION);
BackgroundBlendMode.HUE = BackgroundBlendMode(HUE);
BackgroundBlendMode.SATURATION = BackgroundBlendMode(SATURATION);
BackgroundBlendMode.COLOR = BackgroundBlendMode(COLOR);
BackgroundBlendMode.LUMINOSITY = BackgroundBlendMode(LUMINOSITY);
export { BackgroundBlendMode };
