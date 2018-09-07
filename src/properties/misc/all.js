import { property } from '../../utils/factory';
import { REVERT } from '../../constants';

const All = property('all');
All.REVERT = All(REVERT);
export { All };
