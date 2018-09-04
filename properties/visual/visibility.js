import { property } from '../../utils';
import { COLLAPSE, HIDDEN, VISIBLE } from '../../constants';

export const visibility = property('visibility');
visibility.VISIBLE = visibility(VISIBLE);
visibility.HIDDEN = visibility(HIDDEN);
visibility.COLLAPSE = visibility(COLLAPSE);
