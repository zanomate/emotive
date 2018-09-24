import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace Contain {
    export const set = (...values: Value[]): Sheet => ({contain: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const STRICT: Sheet = set(Keyword.STRICT);
    export const CONTENT: Sheet = set(Keyword.CONTENT);
    export const SIZE: Sheet = set(Keyword.SIZE);
    export const LAYOUT: Sheet = set(Keyword.LAYOUT);
    export const STYLE: Sheet = set(Keyword.STYLE);
    export const PAINT: Sheet = set(Keyword.PAINT);
}

export namespace WillChange {
    export const set = (...values: Value[]): Sheet => ({willChange: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const SCROLL_POSITION: Sheet = set(Keyword.SCROLL_POSITION);
    export const CONTENTS: Sheet = set(Keyword.CONTENTS);
}
