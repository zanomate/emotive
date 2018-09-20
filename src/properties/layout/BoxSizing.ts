import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace BoxSizing {
    export const set = (...values: Value[]): Sheet => ({boxSizing: property(values)});
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
}
