import { property } from 'utils';
import { AUTO, MIX, NONE, REPEAT } from 'constants';

export const playDuring = property('playDuring');
playDuring.AUTO = playDuring(AUTO);
playDuring.NONE = playDuring(NONE);
playDuring.mix = (...values) => playDuring(...values, MIX);
playDuring.repeat = (...values) => playDuring(...values, REPEAT);
