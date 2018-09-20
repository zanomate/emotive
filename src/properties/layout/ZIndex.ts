import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace ZIndex {
    export const set = (...values: Value[]): Sheet => ({zIndex: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}
