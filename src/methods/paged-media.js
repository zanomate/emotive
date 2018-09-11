import { method } from '../utils/factory';
import { DOTTED, SOLID, SPACE } from '../constants';

export const targetCounter = method('targetCounter');

export const targetCounters = method('targetCounters');

export const targetText = method('targetText');

export const leader = method('leader');
leader.DOTTED = leader(DOTTED);
leader.SOLID = leader(SOLID);
leader.SPACE = leader(SPACE);
