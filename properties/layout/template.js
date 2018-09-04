import { concatWithSpaces, property } from 'utils';
import { AUTO, NONE, SAME } from 'constants';

export const chains = property('chains');
chains.NONE = chains(NONE);

export const flow = property('flow');
flow.AUTO = flow(AUTO);
flow.SAME = flow(SAME);
flow.quoted = (...values) => flow('\'' + concatWithSpaces(...values) + '\'');
