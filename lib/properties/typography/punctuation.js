import { property } from 'utils';
import { ALLOW_END, AUTO, FIRST, FORCE_END, LAST, MANUAL, NONE } from 'constants';

export const hangingPunctuation = property('hangingPunctuation');
hangingPunctuation.NONE = hangingPunctuation(NONE);
hangingPunctuation.FIRST = hangingPunctuation(FIRST);
hangingPunctuation.FORCE_END = hangingPunctuation(FORCE_END);
hangingPunctuation.ALLOW_END = hangingPunctuation(ALLOW_END);
hangingPunctuation.LAST = hangingPunctuation(LAST);

export const hyphens = property('hyphens');
hyphens.NONE = hyphens(NONE);
hyphens.MANUAL = hyphens(MANUAL);
hyphens.AUTO = hyphens(AUTO);

export const tabSize = property('tabSize');
