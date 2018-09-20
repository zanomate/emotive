import { Angle, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Direction {
    export const set = (...values: Value[]): Sheet => ({direction: property(values)});
    export const LTR: Sheet = set(Keywords.LTR);
    export const RTL: Sheet = set(Keywords.RTL);
}

export namespace GlyphOrientationVertical {
    export const set = (...values: Value[]): Sheet => ({glyphOrientationVertical: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const _0: Sheet = set(Angle.deg(0));
    export const _90: Sheet = set(Angle.deg(90));
}

export namespace TextCombineUpright {
    export const set = (...values: Value[]): Sheet => ({textCombineUpright: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const ALL: Sheet = set(Keywords.ALL);
    export const DIGITS: Sheet = set(Keywords.DIGITS);
    export const digits = (...values: Value[]): Sheet => set(Keywords.DIGITS, ...values);
}

export namespace TextOrientation {
    export const set = (...values: Value[]): Sheet => ({textOrientation: property(values)});
    export const MIXED: Sheet = set(Keywords.MIXED);
    export const UPRIGHT: Sheet = set(Keywords.UPRIGHT);
    export const SIDEWAYS: Sheet = set(Keywords.SIDEWAYS);
}

export namespace UnicodeBidi {
    export const set = (...values: Value[]): Sheet => ({unicodeBidi: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const EMBED: Sheet = set(Keywords.EMBED);
    export const ISOLATE: Sheet = set(Keywords.ISOLATE);
    export const BIDI_OVERRIDE: Sheet = set(Keywords.BIDI_OVERRIDE);
    export const ISOLATE_OVERRIDE: Sheet = set(Keywords.ISOLATE_OVERRIDE);
    export const PLAINTEXT: Sheet = set(Keywords.PLAINTEXT);
}

export namespace WritingMode {
    export const set = (...values: Value[]): Sheet => ({writingMode: property(values)});
    export const HORIZONTAL_TB: Sheet = set(Keywords.HORIZONTAL_TB);
    export const VERTICAL_RL: Sheet = set(Keywords.VERTICAL_RL);
    export const VERTICAL_LR: Sheet = set(Keywords.VERTICAL_LR);
    export const SIDEWAYS_RL: Sheet = set(Keywords.SIDEWAYS_RL);
    export const SIDEWAYS_LR: Sheet = set(Keywords.SIDEWAYS_LR);
}
