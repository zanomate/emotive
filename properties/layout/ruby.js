import { property } from '../../utils';
import {
    AUTO, CENTER, COLLAPSE, INTER_CHARACTER, LEFT, OVER, RIGHT, SEPARATE, SPACE_AROUND, SPACE_BETWEEN, START, UNDER
} from '../../constants';

export const rubyPosition = property('rubyPosition');
rubyPosition.OVER = rubyPosition(OVER);
rubyPosition.UNDER = rubyPosition(UNDER);
rubyPosition.INTER_CHARACTER = rubyPosition(INTER_CHARACTER);
rubyPosition.RIGHT = rubyPosition(RIGHT);
rubyPosition.LEFT = rubyPosition(LEFT);

export const rubyMerge = property('rubyMerge');
rubyMerge.AUTO = rubyMerge(AUTO);
rubyMerge.SEPARATE = rubyMerge(SEPARATE);
rubyMerge.COLLAPSE = rubyMerge(COLLAPSE);

export const rubyAlign = property('rubyAlign');
rubyAlign.AUTO = rubyAlign(START);
rubyAlign.CENTER = rubyAlign(CENTER);
rubyAlign.SPACE_BETWEEN = rubyAlign(SPACE_BETWEEN);
rubyAlign.SPACE_AROUND = rubyAlign(SPACE_AROUND);
