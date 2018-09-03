/**
 * Says if the value could be used inside a CSS property of method.
 * @param value
 * @returns {boolean}
 */
export const isValid = (value) => {
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

/**
 * Concat values with a space as separator.
 * @param values
 * @returns {string}
 */
export const concatWithSpaces = (values) => values.join(' ');

/**
 * Concat values with a comma as separator.
 * @param values
 * @returns {string}
 */
export const concatWithCommas = (values) => values.join(', ');

/**
 * Create a method that append the specified unit to values passed to it.
 * NOTE: 0 value is always printed without any unit.
 * NOTE: multiple values are concatenated with a space between them.
 * @param unit
 * @returns {function}
 */
export const measure = (unit) => (
    (...values) => concatWithSpaces(values
        .filter(value => isValid(value))
        .map(value => value + (value ? unit : '')))
);

/**
 * Manages property arguments, including arrays and sub-arrays,
 * generating a single string.
 * @param args
 * @returns {string}
 */
export const args = (...args) => concatWithSpaces(args
    .filter(arg => isValid(arg))
    .map(arg => {
        if (Array.isArray(arg)) {
            return concatWithCommas(arg.map(subArg => {
                if (Array.isArray(subArg)) {
                    return concatWithSpaces(subArg.filter(subSubArg => {
                        return !Array.isArray(subSubArg);
                    }))
                }
                return subArg;
            }))
        }
        return arg;
    })
);

/**
 * Create method to a assign the value of a specified property.
 * @param name
 * @param values
 * @returns {Object} the style object containing the single valorized property.
 */
export const property = (name, ...values) => (
    {[name]: args(...values)}
);

/**
 * Manages method parameters, including arrays,
 * generating a single string.
 * @param params
 * @returns {string}
 */
export const params = (...params) => concatWithCommas(params
    .filter(param => isValid(param))
    .map(param => {
        if (Array.isArray(param)) {
            return concatWithSpaces(param.filter(subParam => {
                return !Array.isArray(subParam);
            }))
        }
        return param;
    })
);

/**
 * Wraps parameters with method name and round brackets.
 * @param name
 * @returns {function}
 */
export const method = (name) => (
    (...values) => name + '(' + params(values) + ')'
);
