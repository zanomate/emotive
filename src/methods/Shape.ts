import { Keyword } from '../constants';
import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function rect(...params: Param[]): string {
    return method('rect', params);
}

export function inset(...params: Param[]): string {
    return method('inset', params);
}

export function circle(...params: Param[]): string {
    return method('circle', params);
}

export namespace circle {
    export const closestSide = (...params: Param[]): string => circle(Keyword.CLOSEST_SIDE, ...params);
    export const farthestSide = (...params: Param[]): string => circle(Keyword.FARTHEST_SIDE, ...params);
}

export function ellipse(...params: Param[]): string {
    return method('ellipse', params);
}

export namespace ellipse {
    export const closestSide = (...params: Param[]): string => ellipse(Keyword.CLOSEST_SIDE, ...params);
    export const farthestSide = (...params: Param[]): string => ellipse(Keyword.FARTHEST_SIDE, ...params);
}

export function polygon(...params: Param[]): string {
    return method('polygon', params);
}

export namespace polygon {
    export const nonzero = (...params: Param[]): string => polygon(Keyword.NONZERO, ...params);
    export const evenodd = (...params: Param[]): string => polygon(Keyword.EVENODD, ...params);
}
