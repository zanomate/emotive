import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace Inset {
    export const set = (...values: Value[]): Sheet => ({inset: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace InsetBlock {
    export const set = (...values: Value[]): Sheet => ({insetBlock: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace InsetBlockStart {
    export const set = (...values: Value[]): Sheet => ({insetBlockStart: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace InsetBlockEnd {
    export const set = (...values: Value[]): Sheet => ({insetBlockEnd: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace InsetInline {
    export const set = (...values: Value[]): Sheet => ({insetInline: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace InsetInlineStart {
    export const set = (...values: Value[]): Sheet => ({insetInlineStart: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}

export namespace InsetInlineEnd {
    export const set = (...values: Value[]): Sheet => ({insetInlineEnd: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
}
