import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Inset {
    export const set = (...values: Value[]): Sheet => ({inset: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InsetBlock {
    export const set = (...values: Value[]): Sheet => ({insetBlock: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InsetBlockStart {
    export const set = (...values: Value[]): Sheet => ({insetBlockStart: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InsetBlockEnd {
    export const set = (...values: Value[]): Sheet => ({insetBlockEnd: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InsetInline {
    export const set = (...values: Value[]): Sheet => ({insetInline: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InsetInlineStart {
    export const set = (...values: Value[]): Sheet => ({insetInlineStart: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InsetInlineEnd {
    export const set = (...values: Value[]): Sheet => ({insetInlineEnd: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}
