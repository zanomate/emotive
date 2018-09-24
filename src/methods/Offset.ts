import { Keyword } from 'constants';
import { method, Param } from 'core';

export function ray(...params: Param[]): string {
    return method('ray', params);
}

export namespace ray {
    export const contain = (...params: Param[]): string => ray(...params, Keyword.CONTAIN);
}

export function path(...params: Param[]): string {
    return method('path', params);
}
