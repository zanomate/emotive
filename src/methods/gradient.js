import { method } from '../utils/factory';
import {
    CIRCLE, CLOSEST_CORNER, CLOSEST_SIDE, ELLIPSE, FARTHEST_CORNER,
    FARTHEST_SIDE, TO_BOTTOM, TO_BOTTOM_LEFT, TO_BOTTOM_RIGHT, TO_LEFT,
    TO_RIGHT, TO_TOP, TO_TOP_LEFT, TO_TOP_RIGHT
} from '../constants';

export const linearGradient = method('linear-gradient');
linearGradient.toTop = (...params) => linearGradient(TO_TOP, ...params);
linearGradient.toLeft = (...params) => linearGradient(TO_LEFT, ...params);
linearGradient.toRight = (...params) => linearGradient(TO_RIGHT, ...params);
linearGradient.toBottom = (...params) => linearGradient(TO_BOTTOM, ...params);
linearGradient.toTopLeft = (...params) => linearGradient(TO_TOP_LEFT, ...params);
linearGradient.toTopRight = (...params) => linearGradient(TO_TOP_RIGHT, ...params);
linearGradient.toBottomLeft = (...params) => linearGradient(TO_BOTTOM_LEFT, ...params);
linearGradient.toBottomRight = (...params) => linearGradient(TO_BOTTOM_RIGHT, ...params);

export const repeatingLinearGradient = method('repeating-linear-gradient');
repeatingLinearGradient.toTop = (...params) => repeatingLinearGradient(TO_TOP, ...params);
repeatingLinearGradient.toLeft = (...params) => repeatingLinearGradient(TO_LEFT, ...params);
repeatingLinearGradient.toRight = (...params) => repeatingLinearGradient(TO_RIGHT, ...params);
repeatingLinearGradient.toBottom = (...params) => repeatingLinearGradient(TO_BOTTOM, ...params);
repeatingLinearGradient.toTopLeft = (...params) => repeatingLinearGradient(TO_TOP_LEFT, ...params);
repeatingLinearGradient.toTopRight = (...params) => repeatingLinearGradient(TO_TOP_RIGHT, ...params);
repeatingLinearGradient.toBottomLeft = (...params) => repeatingLinearGradient(TO_BOTTOM_LEFT, ...params);
repeatingLinearGradient.toBottomRight = (...params) => repeatingLinearGradient(TO_BOTTOM_RIGHT, ...params);

export const radialGradient = method('radial-gradient');
radialGradient.closestSide = (...params) => radialGradient(CLOSEST_SIDE, ...params);
radialGradient.closestCorner = (...params) => radialGradient(CLOSEST_CORNER, ...params);
radialGradient.farthestSide = (...params) => radialGradient(FARTHEST_SIDE, ...params);
radialGradient.farthestCorner = (...params) => radialGradient(FARTHEST_CORNER, ...params);
radialGradient.circle = (...params) => radialGradient(CIRCLE, ...params);
radialGradient.ellipse = (...params) => radialGradient(ELLIPSE, ...params);

export const repeatingRadialGradient = method('repeating-radial-gradient');
repeatingRadialGradient.closestSide = (...params) => repeatingRadialGradient(CLOSEST_SIDE, ...params);
repeatingRadialGradient.closestCorner = (...params) => repeatingRadialGradient(CLOSEST_CORNER, ...params);
repeatingRadialGradient.farthestSide = (...params) => repeatingRadialGradient(FARTHEST_SIDE, ...params);
repeatingRadialGradient.farthestCorner = (...params) => repeatingRadialGradient(FARTHEST_CORNER, ...params);
repeatingRadialGradient.circle = (...params) => repeatingRadialGradient(CIRCLE, ...params);
repeatingRadialGradient.ellipse = (...params) => repeatingRadialGradient(ELLIPSE, ...params);
