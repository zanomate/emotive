import { Keyword } from '../constants';
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
    export const cyclic = (...params: Param[]): string => symbols(Keyword.CYCLIC, ...params);
    export const numeric = (...params: Param[]): string => symbols(Keyword.NUMERIC, ...params);
    export const alphabetic = (...params: Param[]): string => symbols(Keyword.ALPHABETIC, ...params);
    export const symbolic = (...params: Param[]): string => symbols(Keyword.SYMBOLIC, ...params);
    export const fixed = (...params: Param[]): string => symbols(Keyword.FIXED, ...params);
}
