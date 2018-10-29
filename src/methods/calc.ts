import { Param } from 'core/core';

const _addParams = (...params: Param[]): string => {
    return params.map(value => {
        if (Array.isArray(value)) {
            return '(' + _mulParams(...value) + ')';
        }
        return value;
    }).join(' + ');
};

const _mulParams = (...params: Param[]): string => {
    return params.map(value => {
        if (Array.isArray(value)) {
            return '(' + _addParams(...value) + ')';
        }
        return value;
    }).join(' * ');
};

const _calc = (...params: Param[]): string => {
    return 'calc(' + _addParams(...params) + ')';
};
