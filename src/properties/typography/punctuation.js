import { property } from '../../utils';
import {
    ALLOW_END, AUTO, FIRST, FORCE_END, LAST, MANUAL, NONE
} from '../../constants';

const HangingPunctuation = property('hangingPunctuation');
HangingPunctuation.NONE = HangingPunctuation(NONE);
HangingPunctuation.FIRST = HangingPunctuation(FIRST);
HangingPunctuation.FORCE_END = HangingPunctuation(FORCE_END);
HangingPunctuation.ALLOW_END = HangingPunctuation(ALLOW_END);
HangingPunctuation.LAST = HangingPunctuation(LAST);
export { HangingPunctuation };

const Hyphens = property('hyphens');
Hyphens.NONE = Hyphens(NONE);
Hyphens.MANUAL = Hyphens(MANUAL);
Hyphens.AUTO = Hyphens(AUTO);
export { Hyphens };

const TabSize = property('tabSize');
export { TabSize };
