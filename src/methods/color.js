import { method } from '../utils/factory';

export const rgb = method('rgb');
export const rgba = method('rgba');
export const hsl = method('hsl');
export const hsla = method('hsla');

export const hex = (code) => (code[0] === '#') ? code : ('#' + code);
export const hexa = (code, alpha) => hex(code) + ((alpha-1) * 255).toString(16);
