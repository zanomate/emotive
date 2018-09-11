import { method } from '../utils/factory';
import { CONTAIN } from '../constants';

export const ray = method('ray');
ray.contain = (...params) => ray(...params, CONTAIN);
