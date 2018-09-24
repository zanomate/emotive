import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace ZIndex {
    export const set = (...values: Value[]): Sheet => ({zIndex: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}
