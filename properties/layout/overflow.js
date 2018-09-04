import { property } from '../../utils';
import { rect } from '../../methods';
import {
    ALWAYS, AUTO, CLIP, DISCARD, ELLIPSIS, FRAGMENTS, HIDDEN, NONE, OVERFLOW, PAGINATE, SCROLL, STABLE, VISIBLE
} from '../../constants';

export const overflow = property('overflow');
overflow.AUTO = overflow(AUTO);
overflow.VISIBLE = overflow(VISIBLE);
overflow.HIDDEN = overflow(HIDDEN);
overflow.CLIP = overflow(CLIP);
overflow.SCROLL = overflow(SCROLL);

export const overflowX = property('overflowX');
overflowX.AUTO = overflowX(AUTO);
overflowX.VISIBLE = overflowX(VISIBLE);
overflowX.HIDDEN = overflowX(HIDDEN);
overflowX.CLIP = overflowX(CLIP);
overflowX.SCROLL = overflowX(SCROLL);

export const overflowY = property('overflowY');
overflowY.AUTO = overflowY(AUTO);
overflowY.VISIBLE = overflowY(VISIBLE);
overflowY.HIDDEN = overflowY(HIDDEN);
overflowY.CLIP = overflowY(CLIP);
overflowY.SCROLL = overflowY(SCROLL);

export const overflowBlock = property('overflowBlock');
overflowBlock.AUTO = overflowBlock(AUTO);
overflowBlock.VISIBLE = overflowBlock(VISIBLE);
overflowBlock.HIDDEN = overflowBlock(HIDDEN);
overflowBlock.CLIP = overflowBlock(CLIP);
overflowBlock.SCROLL = overflowBlock(SCROLL);

export const overflowInline = property('overflowInline');
overflowInline.AUTO = overflowInline(AUTO);
overflowInline.VISIBLE = overflowInline(VISIBLE);
overflowInline.HIDDEN = overflowInline(HIDDEN);
overflowInline.CLIP = overflowInline(CLIP);
overflowInline.SCROLL = overflowInline(SCROLL);

export const clip = property('clip');
clip.AUTO = clip(AUTO);
clip.rect = (...values) => clip(rect(...values));

export const blockOverflow = property('blockOverflow');
blockOverflow.CLIP = blockOverflow(CLIP);
blockOverflow.ELLIPSIS = blockOverflow(ELLIPSIS);

export const textOverflow = property('textOverflow');
textOverflow.CLIP = textOverflow(CLIP);
textOverflow.ELLIPSIS = textOverflow(ELLIPSIS);

export const _continue = property('continue');
_continue.AUTO = _continue(AUTO);
_continue.OVERFLOW = _continue(OVERFLOW);
_continue.PAGINATE = _continue(PAGINATE);
_continue.FRAGMENTS = _continue(FRAGMENTS);
_continue.DISCARD = _continue(DISCARD);

export const lineClamp = property('lineClamp');
lineClamp.NONE = lineClamp(NONE);

export const maxLines = property('maxLines');
maxLines.NONE = maxLines(NONE);

export const scrollbarGutter = property('scrollbarGutter');
scrollbarGutter.AUTO = scrollbarGutter(AUTO);
scrollbarGutter.STABLE = scrollbarGutter(STABLE);
scrollbarGutter.ALWAYS = scrollbarGutter(ALWAYS);

