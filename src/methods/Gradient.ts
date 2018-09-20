import { Keywords } from '../constants';
import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function linearGradient(...params: Param[]): string {
    return method('linear-gradient', params);
}

export namespace linearGradient {
    export const toTop = (...params: Param[]): string => linearGradient(Keywords.TO_TOP, ...params);
    export const toLeft = (...params: Param[]): string => linearGradient(Keywords.TO_LEFT, ...params);
    export const toRight = (...params: Param[]): string => linearGradient(Keywords.TO_RIGHT, ...params);
    export const toBottom = (...params: Param[]): string => linearGradient(Keywords.TO_BOTTOM, ...params);
    export const toTopLeft = (...params: Param[]): string => linearGradient(Keywords.TO_TOP_LEFT, ...params);
    export const toTopRight = (...params: Param[]): string => linearGradient(Keywords.TO_TOP_RIGHT, ...params);
    export const toBottomLeft = (...params: Param[]): string => linearGradient(Keywords.TO_BOTTOM_LEFT, ...params);
    export const toBottomRight = (...params: Param[]): string => linearGradient(Keywords.TO_BOTTOM_RIGHT, ...params);
}

export function repeatingLinearGradient(...params: Param[]): string {
    return method('repeating-linear-gradient', params);
}

export namespace repeatingLinearGradient {
    export const toTop = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_TOP, ...params);
    export const toLeft = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_LEFT, ...params);
    export const toRight = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_RIGHT, ...params);
    export const toBottom = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_BOTTOM, ...params);
    export const toTopLeft = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_TOP_LEFT, ...params);
    export const toTopRight = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_TOP_RIGHT, ...params);
    export const toBottomLeft = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_BOTTOM_LEFT, ...params);
    export const toBottomRight = (...params: Param[]): string => repeatingLinearGradient(Keywords.TO_BOTTOM_RIGHT, ...params);
}

export function radialGradient(...params: Param[]): string {
    return method('radial-gradient', params);
}

export namespace radialGradient {
    export const closestSide = (...params: Param[]): string => radialGradient(Keywords.CLOSEST_SIDE, ...params);
    export const closestCorner = (...params: Param[]): string => radialGradient(Keywords.CLOSEST_CORNER, ...params);
    export const farthestSide = (...params: Param[]): string => radialGradient(Keywords.FARTHEST_SIDE, ...params);
    export const farthestCorner = (...params: Param[]): string => radialGradient(Keywords.FARTHEST_CORNER, ...params);
    export const circle = (...params: Param[]): string => radialGradient(Keywords.CIRCLE, ...params);
    export const ellipse = (...params: Param[]): string => radialGradient(Keywords.ELLIPSE, ...params);
}

export function repeatingRadialGradient(...params: Param[]): string {
    return method('repeating-radial-gradient', params);
}

export namespace repeatingRadialGradient {
    export const closestSide = (...params: Param[]): string => repeatingRadialGradient(Keywords.CLOSEST_SIDE, ...params);
    export const closestCorner = (...params: Param[]): string => repeatingRadialGradient(Keywords.CLOSEST_CORNER, ...params);
    export const farthestSide = (...params: Param[]): string => repeatingRadialGradient(Keywords.FARTHEST_SIDE, ...params);
    export const farthestCorner = (...params: Param[]): string => repeatingRadialGradient(Keywords.FARTHEST_CORNER, ...params);
    export const circle = (...params: Param[]): string => repeatingRadialGradient(Keywords.CIRCLE, ...params);
    export const ellipse = (...params: Param[]): string => repeatingRadialGradient(Keywords.ELLIPSE, ...params);
}
