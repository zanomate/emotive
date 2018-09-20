import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Chains {
    export const set = (...values: Value[]): Sheet => ({chains: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace Flow {
    export const set = (...values: Value[]): Sheet => ({flow: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const SAME: Sheet = set(Keywords.SAME);
}
