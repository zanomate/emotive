import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function format(...params: Param[]): string {
    return method('format', params);
}

export function local(...params: Param[]): string {
    return method('local', params);
}

export function url(...params: Param[]): string {
    return method('url', params);
}
