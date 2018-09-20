import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Contain {
    export const set = (...values: Value[]): Sheet => ({contain: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const STRICT: Sheet = set(Keywords.STRICT);
    export const CONTENT: Sheet = set(Keywords.CONTENT);
    export const SIZE: Sheet = set(Keywords.SIZE);
    export const LAYOUT: Sheet = set(Keywords.LAYOUT);
    export const STYLE: Sheet = set(Keywords.STYLE);
    export const PAINT: Sheet = set(Keywords.PAINT);
}

export namespace WillChange {
    export const set = (...values: Value[]): Sheet => ({willChange: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const SCROLL_POSITION: Sheet = set(Keywords.SCROLL_POSITION);
    export const CONTENTS: Sheet = set(Keywords.CONTENTS);
}
