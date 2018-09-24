import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace ImageOrientation {
    export const set = (...values: Value[]): Sheet => ({imageOrientation: property(values)});
}

export namespace ImageResolution {
    export const set = (...values: Value[]): Sheet => ({imageResolution: property(values)});
    export const FRONT_IMAGE: Sheet = set(Keyword.FRONT_IMAGE);
}

export namespace ObjectFit {
    export const set = (...values: Value[]): Sheet => ({objectFit: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FILL: Sheet = set(Keyword.FILL);
    export const CONTAIN: Sheet = set(Keyword.CONTAIN);
    export const COVER: Sheet = set(Keyword.COVER);
    export const SCALE_DOWN: Sheet = set(Keyword.SCALE_DOWN);
}

export namespace ObjectPosition {
    export const set = (...values: Value[]): Sheet => ({objectPosition: property(values)});
}
