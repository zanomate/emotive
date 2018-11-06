function mqSet(name: string, value?: string | number) {
    if (value) {
        return '(' + name + ': ' + value + ')';
    }
    return '(' + name + ')';
}

function mqAnd(...values: (string | number)[]) {
    return '(' + values.join(' and ') + ')';
}

function mqOr(...values: (string | number)[]) {
    return '(' + values.join(', ') + ')';
}

function mqNot(value: string | number) {
    return '(not ' + value + ')';
}

function mqOnly(value: string | number) {
    return '(only ' + value + ')';
}

function mqRange(name: string, min: string | number, max: (string | number)) {
    const minProp = min ? mqSet('min-' + name, min) : undefined;
    const maxProp = max ? mqSet('max-' + name, max) : undefined;

    if (minProp && maxProp) {
        return mqAnd(minProp, maxProp);
    }
    else if (minProp) {
        return minProp;
    }
    else if (maxProp) {
        return maxProp;
    }
    else return mqSet(name);
}
