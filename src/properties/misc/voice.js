import { property } from '../../utils/factory';
import {
    ABOVE, ALWAYS, AUTO, BEHIND, BELOW, CENTER, CENTER_LEFT, CENTER_RIGHT, CODE,
    CONTINUOUS, DIGITS, FAR_LEFT, FAR_RIGHT, FASTER, HIGH, HIGHER, LEFT,
    LEFT_SIDE, LEFTWARDS, LEVEL, LOUD, LOW, LOWER, MEDIUM, MIX, NONE, ONCE,
    REPEAT, RIGHT, RIGHT_SIDE, RIGHTWARDS, SILENT, SLOW, SLOWER, SOFT,
    SPELL_OUT, X_FAST, X_HIGH, X_LOUD, X_LOW, X_SLOW, X_SOFT
} from '../../constants';

/* Cue */

export const Cue = property('cue');
Cue.NONE = Cue(NONE);

export const CueBefore = property('cueBefore');
CueBefore.NONE = CueBefore(NONE);

export const CueAfter = property('cueAfter');
CueAfter.NONE = CueAfter(NONE);

/* Mixing */

export const PlayDuring = property('playDuring');
PlayDuring.AUTO = PlayDuring(AUTO);
PlayDuring.NONE = PlayDuring(NONE);
PlayDuring.mix = (...values) => PlayDuring(...values, MIX);
PlayDuring.repeat = (...values) => PlayDuring(...values, REPEAT);

/* Pause */

export const Pause = property('pause');

export const PauseBefore = property('pauseBefore');

export const PauseAfter = property('pauseAfter');

/* Spatial */

export const Azimuth = property('azimuth');
Azimuth.LEFT_SIDE = Azimuth(LEFT_SIDE);
Azimuth.FAR_LEFT = Azimuth(FAR_LEFT);
Azimuth.LEFT = Azimuth(LEFT);
Azimuth.CENTER_LEFT = Azimuth(CENTER_LEFT);
Azimuth.CENTER = Azimuth(CENTER);
Azimuth.CENTER_RIGHT = Azimuth(CENTER_RIGHT);
Azimuth.RIGHT = Azimuth(RIGHT);
Azimuth.FAR_RIGHT = Azimuth(FAR_RIGHT);
Azimuth.RIGHT_SIDE = Azimuth(RIGHT_SIDE);
Azimuth.BEHIND = Azimuth(BEHIND);
Azimuth.LEFTWARDS = Azimuth(LEFTWARDS);
Azimuth.RIGHTWARDS = Azimuth(RIGHTWARDS);

export const Elevation = property('elevation');
Elevation.BELOW = Elevation(BELOW);
Elevation.LEVEL = Elevation(LEVEL);
Elevation.ABOVE = Elevation(ABOVE);
Elevation.HIGHER = Elevation(HIGHER);
Elevation.LOWER = Elevation(LOWER);

/* Speak */

export const Speak = property('speak');
Speak.SPELL_OUT = Speak(SPELL_OUT);

export const SpeakPunctuation = property('speakPunctuation');
SpeakPunctuation.CODE = SpeakPunctuation(CODE);
SpeakPunctuation.NONE = SpeakPunctuation(NONE);

export const SpeakNumeral = property('speakNumeral');
SpeakNumeral.DIGITS = SpeakNumeral(DIGITS);
SpeakNumeral.CONTINUOUS = SpeakNumeral(CONTINUOUS);

export const SpeakHeader = property('speakHeader');
SpeakHeader.ONCE = SpeakHeader(ONCE);
SpeakHeader.ALWAYS = SpeakHeader(ALWAYS);

/* Voice */

export const SpeechRate = property('speechRate');
SpeechRate.X_SLOW = SpeechRate(X_SLOW);
SpeechRate.SLOW = SpeechRate(SLOW);
SpeechRate.MEDIUM = SpeechRate(MEDIUM);
SpeechRate.FAST = SpeechRate(FASTER);
SpeechRate.X_FAST = SpeechRate(X_FAST);
SpeechRate.FASTER = SpeechRate(FASTER);
SpeechRate.SLOWER = SpeechRate(SLOWER);

export const VoiceFamily = property('voiceFamily');

export const Pitch = property('voiceFamily');
Pitch.X_LOW = Pitch(X_LOW);
Pitch.LOW = Pitch(LOW);
Pitch.MEDIUM = Pitch(MEDIUM);
Pitch.HIGH = Pitch(HIGH);
Pitch.X_HIGH = Pitch(X_HIGH);

export const PitchRange = property('pitchRange');

export const Stress = property('stress');

export const Richness = property('richness');

/* Volume */

export const Volume = property('volume');
Volume.SILENT = Volume(SILENT);
Volume.X_SOFT = Volume(X_SOFT);
Volume.SOFT = Volume(SOFT);
Volume.MEDIUM = Volume(MEDIUM);
Volume.LOUD = Volume(LOUD);
Volume.X_LOUD = Volume(X_LOUD);
