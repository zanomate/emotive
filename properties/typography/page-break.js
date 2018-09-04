import { property } from '../../utils';
import { ALWAYS, AUTO, AVOID, LEFT, RIGHT } from '../../constants';

export const pageBreakBefore = property('pageBreakBefore');
pageBreakBefore.AUTO = pageBreakBefore(AUTO);
pageBreakBefore.ALWAYS = pageBreakBefore(ALWAYS);
pageBreakBefore.AVOID = pageBreakBefore(AVOID);
pageBreakBefore.LEFT = pageBreakBefore(LEFT);
pageBreakBefore.RIGHT = pageBreakBefore(RIGHT);

export const pageBreakAfter = property('pageBreakAfter');
pageBreakAfter.AUTO = pageBreakAfter(AUTO);
pageBreakAfter.ALWAYS = pageBreakAfter(ALWAYS);
pageBreakAfter.AVOID = pageBreakAfter(AVOID);
pageBreakAfter.LEFT = pageBreakAfter(LEFT);
pageBreakAfter.RIGHT = pageBreakAfter(RIGHT);

export const pageBreakInside = property('pageBreakInside');
pageBreakInside.AUTO = pageBreakInside(AUTO);
pageBreakInside.AVOID = pageBreakInside(AVOID);

export const orphans = property('orphans');

export const widows = property('widows');
