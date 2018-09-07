import { property } from '../../utils/factory';
import {
    AUTO, BASELINE, CENTER, COLUMN, COLUMN_REVERSE, CONTENT, END, FIRST,
    FLEX_END, FLEX_START, LAST, LEFT, LEGACY, NONE, NORMAL, NOWRAP, RIGHT, ROW,
    ROW_REVERSE, SAFE, SELF_END, SELF_START, SPACE_AROUND, SPACE_BETWEEN,
    SPACE_EVENLY, START, STRETCH, UNSAFE, WRAP, WRAP_REVERSE
} from '../../constants';

const Flex = property('flex');
Flex.NONE = Flex(NONE);
export { Flex };

const FlexGrow = property('flexGrow');
export { FlexGrow };

const FlexShrink = property('flexShrink');
export { FlexShrink };

const FlexBasis = property('flexBasis');
FlexBasis.AUTO = FlexBasis(AUTO);
FlexBasis.CONTENT = FlexBasis(CONTENT);
export { FlexBasis };

const FlexFlow = property('flexFlow');
export { FlexFlow };

const FlexDirection = property('flexDirection');
FlexDirection.ROW = FlexDirection(ROW);
FlexDirection.ROW_REVERSE = FlexDirection(ROW_REVERSE);
FlexDirection.COLUMN = FlexDirection(COLUMN);
FlexDirection.COLUMN_REVERSE = FlexDirection(COLUMN_REVERSE);
export { FlexDirection };

const FlexWrap = property('flexWrap');
FlexWrap.NOWRAP = FlexWrap(NOWRAP);
FlexWrap.WRAP = FlexWrap(WRAP);
FlexWrap.WRAP_REVERSE = FlexWrap(WRAP_REVERSE);
export { FlexWrap };

const Order = property('order');
export { Order };

/* Justify */

const JustifyContent = property('justifyContent');
JustifyContent.NORMAL = JustifyContent(NORMAL);
JustifyContent.SPACE_BETWEEN = JustifyContent(SPACE_BETWEEN);
JustifyContent.SPACE_AROUND = JustifyContent(SPACE_AROUND);
JustifyContent.SPACE_EVENLY = JustifyContent(SPACE_EVENLY);
JustifyContent.STRETCH = JustifyContent(STRETCH);
JustifyContent.CENTER = JustifyContent(CENTER);
JustifyContent.START = JustifyContent(START);
JustifyContent.END = JustifyContent(END);
JustifyContent.FLEX_START = JustifyContent(FLEX_START);
JustifyContent.FLEX_END = JustifyContent(FLEX_END);
JustifyContent.LEFT = JustifyContent(LEFT);
JustifyContent.RIGHT = JustifyContent(RIGHT);
JustifyContent.safe = (...values) => JustifyContent(SAFE, ...values);
JustifyContent.unsafe = (...values) => JustifyContent(UNSAFE, ...values);
export { JustifyContent };

const JustifyItems = property('justifyItems');
JustifyItems.NORMAL = JustifyItems(NORMAL);
JustifyItems.STRETCH = JustifyItems(STRETCH);
JustifyItems.BASELINE = JustifyItems(BASELINE);
JustifyItems.FIRST_BASELINE = JustifyItems(FIRST, BASELINE);
JustifyItems.LAST_BASELINE = JustifyItems(LAST, BASELINE);
JustifyItems.CENTER = JustifyItems(CENTER);
JustifyItems.START = JustifyItems(START);
JustifyItems.END = JustifyItems(END);
JustifyItems.SELF_START = JustifyItems(SELF_START);
JustifyItems.SELF_END = JustifyItems(SELF_END);
JustifyItems.FLEX_START = JustifyItems(FLEX_START);
JustifyItems.FLEX_END = JustifyItems(FLEX_END);
JustifyItems.LEFT = JustifyItems(LEFT);
JustifyItems.RIGHT = JustifyItems(RIGHT);
JustifyItems.LEGACY = JustifyItems(LEGACY);
JustifyItems.safe = (...values) => JustifyItems(SAFE, ...values);
JustifyItems.unsafe = (...values) => JustifyItems(UNSAFE, ...values);
JustifyItems.legacy = (...values) => JustifyItems(LEGACY, ...values);
export { JustifyItems };

const JustifySelf = property('justifySelf');
JustifySelf.AUTO = JustifySelf(AUTO);
JustifySelf.NORMAL = JustifySelf(NORMAL);
JustifySelf.STRETCH = JustifySelf(STRETCH);
JustifySelf.BASELINE = JustifySelf(BASELINE);
JustifySelf.FIRST_BASELINE = JustifySelf(FIRST, BASELINE);
JustifySelf.LAST_BASELINE = JustifySelf(LAST, BASELINE);
JustifySelf.CENTER = JustifySelf(CENTER);
JustifySelf.START = JustifySelf(START);
JustifySelf.END = JustifySelf(END);
JustifySelf.FLEX_START = JustifySelf(FLEX_START);
JustifySelf.FLEX_END = JustifySelf(FLEX_END);
JustifySelf.SELF_START = JustifySelf(SELF_START);
JustifySelf.SELF_END = JustifySelf(SELF_END);
JustifySelf.RIGHT = JustifySelf(RIGHT);
JustifySelf.LEGACY = JustifySelf(LEGACY);
JustifySelf.safe = (...values) => JustifySelf(SAFE, ...values);
JustifySelf.unsafe = (...values) => JustifySelf(UNSAFE, ...values);
export { JustifySelf };

/* Align */

const AlignContent = property('alignContent');
AlignContent.NORMAL = AlignContent(NORMAL);
AlignContent.BASELINE = AlignContent(BASELINE);
AlignContent.FIRST_BASELINE = AlignContent(FIRST, BASELINE);
AlignContent.LAST_BASELINE = AlignContent(LAST, BASELINE);
AlignContent.SPACE_BETWEEN = AlignContent(SPACE_BETWEEN);
AlignContent.SPACE_AROUND = AlignContent(SPACE_AROUND);
AlignContent.SPACE_AROUND = AlignContent(SPACE_EVENLY);
AlignContent.STRETCH = AlignContent(STRETCH);
AlignContent.CENTER = AlignContent(CENTER);
AlignContent.START = AlignContent(START);
AlignContent.END = AlignContent(END);
AlignContent.FLEX_START = AlignContent(FLEX_START);
AlignContent.FLEX_END = AlignContent(FLEX_END);
AlignContent.safe = (...values) => AlignContent(SAFE, ...values);
AlignContent.unsafe = (...values) => AlignContent(UNSAFE, ...values);
export { AlignContent };

const AlignItems = property('alignItems');
AlignItems.NORMAL = AlignItems(NORMAL);
AlignItems.STRETCH = AlignItems(STRETCH);
AlignItems.BASELINE = AlignItems(BASELINE);
AlignItems.FIRST_BASELINE = AlignItems(FIRST, BASELINE);
AlignItems.LAST_BASELINE = AlignItems(LAST, BASELINE);
AlignItems.CENTER = AlignItems(CENTER);
AlignItems.START = AlignItems(START);
AlignItems.END = AlignItems(END);
AlignItems.FLEX_START = AlignItems(FLEX_START);
AlignItems.FLEX_END = AlignItems(FLEX_END);
AlignItems.SELF_START = AlignItems(SELF_START);
AlignItems.SELF_END = AlignItems(SELF_END);
AlignItems.safe = (...values) => AlignItems(SAFE, ...values);
AlignItems.unsafe = (...values) => AlignItems(UNSAFE, ...values);
export { AlignItems };

const AlignSelf = property('alignSelf');
AlignSelf.AUTO = AlignSelf(AUTO);
AlignSelf.NORMAL = AlignSelf(NORMAL);
AlignSelf.STRETCH = AlignSelf(STRETCH);
AlignSelf.BASELINE = AlignSelf(BASELINE);
AlignSelf.FIRST_BASELINE = AlignSelf(FIRST, BASELINE);
AlignSelf.LAST_BASELINE = AlignSelf(LAST, BASELINE);
AlignSelf.CENTER = AlignSelf(CENTER);
AlignSelf.START = AlignSelf(START);
AlignSelf.END = AlignSelf(END);
AlignSelf.FLEX_START = AlignSelf(FLEX_START);
AlignSelf.FLEX_END = AlignSelf(FLEX_END);
AlignSelf.SELF_START = AlignSelf(SELF_START);
AlignSelf.SELF_END = AlignSelf(SELF_END);
AlignSelf.safe = (...values) => AlignSelf(SAFE, ...values);
AlignSelf.unsafe = (...values) => AlignSelf(UNSAFE, ...values);
export { AlignSelf };

/* Place */

const PlaceContent = property('placeContent');
PlaceContent.NORMAL = PlaceContent(NORMAL);
PlaceContent.BASELINE = PlaceContent(BASELINE);
PlaceContent.FIRST_BASELINE = PlaceContent(FIRST, BASELINE);
PlaceContent.LAST_BASELINE = PlaceContent(LAST, BASELINE);
PlaceContent.SPACE_BETWEEN = PlaceContent(SPACE_BETWEEN);
PlaceContent.SPACE_AROUND = PlaceContent(SPACE_AROUND);
PlaceContent.SPACE_AROUND = PlaceContent(SPACE_EVENLY);
PlaceContent.STRETCH = PlaceContent(STRETCH);
PlaceContent.CENTER = PlaceContent(CENTER);
PlaceContent.START = PlaceContent(START);
PlaceContent.END = PlaceContent(END);
PlaceContent.FLEX_START = PlaceContent(FLEX_START);
PlaceContent.FLEX_END = PlaceContent(FLEX_END);
PlaceContent.safe = (...values) => PlaceContent(SAFE, ...values);
PlaceContent.unsafe = (...values) => PlaceContent(UNSAFE, ...values);
export { PlaceContent };

const PlaceItems = property('placeItems');
PlaceItems.NORMAL = PlaceItems(NORMAL);
PlaceItems.STRETCH = PlaceItems(STRETCH);
PlaceItems.BASELINE = PlaceItems(BASELINE);
PlaceItems.FIRST_BASELINE = PlaceItems(FIRST, BASELINE);
PlaceItems.LAST_BASELINE = PlaceItems(LAST, BASELINE);
PlaceItems.CENTER = PlaceItems(CENTER);
PlaceItems.START = PlaceItems(START);
PlaceItems.END = PlaceItems(END);
PlaceItems.FLEX_START = PlaceItems(FLEX_START);
PlaceItems.FLEX_END = PlaceItems(FLEX_END);
PlaceItems.SELF_START = PlaceItems(SELF_START);
PlaceItems.SELF_END = PlaceItems(SELF_END);
PlaceItems.safe = (...values) => PlaceItems(SAFE, ...values);
PlaceItems.unsafe = (...values) => PlaceItems(UNSAFE, ...values);
export { PlaceItems };

const PlaceSelf = property('placeSelf');
PlaceSelf.AUTO = PlaceSelf(AUTO);
PlaceSelf.NORMAL = PlaceSelf(NORMAL);
PlaceSelf.STRETCH = PlaceSelf(STRETCH);
PlaceSelf.BASELINE = PlaceSelf(BASELINE);
PlaceSelf.FIRST_BASELINE = PlaceSelf(FIRST, BASELINE);
PlaceSelf.LAST_BASELINE = PlaceSelf(LAST, BASELINE);
PlaceSelf.CENTER = PlaceSelf(CENTER);
PlaceSelf.START = PlaceSelf(START);
PlaceSelf.END = PlaceSelf(END);
PlaceSelf.FLEX_START = PlaceSelf(FLEX_START);
PlaceSelf.FLEX_END = PlaceSelf(FLEX_END);
PlaceSelf.SELF_START = PlaceSelf(SELF_START);
PlaceSelf.SELF_END = PlaceSelf(SELF_END);
PlaceSelf.safe = (...values) => PlaceSelf(SAFE, ...values);
PlaceSelf.unsafe = (...values) => PlaceSelf(UNSAFE, ...values);
export { PlaceSelf };
