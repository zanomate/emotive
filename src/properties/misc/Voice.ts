import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

/* Cue */

export namespace Cue {
    export const set = (...values: Value[]): Sheet => ({cue: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace CueBefore {
    export const set = (...values: Value[]): Sheet => ({cueBefore: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace CueAfter {
    export const set = (...values: Value[]): Sheet => ({cueAfter: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
}

/* Mixing */

export namespace PlayDuring {
    export const set = (...values: Value[]): Sheet => ({playDuring: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const NONE: Sheet = set(Keyword.NONE);
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
    export const LEFT_SIDE: Sheet = set(Keyword.LEFT_SIDE);
    export const FAR_LEFT: Sheet = set(Keyword.FAR_LEFT);
    export const LEFT: Sheet = set(Keyword.LEFT);
    export const CENTER_LEFT: Sheet = set(Keyword.CENTER_LEFT);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const CENTER_RIGHT: Sheet = set(Keyword.CENTER_RIGHT);
    export const RIGHT: Sheet = set(Keyword.RIGHT);
    export const FAR_RIGHT: Sheet = set(Keyword.FAR_RIGHT);
    export const RIGHT_SIDE: Sheet = set(Keyword.RIGHT_SIDE);
    export const BEHIND: Sheet = set(Keyword.BEHIND);
    export const LEFTWARDS: Sheet = set(Keyword.LEFTWARDS);
    export const RIGHTWARDS: Sheet = set(Keyword.RIGHTWARDS);
}

export namespace Elevation {
    export const set = (...values: Value[]): Sheet => ({elevation: property(values)});
    export const BELOW: Sheet = set(Keyword.BELOW);
    export const LEVEL: Sheet = set(Keyword.LEVEL);
    export const ABOVE: Sheet = set(Keyword.ABOVE);
    export const HIGHER: Sheet = set(Keyword.HIGHER);
    export const LOWER: Sheet = set(Keyword.LOWER);
}

/* Speak */

export namespace Speak {
    export const set = (...values: Value[]): Sheet => ({speak: property(values)});
    export const SPELL_OUT: Sheet = set(Keyword.SPELL_OUT);
}

export namespace SpeakPunctuation {
    export const set = (...values: Value[]): Sheet => ({speakPunctuation: property(values)});
    export const CODE: Sheet = set(Keyword.CODE);
    export const NONE: Sheet = set(Keyword.NONE);
}

export namespace SpeakNumeral {
    export const set = (...values: Value[]): Sheet => ({speakNumeral: property(values)});
    export const DIGITS: Sheet = set(Keyword.DIGITS);
    export const CONTINUOUS: Sheet = set(Keyword.CONTINUOUS);
}

export namespace SpeakHeader {
    export const set = (...values: Value[]): Sheet => ({speakHeader: property(values)});
    export const ONCE: Sheet = set(Keyword.ONCE);
    export const ALWAYS: Sheet = set(Keyword.ALWAYS);
}

/* Voice */

export namespace SpeechRate {
    export const set = (...values: Value[]): Sheet => ({speechRate: property(values)});
    export const X_SLOW: Sheet = set(Keyword.X_SLOW);
    export const SLOW: Sheet = set(Keyword.SLOW);
    export const MEDIUM: Sheet = set(Keyword.MEDIUM);
    export const FAST: Sheet = set(Keyword.FAST);
    export const X_FAST: Sheet = set(Keyword.X_FAST);
    export const FASTER: Sheet = set(Keyword.FASTER);
    export const SLOWER: Sheet = set(Keyword.SLOWER);
}

export namespace VoiceFamily {
    export const set = (...values: Value[]): Sheet => ({voiceFamily: property(values)});
}

export namespace Pitch {
    export const set = (...values: Value[]): Sheet => ({pitch: property(values)});
    export const X_LOW: Sheet = set(Keyword.X_LOW);
    export const LOW: Sheet = set(Keyword.LOW);
    export const MEDIUM: Sheet = set(Keyword.MEDIUM);
    export const HIGH: Sheet = set(Keyword.HIGH);
    export const X_HIGH: Sheet = set(Keyword.X_HIGH);
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
    export const SILENT: Sheet = set(Keyword.SILENT);
    export const X_SOFT: Sheet = set(Keyword.X_SOFT);
    export const SOFT: Sheet = set(Keyword.SOFT);
    export const MEDIUM: Sheet = set(Keyword.MEDIUM);
    export const LOUD: Sheet = set(Keyword.LOUD);
    export const X_LOUD: Sheet = set(Keyword.X_LOUD);
}
