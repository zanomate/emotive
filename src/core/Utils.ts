import { Param } from 'core/types';

export const concatWithSpaces = (values: Param[]): string => values.join(' ');

export const concatWithCommas = (values: Param[]): string => values.join(', ');

export function addParams(...params: Param[]): string {
    return params.map(value => {
        if (Array.isArray(value)) {
            return '(' + mulParams(...value) + ')';
        }
        return value;
    }).join(' + ');
}

export function mulParams(...params: Param[]): string {
    return params.map(value => {
        if (Array.isArray(value)) {
            return '(' + addParams(...value) + ')';
        }
        return value;
    }).join(' * ');
}
