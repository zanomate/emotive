import { property } from '../../../utils';
import { AUTO, CONTENTS, SCROLL_POSITION } from '../../../constants';

export const willChange = property('willChange');
willChange.AUTO = willChange(AUTO);
willChange.SCROLL_POSITION = willChange(SCROLL_POSITION);
willChange.CONTENTS = willChange(CONTENTS);
