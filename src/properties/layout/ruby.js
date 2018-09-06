import { property } from '../../utils';
import {
    AUTO, CENTER, COLLAPSE, INTER_CHARACTER, LEFT, OVER, RIGHT, SEPARATE,
    SPACE_AROUND, SPACE_BETWEEN, START, UNDER
} from '../../constants';

const RubyPosition = property('rubyPosition');
RubyPosition.OVER = RubyPosition(OVER);
RubyPosition.UNDER = RubyPosition(UNDER);
RubyPosition.INTER_CHARACTER = RubyPosition(INTER_CHARACTER);
RubyPosition.RIGHT = RubyPosition(RIGHT);
RubyPosition.LEFT = RubyPosition(LEFT);
export { RubyPosition };

const RubyMerge = property('rubyMerge');
RubyMerge.AUTO = RubyMerge(AUTO);
RubyMerge.SEPARATE = RubyMerge(SEPARATE);
RubyMerge.COLLAPSE = RubyMerge(COLLAPSE);
export { RubyMerge };

const RubyAlign = property('rubyAlign');
RubyAlign.AUTO = RubyAlign(START);
RubyAlign.CENTER = RubyAlign(CENTER);
RubyAlign.SPACE_BETWEEN = RubyAlign(SPACE_BETWEEN);
RubyAlign.SPACE_AROUND = RubyAlign(SPACE_AROUND);
export { RubyAlign };
