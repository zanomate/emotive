import { Keywords } from '../constants';
import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function counter(...params: Param[]): string {
    return method('counter', params);
}

export function counters(...params: Param[]): string {
    return method('counters', params);
}

export function symbols(...params: Param[]): string {
    return method('symbols', params);
}

export namespace symbols {
    export const cyclic = (...params: Param[]): string => symbols(Keywords.CYCLIC, ...params);
    export const numeric = (...params: Param[]): string => symbols(Keywords.NUMERIC, ...params);
    export const alphabetic = (...params: Param[]): string => symbols(Keywords.ALPHABETIC, ...params);
    export const symbolic = (...params: Param[]): string => symbols(Keywords.SYMBOLIC, ...params);
    export const fixed = (...params: Param[]): string => symbols(Keywords.FIXED, ...params);
}
