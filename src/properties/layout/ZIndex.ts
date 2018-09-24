import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace ZIndex {
    export const set = (...values: Value[]): Sheet => ({zIndex: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}
