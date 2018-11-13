export type Param = number | string | Array<any>;
export type Sheet = { [propertyName: string]: string };

const concatWithSpaces = (values: Param[]): string => values.join(' ');

const concatWithCommas = (values: Param[]): string => values.join(', ');

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

const buildDatatype = (unit: string, nums: number[]): string =>
    nums.map((num) => num + (num ? unit : '')).join(' ');

const buildMethod = (name: string, params: Param[]): string => {
    return name + '(' + concatWithCommas(params
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
