import { Keyword } from '../constants';
import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function targetCounter(...params: Param[]): string {
    return method('target-counter', params);
}

export function targetCounters(...params: Param[]): string {
    return method('target-counters', params);
}

export function targetText(...params: Param[]): string {
    return method('target-text', params);
}

export function leader(...params: Param[]): string {
    return method('leader', params);
}

export namespace leader {
    export const DOTTED = (...params: Param[]): string => leader(Keyword.DOTTED, ...params);
    export const SOLID = (...params: Param[]): string => leader(Keyword.SOLID, ...params);
    export const SPACE = (...params: Param[]): string => leader(Keyword.SPACE, ...params);
}
