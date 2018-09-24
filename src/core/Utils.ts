import { Param, Value } from './Types';

export const isValid = (value: any) => {
    if (typeof value === 'boolean') {
        return false;
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return true;
};

export const concatWithSpaces = (values: Param[]): string => values.join(' ');

export const concatWithCommas = (values: Param[]): string => values.join(', ');

export const measure = (unit: string, nums: number[]): string =>
    concatWithSpaces(nums.map(num => num + (num ? unit : '')));

export const method = (name: string, params: Param[]): string => {
    return '(' + concatWithCommas(params
        .filter(param => isValid(param))
        .map(param => {
            if (Array.isArray(param)) {
                return concatWithSpaces(param.filter(subParam => {
                    return !Array.isArray(subParam);
                }));
            }
            return param;
        })) + ')';
};

export const property = (values: Value[]): string => {
    return concatWithSpaces(values
        .filter(value => isValid(value))
        .map(value => {
            if (Array.isArray(value)) {
                return concatWithCommas(value.map(subValue => {
                    if (Array.isArray(subValue)) {
                        return concatWithSpaces(subValue.filter(subSubValue => {
                            return !Array.isArray(subSubValue);
                        }));
                    }
                    return subValue;
                }));
            }
            return value;
        }));
};
