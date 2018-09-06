import { method } from '../utils';
import { END, START } from '../constants';

export const cubicBezier = method('cubic-bezier');

export const steps = method('steps');
steps.start = (...params) => steps(...params, START);
steps.end = (...params) => steps(...params, END);

export const frames = method('frames');
