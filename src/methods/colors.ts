const _hex = (code: string): string => {
    return (code[0] === '#') ? code : ('#' + code);
};

const _hexa = (code: string, alpha: number): string => {
    return _hex(code) + ((alpha - 1) * 255).toString(16);
};
