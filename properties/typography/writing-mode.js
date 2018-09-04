import { property } from '../../utils'
import {
    ALL, AUTO, BIDI_OVERRIDE, DIGITS, EMBED, HORIZONTAL_TB, ISOLATE, ISOLATE_OVERRIDE, LTR, MIXED, NONE, NORMAL,
    PLAINTEXT, RTL, SIDEWAYS, SIDEWAYS_LR, SIDEWAYS_RL, UPRIGHT, VERTICAL_LR, VERTICAL_RL
} from '../../constants';
import { deg } from '../../data-types';

export const direction = property('direction');
direction.LTR = direction(LTR);
direction.RTL = direction(RTL);

export const glyphOrientationVertical = property('glyphOrientationVertical');
glyphOrientationVertical.AUTO = glyphOrientationVertical(AUTO);
glyphOrientationVertical._0 = glyphOrientationVertical._0DEG = glyphOrientationVertical(0);
glyphOrientationVertical._90 = glyphOrientationVertical._90DEG = glyphOrientationVertical(deg(90));

export const textCombineUpright = property('textCombineUpright');
textCombineUpright.NONE = textCombineUpright(NONE);
textCombineUpright.ALL = textCombineUpright(ALL);
textCombineUpright.DIGITS = textCombineUpright(DIGITS);
textCombineUpright.digits = (...values) => textCombineUpright(DIGITS, ...values);

export const textOrientation = property('textOrientation');
textOrientation.MIXED = textOrientation(MIXED);
textOrientation.UPRIGHT = textOrientation(UPRIGHT);
textOrientation.SIDEWAYS = textOrientation(SIDEWAYS);

export const unicodeBidi = property('unicodeBidi');
unicodeBidi.NORMAL = unicodeBidi(NORMAL);
unicodeBidi.EMBED = unicodeBidi(EMBED);
unicodeBidi.ISOLATE = unicodeBidi(ISOLATE);
unicodeBidi.BIDI_OVERRIDE = unicodeBidi(BIDI_OVERRIDE);
unicodeBidi.ISOLATE_OVERRIDE = unicodeBidi(ISOLATE_OVERRIDE);
unicodeBidi.PLAINTEXT = unicodeBidi(PLAINTEXT);

export const writingMode = property('writingMode');
writingMode.HORIZONTAL_TB = writingMode(HORIZONTAL_TB);
writingMode.VERTICAL_RL = writingMode(VERTICAL_RL);
writingMode.VERTICAL_LR = writingMode(VERTICAL_LR);
writingMode.SIDEWAYS_RL = writingMode(SIDEWAYS_RL);
writingMode.SIDEWAYS_LR = writingMode(SIDEWAYS_LR);
