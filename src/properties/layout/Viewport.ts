import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace ViewportFit {
    export const set = (...values: Value[]): Sheet => ({viewportFit: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const CONTAIN: Sheet = set(Keywords.CONTAIN);
    export const COVER: Sheet = set(Keywords.COVER);
}

export namespace Orientation {
    export const set = (...values: Value[]): Sheet => ({orientation: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const PORTRAIT: Sheet = set(Keywords.PORTRAIT);
    export const LANDSCAPE: Sheet = set(Keywords.LANDSCAPE);
}
