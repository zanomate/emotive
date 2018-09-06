import { method } from '../utils';
import {
    BOTTOM, CIRCLE, CLOSEST_CORNER, CLOSEST_SIDE, ELLIPSE, FARTHEST_CORNER,
    FARTHEST_SIDE, LEFT, RIGHT, TO, TOP
} from '../constants';

export const linearGradient = method('linear-gradient');
linearGradient.toTop = (...params) => linearGradient(TO, TOP, ...params);
linearGradient.toLeft = (...params) => linearGradient(TO, LEFT, ...params);
linearGradient.toRight = (...params) => linearGradient(TO, RIGHT, ...params);
linearGradient.toBottom = (...params) => linearGradient(TO, BOTTOM, ...params);
linearGradient.toTopLeft = (...params) => linearGradient(TO, TOP, LEFT, ...params);
linearGradient.toTopRight = (...params) => linearGradient(TO, TOP, RIGHT, ...params);
linearGradient.toBottomLeft = (...params) => linearGradient(TO, BOTTOM, LEFT, ...params);
linearGradient.toBottomRight = (...params) => linearGradient(TO, BOTTOM, RIGHT, ...params);

export const repeatingLinearGradient = method('repeating-linear-gradient');
repeatingLinearGradient.toTop = (...params) => repeatingLinearGradient(TO, TOP, ...params);
repeatingLinearGradient.toLeft = (...params) => repeatingLinearGradient(TO, LEFT, ...params);
repeatingLinearGradient.toRight = (...params) => repeatingLinearGradient(TO, RIGHT, ...params);
repeatingLinearGradient.toBottom = (...params) => repeatingLinearGradient(TO, BOTTOM, ...params);
repeatingLinearGradient.toTopLeft = (...params) => repeatingLinearGradient(TO, TOP, LEFT, ...params);
repeatingLinearGradient.toTopRight = (...params) => repeatingLinearGradient(TO, TOP, RIGHT, ...params);
repeatingLinearGradient.toBottomLeft = (...params) => repeatingLinearGradient(TO, BOTTOM, LEFT, ...params);
repeatingLinearGradient.toBottomRight = (...params) => repeatingLinearGradient(TO, BOTTOM, RIGHT, ...params);

export const radialGradient = method('radial-gradient');
radialGradient.extent = {
    CLOSEST_SIDE: 'closest-side',
    CLOSEST_CORNER: 'closest-corner',
    FARTHEST_SIDE: 'farthest-side',
    FARTHEST_CORNER: 'farthest-corner'
};
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
