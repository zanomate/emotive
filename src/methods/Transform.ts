import { method } from '../core/Utils';
import { Param } from '../core/Types';


export function matrix(...params: Param[]): string {
    return method('matrix', params);
}

export function matrix3d(...params: Param[]): string {
    return method('matrix3d', params);
}

export function perspective(...params: Param[]): string {
    return method('perspective', params);
}

export function rotate(...params: Param[]): string {
    return method('rotate', params);
}

export function rotate3d(...params: Param[]): string {
    return method('rotate3d', params);
}

export function rotateX(...params: Param[]): string {
    return method('rotateX', params);
}

export function rotateY(...params: Param[]): string {
    return method('rotateY', params);
}

export function rotateZ(...params: Param[]): string {
    return method('rotateZ', params);
}

export function scale(...params: Param[]): string {
    return method('scale', params);
}

export function scale3d(...params: Param[]): string {
    return method('scale3d', params);
}

export function scaleX(...params: Param[]): string {
    return method('scaleX', params);
}

export function scaleY(...params: Param[]): string {
    return method('scaleY', params);
}

export function scaleZ(...params: Param[]): string {
    return method('scaleZ', params);
}

export function skew(...params: Param[]): string {
    return method('skew', params);
}

export function skewX(...params: Param[]): string {
    return method('skewX', params);
}

export function skewY(...params: Param[]): string {
    return method('skewY', params);
}

export function translate(...params: Param[]): string {
    return method('translate', params);
}

export function translate3d(...params: Param[]): string {
    return method('translate3d', params);
}

export function translateX(...params: Param[]): string {
    return method('translateX', params);
}

export function translateY(...params: Param[]): string {
    return method('translateY', params);
}

export function translateZ(...params: Param[]): string {
    return method('translateZ', params);
}
