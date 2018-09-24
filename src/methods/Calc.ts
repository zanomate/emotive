import { method, Param } from 'core';

export function add(...params: Param[]): string {
    return '(' + params.join(' + ') + ')';
}

export function sub(...params: Param[]): string {
    return '(' + params.join(' - ') + ')';
}

export function mul(...params: Param[]): string {
    return '(' + params.join(' * ') + ')';
}

export function div(...params: Param[]): string {
    return '(' + params.join(' / ') + ')';
}

export function calc(...params: Param[]): string {
    return 'calc(' + addParams(...params) + ')';
}

export function fitContent(...params: Param[]): string {
    return method('fit-content', params);
}

export function minmax(...params: Param[]): string {
    return method('minmax', params);
}

/* utils */

function addParams(...params: Param[]): string {
    return params.map(value => {
        if (Array.isArray(value)) {
            return '(' + mulParams(...value) + ')';
        }
        return value;
    }).join(' + ');
}

function mulParams(...params: Param[]): string {
    return params.map(value => {
        if (Array.isArray(value)) {
            return '(' + addParams(...value) + ')';
        }
        return value;
    }).join(' * ');
}
