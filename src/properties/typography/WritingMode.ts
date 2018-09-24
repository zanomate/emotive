import { Angle, property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Direction {
    export const set = (...values: Value[]): Sheet => ({direction: property(values)});
    export const LTR: Sheet = set(Keyword.LTR);
    export const RTL: Sheet = set(Keyword.RTL);
}

export namespace GlyphOrientationVertical {
    export const set = (...values: Value[]): Sheet => ({glyphOrientationVertical: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const _0: Sheet = set(Angle.deg(0));
    export const _90: Sheet = set(Angle.deg(90));
}

export namespace TextCombineUpright {
    export const set = (...values: Value[]): Sheet => ({textCombineUpright: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const ALL: Sheet = set(Keyword.ALL);
    export const DIGITS: Sheet = set(Keyword.DIGITS);
    export const digits = (...values: Value[]): Sheet => set(Keyword.DIGITS, ...values);
}

export namespace TextOrientation {
    export const set = (...values: Value[]): Sheet => ({textOrientation: property(values)});
    export const MIXED: Sheet = set(Keyword.MIXED);
    export const UPRIGHT: Sheet = set(Keyword.UPRIGHT);
    export const SIDEWAYS: Sheet = set(Keyword.SIDEWAYS);
}

export namespace UnicodeBidi {
    export const set = (...values: Value[]): Sheet => ({unicodeBidi: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const EMBED: Sheet = set(Keyword.EMBED);
    export const ISOLATE: Sheet = set(Keyword.ISOLATE);
    export const BIDI_OVERRIDE: Sheet = set(Keyword.BIDI_OVERRIDE);
    export const ISOLATE_OVERRIDE: Sheet = set(Keyword.ISOLATE_OVERRIDE);
    export const PLAINTEXT: Sheet = set(Keyword.PLAINTEXT);
}

export namespace WritingMode {
    export const set = (...values: Value[]): Sheet => ({writingMode: property(values)});
    export const HORIZONTAL_TB: Sheet = set(Keyword.HORIZONTAL_TB);
    export const VERTICAL_RL: Sheet = set(Keyword.VERTICAL_RL);
    export const VERTICAL_LR: Sheet = set(Keyword.VERTICAL_LR);
    export const SIDEWAYS_RL: Sheet = set(Keyword.SIDEWAYS_RL);
    export const SIDEWAYS_LR: Sheet = set(Keyword.SIDEWAYS_LR);
}
