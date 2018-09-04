import { property } from 'utils';
import {
    AUTO, COLUMN, COLUMN_REVERSE, CONTENT, NONE, NOWRAP, ROW, ROW_REVERSE, WRAP, WRAP_REVERSE
} from 'constants';
import {
    BASELINE,
    CENTER, END, FIRST, FLEX_END, FLEX_START, LAST, LEFT, LEGACY, NORMAL, RIGHT, SAFE, SELF_END, SELF_START,
    SPACE_AROUND,
    SPACE_BETWEEN,
    SPACE_EVENLY,
    START,
    STRETCH, UNSAFE
} from 'constants';

export const flex = property('flex');
flex.NONE = flex(NONE);

export const flexGrow = property('flexGrow');

export const flexShrink = property('flexShrink');

export const flexBasis = property('flexBasis');
flexBasis.AUTO = flexBasis(AUTO);
flexBasis.CONTENT = flexBasis(CONTENT);

export const flexFlow = property('flexFlow');

export const flexDirection = property('flexDirection');
flexDirection.ROW = flexDirection(ROW);
flexDirection.ROW_REVERSE = flexDirection(ROW_REVERSE);
flexDirection.COLUMN = flexDirection(COLUMN);
flexDirection.COLUMN_REVERSE = flexDirection(COLUMN_REVERSE);

export const flexWrap = property('flexWrap');
flexWrap.NOWRAP = flexWrap(NOWRAP);
flexWrap.WRAP = flexWrap(WRAP);
flexWrap.WRAP_REVERSE = flexWrap(WRAP_REVERSE);

export const order = property('order');

/* Justify */

export const justifyContent = property('justifyContent');
justifyContent.NORMAL = justifyContent(NORMAL);
justifyContent.SPACE_BETWEEN = justifyContent(SPACE_BETWEEN);
justifyContent.SPACE_AROUND = justifyContent(SPACE_AROUND);
justifyContent.SPACE_EVENLY = justifyContent(SPACE_EVENLY);
justifyContent.STRETCH = justifyContent(STRETCH);
justifyContent.CENTER = justifyContent(CENTER);
justifyContent.START = justifyContent(START);
justifyContent.END = justifyContent(END);
justifyContent.FLEX_START = justifyContent(FLEX_START);
justifyContent.FLEX_END = justifyContent(FLEX_END);
justifyContent.LEFT = justifyContent(LEFT);
justifyContent.RIGHT = justifyContent(RIGHT);
justifyContent.safe = (...values) => justifyContent(SAFE, ...values);
justifyContent.unsafe = (...values) => justifyContent(UNSAFE, ...values);

export const justifyItems = property('justifyItems');
justifyItems.NORMAL = justifyItems(NORMAL);
justifyItems.STRETCH = justifyItems(STRETCH);
justifyItems.BASELINE = justifyItems(BASELINE);
justifyItems.FIRST_BASELINE = justifyItems(FIRST, BASELINE);
justifyItems.LAST_BASELINE = justifyItems(LAST, BASELINE);
justifyItems.CENTER = justifyItems(CENTER);
justifyItems.START = justifyItems(START);
justifyItems.END = justifyItems(END);
justifyItems.SELF_START = justifyItems(SELF_START);
justifyItems.SELF_END = justifyItems(SELF_END);
justifyItems.FLEX_START = justifyItems(FLEX_START);
justifyItems.FLEX_END = justifyItems(FLEX_END);
justifyItems.LEFT = justifyItems(LEFT);
justifyItems.RIGHT = justifyItems(RIGHT);
justifyItems.LEGACY = justifyItems(LEGACY);
justifyItems.safe = (...values) => justifyItems(SAFE, ...values);
justifyItems.unsafe = (...values) => justifyItems(UNSAFE, ...values);
justifyItems.legacy = (...values) => justifyItems(LEGACY, ...values);

export const justifySelf = property('justifySelf');
justifySelf.AUTO = justifySelf(AUTO);
justifySelf.NORMAL = justifySelf(NORMAL);
justifySelf.STRETCH = justifySelf(STRETCH);
justifySelf.BASELINE = justifySelf(BASELINE);
justifySelf.FIRST_BASELINE = justifySelf(FIRST, BASELINE);
justifySelf.LAST_BASELINE = justifySelf(LAST, BASELINE);
justifySelf.CENTER = justifySelf(CENTER);
justifySelf.START = justifySelf(START);
justifySelf.END = justifySelf(END);
justifySelf.FLEX_START = justifySelf(FLEX_START);
justifySelf.FLEX_END = justifySelf(FLEX_END);
justifySelf.SELF_START = justifySelf(SELF_START);
justifySelf.SELF_END = justifySelf(SELF_END);
justifySelf.RIGHT = justifySelf(RIGHT);
justifySelf.LEGACY = justifySelf(LEGACY);
justifySelf.safe = (...values) => justifySelf(SAFE, ...values);
justifySelf.unsafe = (...values) => justifySelf(UNSAFE, ...values);

/* Align */

export const alignContent = property('alignContent');
alignContent.NORMAL = alignContent(NORMAL);
alignContent.BASELINE = alignContent(BASELINE);
alignContent.FIRST_BASELINE = alignContent(FIRST, BASELINE);
alignContent.LAST_BASELINE = alignContent(LAST, BASELINE);
alignContent.SPACE_BETWEEN = alignContent(SPACE_BETWEEN);
alignContent.SPACE_AROUND = alignContent(SPACE_AROUND);
alignContent.SPACE_AROUND = alignContent(SPACE_EVENLY);
alignContent.STRETCH = alignContent(STRETCH);
alignContent.CENTER = alignContent(CENTER);
alignContent.START = alignContent(START);
alignContent.END = alignContent(END);
alignContent.FLEX_START = alignContent(FLEX_START);
alignContent.FLEX_END = alignContent(FLEX_END);
alignContent.safe = (...values) => alignContent(SAFE, ...values);
alignContent.unsafe = (...values) => alignContent(UNSAFE, ...values);

export const alignItems = property('alignItems');
alignItems.NORMAL = alignItems(NORMAL);
alignItems.STRETCH = alignItems(STRETCH);
alignItems.BASELINE = alignItems(BASELINE);
alignItems.FIRST_BASELINE = alignItems(FIRST, BASELINE);
alignItems.LAST_BASELINE = alignItems(LAST, BASELINE);
alignItems.CENTER = alignItems(CENTER);
alignItems.START = alignItems(START);
alignItems.END = alignItems(END);
alignItems.FLEX_START = alignItems(FLEX_START);
alignItems.FLEX_END = alignItems(FLEX_END);
alignItems.SELF_START = alignItems(SELF_START);
alignItems.SELF_END = alignItems(SELF_END);
alignItems.safe = (...values) => alignItems(SAFE, ...values);
alignItems.unsafe = (...values) => alignItems(UNSAFE, ...values);

export const alignSelf = property('alignSelf');
alignSelf.AUTO = alignSelf(AUTO);
alignSelf.NORMAL = alignSelf(NORMAL);
alignSelf.STRETCH = alignSelf(STRETCH);
alignSelf.BASELINE = alignSelf(BASELINE);
alignSelf.FIRST_BASELINE = alignSelf(FIRST, BASELINE);
alignSelf.LAST_BASELINE = alignSelf(LAST, BASELINE);
alignSelf.CENTER = alignSelf(CENTER);
alignSelf.START = alignSelf(START);
alignSelf.END = alignSelf(END);
alignSelf.FLEX_START = alignSelf(FLEX_START);
alignSelf.FLEX_END = alignSelf(FLEX_END);
alignSelf.SELF_START = alignSelf(SELF_START);
alignSelf.SELF_END = alignSelf(SELF_END);
alignSelf.safe = (...values) => alignSelf(SAFE, ...values);
alignSelf.unsafe = (...values) => alignSelf(UNSAFE, ...values);

/* Place */

export const placeContent = property('placeContent');
placeContent.NORMAL = placeContent(NORMAL);
placeContent.BASELINE = placeContent(BASELINE);
placeContent.FIRST_BASELINE = placeContent(FIRST, BASELINE);
placeContent.LAST_BASELINE = placeContent(LAST, BASELINE);
placeContent.SPACE_BETWEEN = placeContent(SPACE_BETWEEN);
placeContent.SPACE_AROUND = placeContent(SPACE_AROUND);
placeContent.SPACE_AROUND = placeContent(SPACE_EVENLY);
placeContent.STRETCH = placeContent(STRETCH);
placeContent.CENTER = placeContent(CENTER);
placeContent.START = placeContent(START);
placeContent.END = placeContent(END);
placeContent.FLEX_START = placeContent(FLEX_START);
placeContent.FLEX_END = placeContent(FLEX_END);
placeContent.safe = (...values) => placeContent(SAFE, ...values);
placeContent.unsafe = (...values) => placeContent(UNSAFE, ...values);

export const placeItems = property('placeItems');
placeItems.NORMAL = placeItems(NORMAL);
placeItems.STRETCH = placeItems(STRETCH);
placeItems.BASELINE = placeItems(BASELINE);
placeItems.FIRST_BASELINE = placeItems(FIRST, BASELINE);
placeItems.LAST_BASELINE = placeItems(LAST, BASELINE);
placeItems.CENTER = placeItems(CENTER);
placeItems.START = placeItems(START);
placeItems.END = placeItems(END);
placeItems.FLEX_START = placeItems(FLEX_START);
placeItems.FLEX_END = placeItems(FLEX_END);
placeItems.SELF_START = placeItems(SELF_START);
placeItems.SELF_END = placeItems(SELF_END);
placeItems.safe = (...values) => placeItems(SAFE, ...values);
placeItems.unsafe = (...values) => placeItems(UNSAFE, ...values);

export const placeSelf = property('placeSelf');
placeSelf.AUTO = placeSelf(AUTO);
placeSelf.NORMAL = placeSelf(NORMAL);
placeSelf.STRETCH = placeSelf(STRETCH);
placeSelf.BASELINE = placeSelf(BASELINE);
placeSelf.FIRST_BASELINE = placeSelf(FIRST, BASELINE);
placeSelf.LAST_BASELINE = placeSelf(LAST, BASELINE);
placeSelf.CENTER = placeSelf(CENTER);
placeSelf.START = placeSelf(START);
placeSelf.END = placeSelf(END);
placeSelf.FLEX_START = placeSelf(FLEX_START);
placeSelf.FLEX_END = placeSelf(FLEX_END);
placeSelf.SELF_START = placeSelf(SELF_START);
placeSelf.SELF_END = placeSelf(SELF_END);
placeSelf.safe = (...values) => placeSelf(SAFE, ...values);
placeSelf.unsafe = (...values) => placeSelf(UNSAFE, ...values);

/* Gap */

export const gap = property('gap');
gap.NORMAL = gap(NORMAL);

export const rowGap = property('rowGap');
rowGap.NORMAL = rowGap(NORMAL);

export const columnGap = property('columnGap');
columnGap.NORMAL = columnGap(NORMAL);

