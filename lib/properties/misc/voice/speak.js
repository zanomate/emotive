import { property } from 'utils';
import { ALWAYS, CODE, CONTINUOUS, DIGITS, NONE, ONCE, SPELL_OUT } from 'constants';

export const speak = property('speak');
speak.SPELL_OUT = speak(SPELL_OUT);

export const speakPunctuation = property('speakPunctuation');
speakPunctuation.CODE = speakPunctuation(CODE);
speakPunctuation.NONE = speakPunctuation(NONE);

export const speakNumeral = property('speakNumeral');
speakNumeral.DIGITS = speakNumeral(DIGITS);
speakNumeral.CONTINUOUS = speakNumeral(CONTINUOUS);

export const speakHeader = property('speakHeader');
speakHeader.ONCE = speakHeader(ONCE);
speakHeader.ALWAYS = speakHeader(ALWAYS);
