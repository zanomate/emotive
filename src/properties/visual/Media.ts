import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace ImageOrientation {
    export const set = (...values: Value[]): Sheet => ({imageOrientation: property(values)});
}

export namespace ImageResolution {
    export const set = (...values: Value[]): Sheet => ({imageResolution: property(values)});
    export const FRONT_IMAGE: Sheet = set(Keywords.FRONT_IMAGE);
}

export namespace ObjectFit {
    export const set = (...values: Value[]): Sheet => ({objectFit: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FILL: Sheet = set(Keywords.FILL);
    export const CONTAIN: Sheet = set(Keywords.CONTAIN);
    export const COVER: Sheet = set(Keywords.COVER);
    export const SCALE_DOWN: Sheet = set(Keywords.SCALE_DOWN);
}

export namespace ObjectPosition {
    export const set = (...values: Value[]): Sheet => ({objectPosition: property(values)});
}
