import { method } from '../utils/factory';
import { ALPHABETIC, CYCLIC, FIXED, NUMERIC, SYMBOLIC } from '../constants';

export const counter = method('counter');

export const counters = method('counters');

export const symbols = method('symbols');
symbols.cyclic = (...params) => symbols(CYCLIC, ...params);
symbols.numeric = (...params) => symbols(NUMERIC, ...params);
symbols.alphabetic = (...params) => symbols(ALPHABETIC, ...params);
symbols.symbolic = (...params) => symbols(SYMBOLIC, ...params);
symbols.fixed = (...params) => symbols(FIXED, ...params);
