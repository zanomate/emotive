import { property } from '../../utils/factory';
import {
    ALL, AUTO, BIDI_OVERRIDE, DIGITS, EMBED, HORIZONTAL_TB, ISOLATE,
    ISOLATE_OVERRIDE, LTR, MIXED, NONE, NORMAL, PLAINTEXT, RTL, SIDEWAYS,
    SIDEWAYS_LR, SIDEWAYS_RL, UPRIGHT, VERTICAL_LR, VERTICAL_RL
} from '../../constants';
import { deg } from '../../data-types/measures';

const Direction = property('direction');
Direction.LTR = Direction(LTR);
Direction.RTL = Direction(RTL);
export { Direction };

const GlyphOrientationVertical = property('glyphOrientationVertical');
GlyphOrientationVertical.AUTO = GlyphOrientationVertical(AUTO);
GlyphOrientationVertical._0 = GlyphOrientationVertical._0DEG = GlyphOrientationVertical(0);
GlyphOrientationVertical._90 = GlyphOrientationVertical._90DEG = GlyphOrientationVertical(deg(90));
export { GlyphOrientationVertical };

const TextCombineUpright = property('textCombineUpright');
TextCombineUpright.NONE = TextCombineUpright(NONE);
TextCombineUpright.ALL = TextCombineUpright(ALL);
TextCombineUpright.DIGITS = TextCombineUpright(DIGITS);
TextCombineUpright.digits = (...values) => TextCombineUpright(DIGITS, ...values);
export { TextCombineUpright };

const TextOrientation = property('textOrientation');
TextOrientation.MIXED = TextOrientation(MIXED);
TextOrientation.UPRIGHT = TextOrientation(UPRIGHT);
TextOrientation.SIDEWAYS = TextOrientation(SIDEWAYS);
export { TextOrientation };

const UnicodeBidi = property('unicodeBidi');
UnicodeBidi.NORMAL = UnicodeBidi(NORMAL);
UnicodeBidi.EMBED = UnicodeBidi(EMBED);
UnicodeBidi.ISOLATE = UnicodeBidi(ISOLATE);
UnicodeBidi.BIDI_OVERRIDE = UnicodeBidi(BIDI_OVERRIDE);
UnicodeBidi.ISOLATE_OVERRIDE = UnicodeBidi(ISOLATE_OVERRIDE);
UnicodeBidi.PLAINTEXT = UnicodeBidi(PLAINTEXT);
export { UnicodeBidi };

const WritingMode = property('writingMode');
WritingMode.HORIZONTAL_TB = WritingMode(HORIZONTAL_TB);
WritingMode.VERTICAL_RL = WritingMode(VERTICAL_RL);
WritingMode.VERTICAL_LR = WritingMode(VERTICAL_LR);
WritingMode.SIDEWAYS_RL = WritingMode(SIDEWAYS_RL);
WritingMode.SIDEWAYS_LR = WritingMode(SIDEWAYS_LR);
export { WritingMode };
