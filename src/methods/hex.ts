const _hex = (code: string): string => {
    return (code[0] === '#') ? code : ('#' + code);
};

const _hexa = (code: string, alpha: number): string => {
    const hex = _hex(code);
    let transparency =(alpha * 255).toString(16);
    let idx;
    if((idx = transparency.indexOf('.')) > 0) {
        transparency = transparency.substring(0, idx);
    }
    if(transparency.length == 1) {
        transparency = '0' + transparency;
    }
    return hex + transparency;
};
