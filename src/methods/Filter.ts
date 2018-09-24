import { method, Param } from 'core';

export function blur(...params: Param[]): string {
    return method('blur', params);
}

export function brightness(...params: Param[]): string {
    return method('brightness', params);
}

export function contrast(...params: Param[]): string {
    return method('contrast', params);
}

export function dropShadow(...params: Param[]): string {
    return method('dropShadow', params);
}

export function grayscale(...params: Param[]): string {
    return method('grayscale', params);
}

export function hueRotate(...params: Param[]): string {
    return method('hueRotate', params);
}

export function invert(...params: Param[]): string {
    return method('invert', params);
}

export function opacity(...params: Param[]): string {
    return method('opacity', params);
}

export function saturate(...params: Param[]): string {
    return method('saturate', params);
}

export function sepia(...params: Param[]): string {
    return method('sepia', params);
}
