import { property } from '../../utils/factory';
import {
    AUTO, AVOID, AVOID_COLUMN, AVOID_PAGE, AVOID_REGION, CLONE, COLUMN, LEFT,
    PAGE, RECTO, REGION, RIGHT, SLICE, VERSO
} from '../../constants';

const BreakBefore = property('breakBefore');
BreakBefore.AUTO = BreakBefore(AUTO);
BreakBefore.AVOID = BreakBefore(AVOID);
BreakBefore.AVOID_PAGE = BreakBefore(AVOID_PAGE);
BreakBefore.PAGE = BreakBefore(PAGE);
BreakBefore.LEFT = BreakBefore(LEFT);
BreakBefore.RIGHT = BreakBefore(RIGHT);
BreakBefore.RECTO = BreakBefore(RECTO);
BreakBefore.VERSO = BreakBefore(VERSO);
BreakBefore.AVOID_COLUMN = BreakBefore(AVOID_COLUMN);
BreakBefore.COLUMN = BreakBefore(COLUMN);
BreakBefore.AVOID_REGION = BreakBefore(AVOID_REGION);
BreakBefore.REGION = BreakBefore(REGION);
export { BreakBefore };

const BreakAfter = property('breakAfter');
BreakAfter.AUTO = BreakAfter(AUTO);
BreakAfter.AVOID = BreakAfter(AVOID);
BreakAfter.AVOID_PAGE = BreakAfter(AVOID_PAGE);
BreakAfter.PAGE = BreakAfter(PAGE);
BreakAfter.LEFT = BreakAfter(LEFT);
BreakAfter.RIGHT = BreakAfter(RIGHT);
BreakAfter.RECTO = BreakAfter(RECTO);
BreakAfter.VERSO = BreakAfter(VERSO);
BreakAfter.AVOID_COLUMN = BreakAfter(AVOID_COLUMN);
BreakAfter.COLUMN = BreakAfter(COLUMN);
BreakAfter.AVOID_REGION = BreakAfter(AVOID_REGION);
BreakAfter.REGION = BreakAfter(REGION);
export { BreakAfter };

const BreakInside = property('breakInside');
BreakInside.AUTO = BreakInside(AUTO);
BreakInside.AVOID = BreakInside(AVOID);
BreakInside.AVOID_PAGE = BreakInside(AVOID_PAGE);
BreakInside.AVOID_COLUMN = BreakInside(AVOID_COLUMN);
BreakInside.AVOID_REGION = BreakInside(AVOID_REGION);
export { BreakInside };

const Orphans = property('orphans');
export { Orphans };

const Widows = property('widows');
export { Widows };

const BoxDecorationBreak = property('boxDecorationBreak');
BoxDecorationBreak.SLICE = BoxDecorationBreak(SLICE);
BoxDecorationBreak.CLONE = BoxDecorationBreak(CLONE);
export { BoxDecorationBreak };
