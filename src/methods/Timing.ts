import { method, Param } from 'core';

export function cubicBezier(...params: Param[]): string {
    return method('cubic-bezier', params);
}

export const steps = (...params: Param[]): string => method('steps', params);

export function frames(...params: Param[]): string {
    return method('frames', params);
}
