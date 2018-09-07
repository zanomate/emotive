import { property } from '../../utils/factory';
import { NONE } from '../../constants';

const CounterSet = property('counterSet');
CounterSet.NONE = CounterSet(NONE);
export { CounterSet };

const CounterReset = property('counterReset');
CounterReset.NONE = CounterReset(NONE);
export { CounterReset };

const CounterIncrement = property('counterIncrement');
CounterIncrement.NONE = CounterIncrement(NONE);
export { CounterIncrement };
