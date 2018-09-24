import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function crossFade(...params: Param[]): string {
    return method('cross-fade', params);
}

export function element(...params: Param[]): string {
    return method('element', params);
}

export function image(...params: Param[]): string {
    return method('image', params);
}

export function imageSet(...params: Param[]): string {
    return method('image-set', params);
}
