import { method } from '../core/Utils';
import { Param } from '../core/Types';

export function attr(...params: Param[]): string {
    return method('attr', params);
}

export function _var(...params: Param[]): string {
    return method('var', params);
}
