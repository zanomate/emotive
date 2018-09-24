import { Method } from '../..';
import { Keyword } from '../../constants';
import { Param, Sheet, Value } from '../../core';
import { property } from '../../core/Utils';

export namespace Clip {
    export const set = (...values: Value[]): Sheet => ({clip: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const rect = (...params: Param[]): Sheet => set(Method.rect(...params));
}

export namespace ClipPath {
    export const set = (...values: Value[]): Sheet => ({clipPath: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FILL_BOX: Sheet = set(Keyword.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keyword.STROKE_BOX);
    export const VIEW_BOX: Sheet = set(Keyword.VIEW_BOX);
    export const MARGIN_BOX: Sheet = set(Keyword.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keyword.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keyword.CONTENT_BOX);
}

export namespace ClipRule {
    export const set = (...values: Value[]): Sheet => ({clipRule: property(values)});
    export const NONZERO: Sheet = set(Keyword.NONZERO);
    export const EVENODD: Sheet = set(Keyword.EVENODD);
}
