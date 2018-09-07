import { method } from '../utils';

export const add = (...values) => `(${values.join(' + ')})`;
export const sub = (...values) => `(${values.join(' - ')})`;
export const mul = (...values) => `(${values.join(' * ')})`;
export const div = (...values) => `(${values.join(' / ')})`;

export const calc = (...values) => 'calc' + add(values);
calc.add = (...values) => 'calc' + add(...values);
calc.sub = (...values) => 'calc' + sub(...values);
calc.mul = (...values) => 'calc' + mul(...values);
calc.div = (...values) => 'calc' + div(...values);

export const fitContent = method('fit-content');

export const minMax = method('min-max');
