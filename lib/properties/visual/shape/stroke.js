import { property } from 'utils/index';
import {
    ARCS, AROUND, AUTO, BEVEL, BORDER_BOX, BOTTOM, BOUNDING_BOX, BUTT, CENTER, CLONE, COMPRESS, CONTENT_BOX, CROP,
    DASHES, FILL_BOX, GAPS, INSET, LEFT, MATCH_PARENT, MITER, NO_REPEAT, NONE, OUTSET, PADDING_BOX, REPEAT, REPEAT_X,
    REPEAT_Y, RIGHT, ROUND, SLICE, SPACE, SQUARE, STRETCH, STROKE_BOX, STUPID, TOP, TRANSPARENT
} from 'constants/index';

export const stroke = property('stroke');

export const strokeWidth = property('strokeWidth');

export const strokeAlign = property('strokeAlign');
strokeAlign.CENTER = strokeAlign(CENTER);
strokeAlign.INSET = strokeAlign(INSET);
strokeAlign.OUTSET = strokeAlign(OUTSET);

export const strokeLinecap = property('strokeLinecap');
strokeLinecap.BUTT = strokeLinecap(BUTT);
strokeLinecap.ROUND = strokeLinecap(ROUND);
strokeLinecap.SQUARE = strokeLinecap(SQUARE);

export const strokeLinejoin = property('strokeLinejoin');
strokeLinejoin.CROP = strokeLinejoin(CROP);
strokeLinejoin.ARCS = strokeLinejoin(ARCS);
strokeLinejoin.MITER = strokeLinejoin(MITER);
strokeLinejoin.BEVEL = strokeLinejoin(BEVEL);
strokeLinejoin.ROUND = strokeLinejoin(ROUND);
strokeLinejoin.STUPID = strokeLinejoin(STUPID);

export const strokeMiterlimit = property('strokeMiterlimit');

export const strokeBreak = property('strokeBreak');
strokeBreak.BOUNDING_BOX = strokeBreak(BOUNDING_BOX);
strokeBreak.SLICE = strokeBreak(SLICE);
strokeBreak.CLONE = strokeBreak(CLONE);

export const strokeDasharray = property('strokeDasharray');
strokeDasharray.NONE = strokeDasharray(NONE);

export const strokeDashoffset = property('strokeDashoffset');

export const strokeDashCorner = property('strokeDashCorner');
strokeDashCorner.NONE = strokeDashCorner(NONE);

export const strokeDashJustify = property('strokeDashJustify');
strokeDashJustify.NONE = strokeDashJustify(NONE);
strokeDashJustify.NONE = strokeDashJustify(STRETCH);
strokeDashJustify.NONE = strokeDashJustify(COMPRESS);
strokeDashJustify.NONE = strokeDashJustify(DASHES);
strokeDashJustify.NONE = strokeDashJustify(GAPS);

export const strokeColor = property('strokeColor');
strokeColor.TRANSPARENT = strokeColor(TRANSPARENT);

export const strokeImage = property('strokeImage');
strokeImage.NONE = strokeImage(NONE);

export const strokeOrigin = property('strokeOrigin');
strokeOrigin.MATCH_PARENT = strokeOrigin(MATCH_PARENT);
strokeOrigin.FILL_BOX = strokeOrigin(FILL_BOX);
strokeOrigin.STROKE_BOX = strokeOrigin(STROKE_BOX);
strokeOrigin.CONTENT_BOX = strokeOrigin(CONTENT_BOX);
strokeOrigin.PADDING_BOX = strokeOrigin(PADDING_BOX);
strokeOrigin.BORDER_BOX = strokeOrigin(BORDER_BOX);

export const strokePosition = property('strokePosition');
strokePosition.TOP = strokePosition(TOP);
strokePosition.RIGHT = strokePosition(RIGHT);
strokePosition.LEFT = strokePosition(LEFT);
strokePosition.BOTTOM = strokePosition(BOTTOM);
strokePosition.TOP_LEFT = strokePosition(TOP, LEFT);
strokePosition.TOP_RIGHT = strokePosition(TOP, RIGHT);
strokePosition.BOTTOM_LEFT = strokePosition(BOTTOM, LEFT);
strokePosition.BOTTOM_RIGHT = strokePosition(BOTTOM, RIGHT);

export const strokeSize = property('strokeSize');
strokeSize.AUTO = strokeSize(AUTO);

export const strokeRepeat = property('strokeRepeat');
strokeRepeat.REPEAT = strokeRepeat(REPEAT);
strokeRepeat.REPEAT_X = strokeRepeat(REPEAT_X);
strokeRepeat.REPEAT_Y = strokeRepeat(REPEAT_Y);
strokeRepeat.SPACE = strokeRepeat(SPACE);
strokeRepeat.AROUND = strokeRepeat(AROUND);
strokeRepeat.NO_REPEAT = strokeRepeat(NO_REPEAT);

export const strokeOpacity = property('strokeOpacity');
