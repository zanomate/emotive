import { property } from 'utils'
import {
    ALWAYS, AUTO, BLOCK, BOTH, CENTER, END, INLINE, MANDATORY, NONE, NORMAL, PROXIMITY, SMOOTH, START, X, Y
} from 'constants';

export const scrollBehavior = property('scrollBehavior');
scrollBehavior.AUTO = scrollBehavior(AUTO);
scrollBehavior.AUTO = scrollBehavior(SMOOTH);

export const scrollMargin = property('scrollMargin');

export const scrollMarginBlock = property('scrollMarginBlock');

export const scrollMarginBlockStart = property('scrollMarginBlockStart');

export const scrollMarginBlockEnd = property('scrollMarginBlockEnd');

export const scrollMarginInline = property('scrollMarginInline');

export const scrollMarginInlineStart = property('scrollMarginInlineStart');

export const scrollMarginInlineEnd = property('scrollMarginInlineEnd');

export const scrollMarginTop = property('scrollMarginTop');

export const scrollMarginRight = property('scrollMarginRight');

export const scrollMarginBottom = property('scrollMarginBottom');

export const scrollMarginLeft = property('scrollMarginLeft');

export const scrollPadding = property('scrollPadding');
scrollPadding.AUTO = scrollPadding(AUTO);

export const scrollPaddingBlock = property('scrollPaddingBlock');

export const scrollPaddingBlockStart = property('scrollPaddingBlockStart');

export const scrollPaddingBlockEnd = property('scrollPaddingBlockEnd');

export const scrollPaddingInline = property('scrollPaddingInline');

export const scrollPaddingInlineStart = property('scrollPaddingInlineStart');

export const scrollPaddingInlineEnd = property('scrollPaddingInlineEnd');

export const scrollPaddingTop = property('scrollPadding');

export const scrollPaddingRight = property('scrollPadding');

export const scrollPaddingBottom = property('scrollPadding');

export const scrollPaddingLeft = property('scrollPadding');

export const scrollSnapAlign = property('scrollSnapAlign');
scrollSnapAlign.NONE = scrollSnapAlign(NONE);
scrollSnapAlign.START = scrollSnapAlign(START);
scrollSnapAlign.END = scrollSnapAlign(END);
scrollSnapAlign.CENTER = scrollSnapAlign(CENTER);

export const scrollSnapStop = property('scrollSnapStop');
scrollSnapStop.NORMAL = scrollSnapStop(NORMAL);
scrollSnapStop.ALWAYS = scrollSnapStop(ALWAYS);

export const scrollSnapType = property('scrollSnapType');
scrollSnapType.NONE = scrollSnapType(NONE);
scrollSnapType.X = scrollSnapType(X);
scrollSnapType.Y = scrollSnapType(Y);
scrollSnapType.INLINE = scrollSnapType(INLINE);
scrollSnapType.INLINE = scrollSnapType(BLOCK);
scrollSnapType.INLINE = scrollSnapType(BOTH);
scrollSnapType.MANDATORY = scrollSnapType(MANDATORY);
scrollSnapType.PROXIMITY = scrollSnapType(PROXIMITY);
