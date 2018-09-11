import { method } from '../utils/factory';

export const add = (...params) => `(${params.join(' + ')})`;
export const sub = (...params) => `(${params.join(' - ')})`;
export const mul = (...params) => `(${params.join(' * ')})`;
export const div = (...params) => `(${params.join(' / ')})`;

export const addParams = (...params) => params
    .map(value => {
        if(Array.isArray(value)) {
            return '(' + mulParams(...value) + ')';
        }
        return value;
    })
    .join(' + ');

export const mulParams = (...params) => params
    .map(value => {
        if(Array.isArray(value)) {
            return '(' + addParams(...value) + ')';
        }
        return value;
    })
    .join(' * ');

export const calc = (...params) => 'calc(' + addParams(...params) + ')';

export const fitContent = method('fit-content');

export const minmax = method('minmax');
