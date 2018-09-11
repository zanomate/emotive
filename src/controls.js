export const style = (...styles) => Object.assign({}, ...styles);

export const If = (condition, styleOK, styleKO) =>
    (condition) ? styleOK : (styleKO ? styleKO : {});
