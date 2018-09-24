import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function stylistic(...params: Param[]): string {
    return method('stylistic', params);
}

export function styleset(...params: Param[]): string {
    return method('styleset', params);
}

export function characterVariant(...params: Param[]): string {
    return method('character-variant', params);
}

export function swash(...params: Param[]): string {
    return method('swash', params);
}

export function ornaments(...params: Param[]): string {
    return method('ornaments', params);
}

export function annotation(...params: Param[]): string {
    return method('annotation', params);
}
