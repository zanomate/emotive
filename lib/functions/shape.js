import { method } from 'utils';
import { CLOSEST_SIDE, EVENODD, FARTHEST_SIDE, NONZERO } from 'constants';

/**
 * @example
 * rect(px(20), X(30), px(10), X(15))
 * rect(20%px 30% 10px 15%)
 */
export const rect = method('rect');

/**
 * @example
 * inset([px(20), X(30), px(10), X(15)])
 * inset(20%px 30% 10px 15%)
 * @example
 * inset(X(20, 30, 10, 15), round(px(15)))
 * inset(20% 30% 10% 15% round 15px)
 */
export const inset = method('inset');

/**
 * @example
 * circle(px(50))
 * circle(50px)
 * @example
 * circle(px(50), at(px(20,20)))
 * circle(50px at 20px 20px)
 * @example
 * circle.closestSide(at(X(50,20)))
 * circle(closest-side at 50% 20%)
 */
export const circle = method('circle');
circle.closestSide = (...params) => circle(CLOSEST_SIDE, ...params);
circle.farthestSide = (...params) => circle(FARTHEST_SIDE, ...params);

/**
 * @example
 * ellipse(px(50,30))
 * ellipse(50px 30px)
 * @example
 * ellipse(px(50), at(px(20,20)))
 * ellipse(50px at 20px 20px)
 * @example
 * ellipse.closestSide(at(X(50,20)))
 * ellipse(closest-side at 50% 20%)
 */
export const ellipse = method('ellipse');
ellipse.closestSide = (...params) => ellipse(CLOSEST_SIDE, ...params);
ellipse.farthestSide = (...params) => ellipse(FARTHEST_SIDE, ...params);

/**
 * @example
 * BasicShape.polygon(polygon.fillRule.NONZERO, [0,0], [50,50], ['100%', 100])
 * polygon(nonzero, 0 0, 50px 50px, 100% 100px)
 * BasicShape.polygon.evenodd([0,0], [50,50], ['100%', 100])
 * polygon(evenodd, 0 0, 50px 50px, 100% 100px)
 */
export const polygon = new method('polygon');
polygon.nonzero = (...params) => polygon(NONZERO, ...params);
polygon.evenodd = (...params) => polygon(EVENODD, ...params);
