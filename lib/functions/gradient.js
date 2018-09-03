import { method } from 'utils';
import {
    BOTTOM, CIRCLE, CLOSEST_CORNER, CLOSEST_SIDE, ELLIPSE, FARTHEST_CORNER, FARTHEST_SIDE, LEFT, RIGHT, TO, TOP
} from 'constants';

/**
 * @example
 * linearGradient(deg(45), Colors.RED, Colors.BLUE)
 * linear-gradient(45deg, #ff0000, #0000ff)
 * @example
 * linearGradient.toTopLeft(Colors.RED, Colors.BLUE)
 * linear-gradient(to top left, #ff0000, #0000ff)
 * @example
 * linearGradient.toBottom([Colors.RED, px(50)], [Colors.BLUE, X(10)])
 * linear-gradient(to bottom, #ff0000 50px, #0000ff 10%)
 */
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

/**
 * @example
 * radialGradient(Colors.RED, Colors.BLUE)
 * radial-gradient(#ff0000, #0000ff)
 * @example
 * radialGradient(px(100), Colors.RED, Colors.BLUE)
 * radial-gradient(100px, #ff0000, #0000ff)
 * @example
 * radialGradient(px(100, 50), Colors.RED, Colors.BLUE)
 * radial-gradient(100px 50px, #ff0000, #0000ff)
 * @example
 * radialGradient([px(100), px(50), at(Side.LEFT)], Colors.RED, Colors.BLUE)
 * radial-gradient(100px 50px at left, #ff0000, #0000ff)
 * @example
 * radialGradient.closestSide(Colors.RED, Colors.BLUE)
 * radial-gradient(closest-side, #ff0000, #0000ff)
 * @example
 * radialGradient.circle(at(X(50,20)), Colors.RED, Colors.BLUE)
 * radial-gradient(circle at 50% 20%, #ff0000, #0000ff)
 * @example
 * radialGradient.ellipse(at(Position.LEFT), [Colors.RED, X(50)], [Colors.BLUE, px(10)])
 * radial-gradient(ellipse at left, #ff0000 50%, #0000ff 10px)
 */
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
