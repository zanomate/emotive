import { property } from '../../utils';
import {
    BLOCK_END, BLOCK_START, BOTTOM, COLUMN, INLINE, INLINE_END, INLINE_START,
    LAST, LEFT, NONE, PAGE, REGION, RIGHT, SNAP_BLOCK, SNAP_INLINE, TOP
} from '../../constants';

const Float = property('float');
Float.BLOCK_START = Float(BLOCK_START);
Float.BLOCK_END = Float(BLOCK_END);
Float.INLINE_START = Float(INLINE_START);
Float.INLINE_END = Float(INLINE_END);
Float.SNAP_BLOCK = Float(SNAP_BLOCK);
Float.SNAP_INLINE = Float(SNAP_INLINE);
Float.LEFT = Float(LEFT);
Float.RIGHT = Float(RIGHT);
Float.TOP = Float(TOP);
Float.BOTTOM = Float(BOTTOM);
Float.NONE = Float(NONE);
export { Float };

const Clear = property('clear');
Clear.BLOCK_START = Clear(BLOCK_START);
Clear.BLOCK_END = Clear(BLOCK_END);
Clear.INLINE_START = Clear(INLINE_START);
Clear.INLINE_END = Clear(INLINE_END);
Clear.LEFT = Clear(LEFT);
Clear.RIGHT = Clear(RIGHT);
Clear.TOP = Clear(TOP);
Clear.BOTTOM = Clear(BOTTOM);
Clear.NONE = Clear(NONE);
export { Clear };

const FloatReference = property('floatReference');
FloatReference.INLINE = FloatReference(INLINE);
FloatReference.COLUMN = FloatReference(COLUMN);
FloatReference.REGION = FloatReference(REGION);
FloatReference.PAGE = FloatReference(PAGE);
export { FloatReference };

const FloatDefer = property('floatDefer');
FloatDefer.NONE = FloatDefer(NONE);
FloatDefer.LAST = FloatDefer(LAST);
export { FloatDefer };

const FloatOffset = property('floatOffset');
export { FloatOffset };
