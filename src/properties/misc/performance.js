import { property } from '../../utils/factory';
import {
    CONTENT, LAYOUT, NONE, PAINT, SIZE, STRICT, STYLE
} from '../../constants';
import { AUTO, CONTENTS, SCROLL_POSITION } from '../../constants';

const Contain = property('contain');
Contain.NONE = Contain(NONE);
Contain.STRICT = Contain(STRICT);
Contain.CONTENT = Contain(CONTENT);
Contain.SIZE = Contain(SIZE);
Contain.LAYOUT = Contain(LAYOUT);
Contain.STYLE = Contain(STYLE);
Contain.PAINT = Contain(PAINT);
export { Contain };

const WillChange = property('willChange');
WillChange.AUTO = WillChange(AUTO);
WillChange.SCROLL_POSITION = WillChange(SCROLL_POSITION);
WillChange.CONTENTS = WillChange(CONTENTS);
export { WillChange };
