import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Visibility {
    export const set = (...values: Value[]): Sheet => ({visibility: property(values)});
    export const VISIBLE: Sheet = set(Keywords.VISIBLE);
    export const HIDDEN: Sheet = set(Keywords.HIDDEN);
    export const COLLAPSE: Sheet = set(Keywords.COLLAPSE);
}
