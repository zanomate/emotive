import { Methods } from '../..';
import { Keywords } from '../../constants';
import { Param, Sheet, Value } from '../../core';
import { property } from '../../core/Utils';

export namespace Clip {
    export const set = (...values: Value[]): Sheet => ({clip: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const rect = (...params: Param[]): Sheet => set(Methods.rect(...params));
}

export namespace ClipPath {
    export const set = (...values: Value[]): Sheet => ({clipPath: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FILL_BOX: Sheet = set(Keywords.FILL_BOX);
    export const STROKE_BOX: Sheet = set(Keywords.STROKE_BOX);
    export const VIEW_BOX: Sheet = set(Keywords.VIEW_BOX);
    export const MARGIN_BOX: Sheet = set(Keywords.MARGIN_BOX);
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const PADDING_BOX: Sheet = set(Keywords.PADDING_BOX);
    export const CONTENT_BOX: Sheet = set(Keywords.CONTENT_BOX);
}

export namespace ClipRule {
    export const set = (...values: Value[]): Sheet => ({clipRule: property(values)});
    export const NONZERO: Sheet = set(Keywords.NONZERO);
    export const EVENODD: Sheet = set(Keywords.EVENODD);
}
