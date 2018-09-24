import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace BoxSizing {
    export const set = (...values: Value[]): Sheet => ({boxSizing: property(values)});
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
}
