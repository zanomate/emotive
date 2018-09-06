import { property } from '../../utils';
import { COLLAPSE, HIDDEN, VISIBLE } from '../../constants';

const Visibility = property('visibility');
Visibility.VISIBLE = Visibility(VISIBLE);
Visibility.HIDDEN = Visibility(HIDDEN);
Visibility.COLLAPSE = Visibility(COLLAPSE);
export { Visibility };
