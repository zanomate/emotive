import { property } from '../../utils';
import { ALWAYS, AUTO, AVOID, LEFT, RIGHT } from '../../constants';

const PageBreakBefore = property('pageBreakBefore');
PageBreakBefore.AUTO = PageBreakBefore(AUTO);
PageBreakBefore.ALWAYS = PageBreakBefore(ALWAYS);
PageBreakBefore.AVOID = PageBreakBefore(AVOID);
PageBreakBefore.LEFT = PageBreakBefore(LEFT);
PageBreakBefore.RIGHT = PageBreakBefore(RIGHT);
export { PageBreakBefore };

const PageBreakAfter = property('pageBreakAfter');
PageBreakAfter.AUTO = PageBreakAfter(AUTO);
PageBreakAfter.ALWAYS = PageBreakAfter(ALWAYS);
PageBreakAfter.AVOID = PageBreakAfter(AVOID);
PageBreakAfter.LEFT = PageBreakAfter(LEFT);
PageBreakAfter.RIGHT = PageBreakAfter(RIGHT);
export { PageBreakAfter };

const PageBreakInside = property('pageBreakInside');
PageBreakInside.AUTO = PageBreakInside(AUTO);
PageBreakInside.AVOID = PageBreakInside(AVOID);
export { PageBreakInside };
