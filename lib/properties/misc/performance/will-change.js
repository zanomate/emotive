import { property } from 'utils/index';
import { AUTO, CONTENTS, SCROLL_POSITION } from 'constants/index';

export const willChange = property('willChange');
willChange.AUTO = willChange(AUTO);
willChange.SCROLL_POSITION = willChange(SCROLL_POSITION);
willChange.CONTENTS = willChange(CONTENTS);
