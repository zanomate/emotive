import { property } from '../../utils/factory';
import { NONE } from '../../constants';

const BoxShadow = property('boxShadow');
BoxShadow.NONE = BoxShadow(NONE);
export { BoxShadow };
