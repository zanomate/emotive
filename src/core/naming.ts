export function UPPER_CASE(source: string) {
    let words = splitWords(source);
    if (!words.length) {
        throw new Error(`UPPER_CASE(${source})`);
    }
    return words.map(word => word.toUpperCase()).join('_');
}

export function UpperCamelCase(source: string) {
    let words = splitWords(source);
    if (!words.length) {
        throw new Error(`UpperCamelCase(${source})`);
    }
    return words.map(word => capitalize(word)).join('');
}

export function lowerCamelCase(source: string) {
    let words = splitWords(source);
    if (!words.length) {
        throw new Error(`lowerCamelCase(${source})`);
    }
    return [words[0], ...words.splice(1).map(word => capitalize(word))].join('');
}

// Utils

function splitWords(value: string): string[] {
    return value
        .split(/[\-\s]/)
        .map(word => trimSpecialChars(word))
        .filter(word => word != '');
}

function trimSpecialChars(value: string): string {
    return value.replace(/[^a-zA-Z0-9]/, '');
}

function capitalize(value: string): string {
    if (!value.length)
        return value;
    return value[0].toUpperCase() + value.substr(1);
}
