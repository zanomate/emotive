import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

/* Cue */

export namespace Cue {
    export const set = (...values: Value[]): Sheet => ({cue: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace CueBefore {
    export const set = (...values: Value[]): Sheet => ({cueBefore: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace CueAfter {
    export const set = (...values: Value[]): Sheet => ({cueAfter: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

/* Mixing */

export namespace PlayDuring {
    export const set = (...values: Value[]): Sheet => ({playDuring: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const NONE: Sheet = set(Keywords.NONE);
}

/* Pause */

export namespace Pause {
    export const set = (...values: Value[]): Sheet => ({pause: property(values)});
}

export namespace PauseBefore {
    export const set = (...values: Value[]): Sheet => ({pauseBefore: property(values)});
}

export namespace PauseAfter {
    export const set = (...values: Value[]): Sheet => ({pauseAfter: property(values)});
}

/* Spatial */

export namespace Azimuth {
    export const set = (...values: Value[]): Sheet => ({azimuth: property(values)});
    export const LEFT_SIDE: Sheet = set(Keywords.LEFT_SIDE);
    export const FAR_LEFT: Sheet = set(Keywords.FAR_LEFT);
    export const LEFT: Sheet = set(Keywords.LEFT);
    export const CENTER_LEFT: Sheet = set(Keywords.CENTER_LEFT);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const CENTER_RIGHT: Sheet = set(Keywords.CENTER_RIGHT);
    export const RIGHT: Sheet = set(Keywords.RIGHT);
    export const FAR_RIGHT: Sheet = set(Keywords.FAR_RIGHT);
    export const RIGHT_SIDE: Sheet = set(Keywords.RIGHT_SIDE);
    export const BEHIND: Sheet = set(Keywords.BEHIND);
    export const LEFTWARDS: Sheet = set(Keywords.LEFTWARDS);
    export const RIGHTWARDS: Sheet = set(Keywords.RIGHTWARDS);
}

export namespace Elevation {
    export const set = (...values: Value[]): Sheet => ({elevation: property(values)});
    export const BELOW: Sheet = set(Keywords.BELOW);
    export const LEVEL: Sheet = set(Keywords.LEVEL);
    export const ABOVE: Sheet = set(Keywords.ABOVE);
    export const HIGHER: Sheet = set(Keywords.HIGHER);
    export const LOWER: Sheet = set(Keywords.LOWER);
}

/* Speak */

export namespace Speak {
    export const set = (...values: Value[]): Sheet => ({speak: property(values)});
    export const SPELL_OUT: Sheet = set(Keywords.SPELL_OUT);
}

export namespace SpeakPunctuation {
    export const set = (...values: Value[]): Sheet => ({speakPunctuation: property(values)});
    export const CODE: Sheet = set(Keywords.CODE);
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace SpeakNumeral {
    export const set = (...values: Value[]): Sheet => ({speakNumeral: property(values)});
    export const DIGITS: Sheet = set(Keywords.DIGITS);
    export const CONTINUOUS: Sheet = set(Keywords.CONTINUOUS);
}

export namespace SpeakHeader {
    export const set = (...values: Value[]): Sheet => ({speakHeader: property(values)});
    export const ONCE: Sheet = set(Keywords.ONCE);
    export const ALWAYS: Sheet = set(Keywords.ALWAYS);
}

/* Voice */

export namespace SpeechRate {
    export const set = (...values: Value[]): Sheet => ({speechRate: property(values)});
    export const X_SLOW: Sheet = set(Keywords.X_SLOW);
    export const SLOW: Sheet = set(Keywords.SLOW);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const FAST: Sheet = set(Keywords.FAST);
    export const X_FAST: Sheet = set(Keywords.X_FAST);
    export const FASTER: Sheet = set(Keywords.FASTER);
    export const SLOWER: Sheet = set(Keywords.SLOWER);
}

export namespace VoiceFamily {
    export const set = (...values: Value[]): Sheet => ({voiceFamily: property(values)});
}

export namespace Pitch {
    export const set = (...values: Value[]): Sheet => ({pitch: property(values)});
    export const X_LOW: Sheet = set(Keywords.X_LOW);
    export const LOW: Sheet = set(Keywords.LOW);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const HIGH: Sheet = set(Keywords.HIGH);
    export const X_HIGH: Sheet = set(Keywords.X_HIGH);
}

export namespace PitchRange {
    export const set = (...values: Value[]): Sheet => ({pitchRange: property(values)});
}

export namespace Stress {
    export const set = (...values: Value[]): Sheet => ({stress: property(values)});
}

export namespace Richness {
    export const set = (...values: Value[]): Sheet => ({richness: property(values)});
}

/* Volume */

export namespace Volume {
    export const set = (...values: Value[]): Sheet => ({volume: property(values)});
    export const SILENT: Sheet = set(Keywords.SILENT);
    export const X_SOFT: Sheet = set(Keywords.X_SOFT);
    export const SOFT: Sheet = set(Keywords.SOFT);
    export const MEDIUM: Sheet = set(Keywords.MEDIUM);
    export const LOUD: Sheet = set(Keywords.LOUD);
    export const X_LOUD: Sheet = set(Keywords.X_LOUD);
}
