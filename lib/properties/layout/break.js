import { property } from 'utils/index';
import {
    AUTO, AVOID, AVOID_COLUMN, AVOID_PAGE, AVOID_REGION, CLONE, COLUMN, LEFT, PAGE, RECTO, REGION, RIGHT, SLICE, VERSO
} from 'constants/index';

export const breakBefore = property('breakBefore');
breakBefore.AUTO = breakBefore(AUTO);
breakBefore.AVOID = breakBefore(AVOID);
breakBefore.AVOID_PAGE = breakBefore(AVOID_PAGE);
breakBefore.PAGE = breakBefore(PAGE);
breakBefore.LEFT = breakBefore(LEFT);
breakBefore.RIGHT = breakBefore(RIGHT);
breakBefore.RECTO = breakBefore(RECTO);
breakBefore.VERSO = breakBefore(VERSO);
breakBefore.AVOID_COLUMN = breakBefore(AVOID_COLUMN);
breakBefore.COLUMN = breakBefore(COLUMN);
breakBefore.AVOID_REGION = breakBefore(AVOID_REGION);
breakBefore.REGION = breakBefore(REGION);

export const breakAfter = property('breakAfter');
breakAfter.AUTO = breakAfter(AUTO);
breakAfter.AVOID = breakAfter(AVOID);
breakAfter.AVOID_PAGE = breakAfter(AVOID_PAGE);
breakAfter.PAGE = breakAfter(PAGE);
breakAfter.LEFT = breakAfter(LEFT);
breakAfter.RIGHT = breakAfter(RIGHT);
breakAfter.RECTO = breakAfter(RECTO);
breakAfter.VERSO = breakAfter(VERSO);
breakAfter.AVOID_COLUMN = breakAfter(AVOID_COLUMN);
breakAfter.COLUMN = breakAfter(COLUMN);
breakAfter.AVOID_REGION = breakAfter(AVOID_REGION);
breakAfter.REGION = breakAfter(REGION);

export const breakInside = property('breakInside');
breakInside.AUTO = breakInside(AUTO);
breakInside.AVOID = breakInside(AVOID);
breakInside.AVOID_PAGE = breakInside(AVOID_PAGE);
breakInside.AVOID_COLUMN = breakInside(AVOID_COLUMN);
breakInside.AVOID_REGION = breakInside(AVOID_REGION);

export const orphans = property('orphans');

export const widows = property('widows');

export const boxDecorationBreak = property('boxDecorationBreak');
boxDecorationBreak.SLICE = boxDecorationBreak(SLICE);
boxDecorationBreak.CLONE = boxDecorationBreak(CLONE);