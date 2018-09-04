import { property } from '../../utils';
import {
    BLOCK_END, BLOCK_START, BOTTOM, COLUMN, INLINE, INLINE_END, INLINE_START, LAST, LEFT, NONE, PAGE, REGION, RIGHT,
    SNAP_BLOCK, SNAP_INLINE, TOP
} from '../../constants';

export const float = property('float');
float.BLOCK_START = float(BLOCK_START);
float.BLOCK_END = float(BLOCK_END);
float.INLINE_START = float(INLINE_START);
float.INLINE_END = float(INLINE_END);
float.SNAP_BLOCK = float(SNAP_BLOCK);
float.SNAP_INLINE = float(SNAP_INLINE);
float.LEFT = float(LEFT);
float.RIGHT = float(RIGHT);
float.TOP = float(TOP);
float.BOTTOM = float(BOTTOM);
float.NONE = float(NONE);

export const clear = property('clear');
clear.BLOCK_START = clear(BLOCK_START);
clear.BLOCK_END = clear(BLOCK_END);
clear.INLINE_START = clear(INLINE_START);
clear.INLINE_END = clear(INLINE_END);
clear.LEFT = clear(LEFT);
clear.RIGHT = clear(RIGHT);
clear.TOP = clear(TOP);
clear.BOTTOM = clear(BOTTOM);
clear.NONE = clear(NONE);

export const floatReference = property('floatReference');
floatReference.INLINE = floatReference(INLINE);
floatReference.COLUMN = floatReference(COLUMN);
floatReference.REGION = floatReference(REGION);
floatReference.PAGE = floatReference(PAGE);

export const floatDefer = property('floatDefer');
floatReference.NONE = floatReference(NONE);
floatReference.LAST = floatReference(LAST);

export const floatOffset = property('floatOffset');
