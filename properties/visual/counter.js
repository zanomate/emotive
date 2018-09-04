import { property } from '../../utils';
import { NONE } from '../../constants';

export const counterSet = property('counterSet');
counterSet.NONE = counterSet(NONE);

export const counterReset = property('counterReset');
counterReset.NONE = counterReset(NONE);

export const counterIncrement = property('counterIncrement');
counterIncrement.NONE = counterIncrement(NONE);
