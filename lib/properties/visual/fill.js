import { property } from 'utils';
import {
    AROUND, AUTO, BORDER_BOX, BOTTOM, BOUNDING_BOX, CLONE, CONTENT_BOX, EVENODD, FILL_BOX, LEFT, MATCH_PARENT,
    NO_REPEAT, NONE, NONZERO, PADDING_BOX, REPEAT, REPEAT_X, REPEAT_Y, RIGHT, SLICE, SPACE, STROKE_BOX, TOP, TRANSPARENT
} from 'constants';

export const fill = property('fill');

export const fillRule = property('fillRule');
fillRule.NONZERO = fillRule(NONZERO);
fillRule.EVENODD = fillRule(EVENODD);

export const fillBreak = property('fillBreak');
fillBreak.BOUNDING_BOX = fillBreak(BOUNDING_BOX);
fillBreak.SLICE = fillBreak(SLICE);
fillBreak.CLONE = fillBreak(CLONE);

export const fillColor = property('fillColor');
fillColor.TRANSPARENT = fillColor(TRANSPARENT);

export const fillImage = property('fillImage');
fillImage.NONE = fillImage(NONE);

export const fillOrigin = property('fillOrigin');
fillOrigin.MATCH_PARENT = fillOrigin(MATCH_PARENT);
fillOrigin.FILL_BOX = fillOrigin(FILL_BOX);
fillOrigin.STROKE_BOX = fillOrigin(STROKE_BOX);
fillOrigin.CONTENT_BOX = fillOrigin(CONTENT_BOX);
fillOrigin.PADDING_BOX = fillOrigin(PADDING_BOX);
fillOrigin.BORDER_BOX = fillOrigin(BORDER_BOX);

export const fillPosition = property('fillPosition');
fillPosition.TOP = fillPosition(TOP);
fillPosition.RIGHT = fillPosition(RIGHT);
fillPosition.LEFT = fillPosition(LEFT);
fillPosition.BOTTOM = fillPosition(BOTTOM);
fillPosition.TOP_LEFT = fillPosition(TOP, LEFT);
fillPosition.TOP_RIGHT = fillPosition(TOP, RIGHT);
fillPosition.BOTTOM_LEFT = fillPosition(BOTTOM, LEFT);
fillPosition.BOTTOM_RIGHT = fillPosition(BOTTOM, RIGHT);

export const fillSize = property('fillSize');
fillSize.AUTO = fillSize(AUTO);

export const fillRepeat = property('fillRepeat');
fillRepeat.REPEAT = fillRepeat(REPEAT);
fillRepeat.REPEAT_X = fillRepeat(REPEAT_X);
fillRepeat.REPEAT_Y = fillRepeat(REPEAT_Y);
fillRepeat.SPACE = fillRepeat(SPACE);
fillRepeat.AROUND = fillRepeat(AROUND);
fillRepeat.NO_REPEAT = fillRepeat(NO_REPEAT);

export const fillOpacity = property('fillOpacity');
