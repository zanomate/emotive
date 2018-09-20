import { Methods, Param, property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Size {
    export const set = (...values: Value[]): Sheet => ({size: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const PORTRAIT: Sheet = set(Keywords.PORTRAIT);
    export const LANDSCAPE: Sheet = set(Keywords.LANDSCAPE);
}

export namespace BlockSize {
    export const set = (...values: Value[]): Sheet => ({blockSize: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace InlineSize {
    export const set = (...values: Value[]): Sheet => ({inlineSize: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
}

export namespace MinBlockSize {
    export const set = (...values: Value[]): Sheet => ({minBlockSize: property(values)});
}

export namespace MinInlineSize {
    export const set = (...values: Value[]): Sheet => ({minInlineSize: property(values)});
}

export namespace MaxBlockSize {
    export const set = (...values: Value[]): Sheet => ({maxBlockSize: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace MaxInlineSize {
    export const set = (...values: Value[]): Sheet => ({maxInlineSize: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
}

export namespace Resize {
    export const set = (...values: Value[]): Sheet => ({resize: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const BOTH: Sheet = set(Keywords.BOTH);
    export const HORIZONTAL: Sheet = set(Keywords.HORIZONTAL);
    export const VERTICAL: Sheet = set(Keywords.VERTICAL);
}

/* Width */

export namespace Width {
    export const set = (...values: Value[]): Sheet => ({width: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Methods.fitContent(...params));
}

export namespace MinWidth {
    export const set = (...values: Value[]): Sheet => ({minWidth: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Methods.fitContent(...params));
}

export namespace MaxWidth {
    export const set = (...values: Value[]): Sheet => ({maxWidth: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Methods.fitContent(...params));
}

/* Height */

export namespace Height {
    export const set = (...values: Value[]): Sheet => ({height: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Methods.fitContent(...params));
}

export namespace MinHeight {
    export const set = (...values: Value[]): Sheet => ({minHeight: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Methods.fitContent(...params));
}

export namespace MaxHeight {
    export const set = (...values: Value[]): Sheet => ({maxHeight: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const MIN_CONTENT: Sheet = set(Keywords.MIN_CONTENT);
    export const MAX_CONTENT: Sheet = set(Keywords.MAX_CONTENT);
    export const fitContent = (...params: Param[]) => set(Methods.fitContent(...params));
}
