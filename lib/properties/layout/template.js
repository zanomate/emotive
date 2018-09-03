import { concatWithSpaces, property } from 'utils/index';
import { AUTO, NONE, SAME } from 'constants/index';

export const chains = property('chains');
chains.NONE = chains(NONE);

export const flow = property('flow');
flow.AUTO = flow(AUTO);
flow.SAME = flow(SAME);
flow.quoted = (...values) => flow('\'' + concatWithSpaces(...values) + '\'');
