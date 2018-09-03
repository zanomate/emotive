import { method } from 'utils';

/**
 * @example
 * calc(add(X(10), px(20)))
 * calc(10% + 20px)
 * @example
 * calc(sub(X(50), mul(px(150), 3)))
 * calc(50% - (150px * 3))
 */
export const calc = method('calc');
export const add = (...values) => `(${values.join(' + ')})`;
export const sub = (...values) => `(${values.join(' - ')})`;
export const mul = (...values) => `(${values.join(' * ')})`;
export const div = (...values) => `(${values.join(' / ')})`;

export const fitContent = method('fit-content');
export const minMax = method('min-max');
