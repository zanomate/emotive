import { Param } from 'core/types';
import { concatWithCommas, concatWithSpaces } from 'core/utils';

const buildDatatype = (unit: string, nums: number[]): string =>
    nums.map((num) => num + (num ? unit : '')).join(' ');

const buildMethod = (name: string, params: Param[]): string => {
    return '(' + concatWithCommas(params
        .map(param => {
            if (Array.isArray(param)) {
                return concatWithSpaces(param.filter(subParam => {
                    return !Array.isArray(subParam);
                }));
            }
            return param;
        })) + ')';
};

const buildProperty = (values: Param[]): string => {
    return concatWithSpaces(values
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
