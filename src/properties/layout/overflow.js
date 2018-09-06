import { property } from '../../utils';
import {
    ALWAYS, AUTO, CLIP, DISCARD, ELLIPSIS, FRAGMENTS, HIDDEN, NONE, OVERFLOW,
    PAGINATE, SCROLL, STABLE, VISIBLE
} from '../../constants';

const Overflow = property('overflow');
Overflow.AUTO = Overflow(AUTO);
Overflow.VISIBLE = Overflow(VISIBLE);
Overflow.HIDDEN = Overflow(HIDDEN);
Overflow.CLIP = Overflow(CLIP);
Overflow.SCROLL = Overflow(SCROLL);
export { Overflow };

const OverflowX = property('overflowX');
OverflowX.AUTO = OverflowX(AUTO);
OverflowX.VISIBLE = OverflowX(VISIBLE);
OverflowX.HIDDEN = OverflowX(HIDDEN);
OverflowX.CLIP = OverflowX(CLIP);
OverflowX.SCROLL = OverflowX(SCROLL);
export { OverflowX };

const OverflowY = property('overflowY');
OverflowY.AUTO = OverflowY(AUTO);
OverflowY.VISIBLE = OverflowY(VISIBLE);
OverflowY.HIDDEN = OverflowY(HIDDEN);
OverflowY.CLIP = OverflowY(CLIP);
OverflowY.SCROLL = OverflowY(SCROLL);
export { OverflowY };

const OverflowBlock = property('overflowBlock');
OverflowBlock.AUTO = OverflowBlock(AUTO);
OverflowBlock.VISIBLE = OverflowBlock(VISIBLE);
OverflowBlock.HIDDEN = OverflowBlock(HIDDEN);
OverflowBlock.CLIP = OverflowBlock(CLIP);
OverflowBlock.SCROLL = OverflowBlock(SCROLL);
export { OverflowBlock };

const OverflowInline = property('overflowInline');
OverflowInline.AUTO = OverflowInline(AUTO);
OverflowInline.VISIBLE = OverflowInline(VISIBLE);
OverflowInline.HIDDEN = OverflowInline(HIDDEN);
OverflowInline.CLIP = OverflowInline(CLIP);
OverflowInline.SCROLL = OverflowInline(SCROLL);
export { OverflowInline };

const BlockOverflow = property('blockOverflow');
BlockOverflow.CLIP = BlockOverflow(CLIP);
BlockOverflow.ELLIPSIS = BlockOverflow(ELLIPSIS);
export { BlockOverflow };

const Continue = property('continue');
Continue.AUTO = Continue(AUTO);
Continue.OVERFLOW = Continue(OVERFLOW);
Continue.PAGINATE = Continue(PAGINATE);
Continue.FRAGMENTS = Continue(FRAGMENTS);
Continue.DISCARD = Continue(DISCARD);
export { Continue };

const LineClamp = property('lineClamp');
LineClamp.NONE = LineClamp(NONE);
export { LineClamp };

const MaxLines = property('maxLines');
MaxLines.NONE = MaxLines(NONE);
export { MaxLines };

const ScrollbarGutter = property('scrollbarGutter');
ScrollbarGutter.AUTO = ScrollbarGutter(AUTO);
ScrollbarGutter.STABLE = ScrollbarGutter(STABLE);
ScrollbarGutter.ALWAYS = ScrollbarGutter(ALWAYS);
export { ScrollbarGutter };
