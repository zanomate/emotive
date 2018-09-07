import { method } from '../utils/factory';
import { CLOSEST_SIDE, EVENODD, FARTHEST_SIDE, NONZERO } from '../constants';

export const rect = method('rect');

export const inset = method('inset');

export const circle = method('circle');
circle.closestSide = (...params) => circle(CLOSEST_SIDE, ...params);
circle.farthestSide = (...params) => circle(FARTHEST_SIDE, ...params);

export const ellipse = method('ellipse');
ellipse.closestSide = (...params) => ellipse(CLOSEST_SIDE, ...params);
ellipse.farthestSide = (...params) => ellipse(FARTHEST_SIDE, ...params);

export const polygon = method('polygon');
polygon.nonzero = (...params) => polygon(NONZERO, ...params);
polygon.evenodd = (...params) => polygon(EVENODD, ...params);
