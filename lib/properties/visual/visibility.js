import { property } from 'utils/index';
import { COLLAPSE, HIDDEN, VISIBLE } from 'constants/index';

export const visibility = property('visibility');
visibility.VISIBLE = visibility(VISIBLE);
visibility.HIDDEN = visibility(HIDDEN);
visibility.COLLAPSE = visibility(COLLAPSE);
