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

export const concatWithSpaces = (values) => values.join(' ');

export const concatWithCommas = (values) => values.join(', ');

export const measure = (unit) => (
    (...values) => {
        return concatWithSpaces(values
            .filter(value => isValid(value))
            .map(value => value + (value ? unit : '')))
    }
);

export const property = (name) => (
    (...args) => {
        const value = concatWithSpaces(args
            .filter(arg => isValid(arg))
            .map(arg => {
                if (Array.isArray(arg)) {
                    return concatWithCommas(arg.map(subArg => {
                        if (Array.isArray(subArg)) {
                            return concatWithSpaces(subArg.filter(subSubArg => {
                                return !Array.isArray(subSubArg);
                            }));
                        }
                        return subArg;
                    }));
                }
                return arg;
            }));
        return {[name]: value};
    }
);

export const method = (name) => (
    (...args) => {
        const params = concatWithCommas(args
            .filter(arg => isValid(arg))
            .map(arg => {
                if (Array.isArray(arg)) {
                    return concatWithSpaces(arg.filter(subArg => {
                        return !Array.isArray(subArg);
                    }));
                }
                return arg;
            }));
        return '(' + params + ')';
    }
);
