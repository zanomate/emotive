import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function rgb(...values: Param[]): string {
    return method('rgb', values);
}

export function rgba(...values: Param[]): string {
    return method('rgba', values);
}

export function hsl(...values: Param[]): string {
    return method('hsl', values);
}

export function hsla(...values: Param[]): string {
    return method('hsla', values);
}

export function hex(code: string): string {
    return (code[0] === '#') ? code : ('#' + code);
}

export function hexa(code: string, alpha: number): string {
    return hex(code) + ((alpha - 1) * 255).toString(16);
}
