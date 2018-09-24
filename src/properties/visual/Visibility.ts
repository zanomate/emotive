import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Visibility {
    export const set = (...values: Value[]): Sheet => ({visibility: property(values)});
    export const VISIBLE: Sheet = set(Keyword.VISIBLE);
    export const HIDDEN: Sheet = set(Keyword.HIDDEN);
    export const COLLAPSE: Sheet = set(Keyword.COLLAPSE);
}
