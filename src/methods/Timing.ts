import { Param } from '../core/Types';
import { method } from '../core/Utils';

export function cubicBezier(...params: Param[]): string {
    return method('cubic-bezier', params);
}

export const steps = (...params: Param[]): string => method('steps', params);

export function frames(...params: Param[]): string {
    return method('frames', params);
}
