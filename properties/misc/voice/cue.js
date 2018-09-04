import { property } from 'utils';
import { NONE } from 'constants';

export const cue = property('cue');
cue.NONE = cue(NONE);

export const cueBefore = property('cueBefore');
cueBefore.NONE = cueBefore(NONE);

export const cueAfter = property('cueAfter');
cueAfter.NONE = cueAfter(NONE);
