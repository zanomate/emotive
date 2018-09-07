import { concatWithSpaces, property } from '../../utils/factory';
import { AUTO, NONE, SAME } from '../../constants';

const Chains = property('chains');
Chains.NONE = Chains(NONE);
export { Chains };

const Flow = property('flow');
Flow.AUTO = Flow(AUTO);
Flow.SAME = Flow(SAME);
Flow.quoted = (...values) => Flow('\'' + concatWithSpaces(...values) + '\'');
export { Flow };
