import { property } from '../../utils';
import {
    AROUND, AUTO, BORDER_BOX, BOTTOM, BOUNDING_BOX, CLONE, CONTENT_BOX, EVENODD,
    FILL_BOX, LEFT, MATCH_PARENT, NO_REPEAT, NONE, NONZERO, PADDING_BOX, REPEAT,
    REPEAT_X, REPEAT_Y, RIGHT, SLICE, SPACE, STROKE_BOX, TOP, TRANSPARENT
} from '../../constants';

const Fill = property('fill');
export { Fill };

const FillRule = property('fillRule');
FillRule.NONZERO = FillRule(NONZERO);
FillRule.EVENODD = FillRule(EVENODD);
export { FillRule };

const FillBreak = property('fillBreak');
FillBreak.BOUNDING_BOX = FillBreak(BOUNDING_BOX);
FillBreak.SLICE = FillBreak(SLICE);
FillBreak.CLONE = FillBreak(CLONE);
export { FillBreak };

const FillColor = property('fillColor');
FillColor.TRANSPARENT = FillColor(TRANSPARENT);
export { FillColor };

const FillImage = property('fillImage');
FillImage.NONE = FillImage(NONE);
export { FillImage };

const FillOrigin = property('fillOrigin');
FillOrigin.MATCH_PARENT = FillOrigin(MATCH_PARENT);
FillOrigin.FILL_BOX = FillOrigin(FILL_BOX);
FillOrigin.STROKE_BOX = FillOrigin(STROKE_BOX);
FillOrigin.CONTENT_BOX = FillOrigin(CONTENT_BOX);
FillOrigin.PADDING_BOX = FillOrigin(PADDING_BOX);
FillOrigin.BORDER_BOX = FillOrigin(BORDER_BOX);
export { FillOrigin };

const FillPosition = property('fillPosition');
FillPosition.TOP = FillPosition(TOP);
FillPosition.RIGHT = FillPosition(RIGHT);
FillPosition.LEFT = FillPosition(LEFT);
FillPosition.BOTTOM = FillPosition(BOTTOM);
FillPosition.TOP_LEFT = FillPosition(TOP, LEFT);
FillPosition.TOP_RIGHT = FillPosition(TOP, RIGHT);
FillPosition.BOTTOM_LEFT = FillPosition(BOTTOM, LEFT);
FillPosition.BOTTOM_RIGHT = FillPosition(BOTTOM, RIGHT);
export { FillPosition };

const FillSize = property('fillSize');
FillSize.AUTO = FillSize(AUTO);
export { FillSize };

const FillRepeat = property('fillRepeat');
FillRepeat.REPEAT = FillRepeat(REPEAT);
FillRepeat.REPEAT_X = FillRepeat(REPEAT_X);
FillRepeat.REPEAT_Y = FillRepeat(REPEAT_Y);
FillRepeat.SPACE = FillRepeat(SPACE);
FillRepeat.AROUND = FillRepeat(AROUND);
FillRepeat.NO_REPEAT = FillRepeat(NO_REPEAT);
export { FillRepeat };

const FillOpacity = property('fillOpacity');
export { FillOpacity };
