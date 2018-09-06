import { method } from '../utils';

export const rgb = method('rgb');
export const rgba = method('rgba');
export const hsl = method('hsl');
export const hsla = method('hsla');

export const hex = (code) => '#' + (code[0] === '#') ? code.slice(1) : code;
export const hexa = (code, alpha) => hex(code) + (alpha * 255).toString(16);
