import { property } from '../../utils/factory';
import {
    ALWAYS, AUTO, BLOCK, BOTH, CENTER, END, INLINE, MANDATORY, NONE, NORMAL,
    PROXIMITY, SMOOTH, START, X, Y
} from '../../constants';

const ScrollBehavior = property('scrollBehavior');
ScrollBehavior.AUTO = ScrollBehavior(AUTO);
ScrollBehavior.AUTO = ScrollBehavior(SMOOTH);
export { ScrollBehavior };

const ScrollMargin = property('scrollMargin');
export { ScrollMargin };

const ScrollMarginBlock = property('scrollMarginBlock');
export { ScrollMarginBlock };

const ScrollMarginBlockStart = property('scrollMarginBlockStart');
export { ScrollMarginBlockStart };

const ScrollMarginBlockEnd = property('scrollMarginBlockEnd');
export { ScrollMarginBlockEnd };

const ScrollMarginInline = property('scrollMarginInline');
export { ScrollMarginInline };

const ScrollMarginInlineStart = property('scrollMarginInlineStart');
export { ScrollMarginInlineStart };

const ScrollMarginInlineEnd = property('scrollMarginInlineEnd');
export { ScrollMarginInlineEnd };

const ScrollMarginTop = property('scrollMarginTop');
export { ScrollMarginTop };

const ScrollMarginRight = property('scrollMarginRight');
export { ScrollMarginRight };

const ScrollMarginBottom = property('scrollMarginBottom');
export { ScrollMarginBottom };

const ScrollMarginLeft = property('scrollMarginLeft');
export { ScrollMarginLeft };

const ScrollPadding = property('scrollPadding');
ScrollPadding.AUTO = ScrollPadding(AUTO);
export { ScrollPadding };

const ScrollPaddingBlock = property('scrollPaddingBlock');
export { ScrollPaddingBlock };

const ScrollPaddingBlockStart = property('scrollPaddingBlockStart');
export { ScrollPaddingBlockStart };

const ScrollPaddingBlockEnd = property('scrollPaddingBlockEnd');
export { ScrollPaddingBlockEnd };

const ScrollPaddingInline = property('scrollPaddingInline');
export { ScrollPaddingInline };

const ScrollPaddingInlineStart = property('scrollPaddingInlineStart');
export { ScrollPaddingInlineStart };

const ScrollPaddingInlineEnd = property('scrollPaddingInlineEnd');
export { ScrollPaddingInlineEnd };

const ScrollPaddingTop = property('scrollPadding');
export { ScrollPaddingTop };

const ScrollPaddingRight = property('scrollPadding');
export { ScrollPaddingRight };

const ScrollPaddingBottom = property('scrollPadding');
export { ScrollPaddingBottom };

const ScrollPaddingLeft = property('scrollPadding');
export { ScrollPaddingLeft };

const ScrollSnapAlign = property('scrollSnapAlign');
ScrollSnapAlign.NONE = ScrollSnapAlign(NONE);
ScrollSnapAlign.START = ScrollSnapAlign(START);
ScrollSnapAlign.END = ScrollSnapAlign(END);
ScrollSnapAlign.CENTER = ScrollSnapAlign(CENTER);
export { ScrollSnapAlign };

const ScrollSnapStop = property('scrollSnapStop');
ScrollSnapStop.NORMAL = ScrollSnapStop(NORMAL);
ScrollSnapStop.ALWAYS = ScrollSnapStop(ALWAYS);
export { ScrollSnapStop };

const ScrollSnapType = property('scrollSnapType');
ScrollSnapType.NONE = ScrollSnapType(NONE);
ScrollSnapType.X = ScrollSnapType(X);
ScrollSnapType.Y = ScrollSnapType(Y);
ScrollSnapType.INLINE = ScrollSnapType(INLINE);
ScrollSnapType.INLINE = ScrollSnapType(BLOCK);
ScrollSnapType.INLINE = ScrollSnapType(BOTH);
ScrollSnapType.MANDATORY = ScrollSnapType(MANDATORY);
ScrollSnapType.PROXIMITY = ScrollSnapType(PROXIMITY);
export { ScrollSnapType };
