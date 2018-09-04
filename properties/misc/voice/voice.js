import { property } from '../../../utils';
import { FASTER, HIGH, LOW, MEDIUM, SLOW, SLOWER, X_FAST, X_HIGH, X_LOW, X_SLOW } from '../../../constants';

export const speechRate = property('speechRate');
speechRate.X_SLOW = speechRate(X_SLOW);
speechRate.SLOW = speechRate(SLOW);
speechRate.MEDIUM = speechRate(MEDIUM);
speechRate.FAST = speechRate(FASTER);
speechRate.X_FAST = speechRate(X_FAST);
speechRate.FASTER = speechRate(FASTER);
speechRate.SLOWER = speechRate(SLOWER);

export const voiceFamily = property('voiceFamily');

export const pitch = property('voiceFamily');
pitch.X_LOW = pitch(X_LOW);
pitch.LOW = pitch(LOW);
pitch.MEDIUM = pitch(MEDIUM);
pitch.HIGH = pitch(HIGH);
pitch.X_HIGH = pitch(X_HIGH);

export const pitchRange = property('pitchRange');

export const stress = property('stress');

export const richness = property('richness');
