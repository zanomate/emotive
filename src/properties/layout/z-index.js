import { property } from '../../utils/factory';
import { AUTO } from '../../constants';

const ZIndex = property('zIndex');
ZIndex.AUTO = ZIndex(AUTO);
export { ZIndex };
