import { property } from '../../utils/factory';
import {
    ARCS, AROUND, AUTO, BEVEL, BORDER_BOX, BOTTOM, BOUNDING_BOX, BUTT, CENTER,
    CLONE, COMPRESS, CONTENT_BOX, CROP, DASHES, FILL_BOX, GAPS, INSET, LEFT,
    MATCH_PARENT, MITER, NO_REPEAT, NONE, OUTSET, PADDING_BOX, REPEAT, REPEAT_X,
    REPEAT_Y, RIGHT, ROUND, SLICE, SPACE, SQUARE, STRETCH, STROKE_BOX, STUPID,
    TOP, TRANSPARENT
} from '../../constants';

const Stroke = property('stroke');
export { Stroke };

const StrokeWidth = property('strokeWidth');
export { StrokeWidth };

const StrokeAlign = property('strokeAlign');
StrokeAlign.CENTER = StrokeAlign(CENTER);
StrokeAlign.INSET = StrokeAlign(INSET);
StrokeAlign.OUTSET = StrokeAlign(OUTSET);
export { StrokeAlign };

const StrokeLinecap = property('strokeLinecap');
StrokeLinecap.BUTT = StrokeLinecap(BUTT);
StrokeLinecap.ROUND = StrokeLinecap(ROUND);
StrokeLinecap.SQUARE = StrokeLinecap(SQUARE);
export { StrokeLinecap };

const StrokeLinejoin = property('strokeLinejoin');
StrokeLinejoin.CROP = StrokeLinejoin(CROP);
StrokeLinejoin.ARCS = StrokeLinejoin(ARCS);
StrokeLinejoin.MITER = StrokeLinejoin(MITER);
StrokeLinejoin.BEVEL = StrokeLinejoin(BEVEL);
StrokeLinejoin.ROUND = StrokeLinejoin(ROUND);
StrokeLinejoin.STUPID = StrokeLinejoin(STUPID);
export { StrokeLinejoin };

const StrokeMiterlimit = property('strokeMiterlimit');
export { StrokeMiterlimit };

const StrokeBreak = property('strokeBreak');
StrokeBreak.BOUNDING_BOX = StrokeBreak(BOUNDING_BOX);
StrokeBreak.SLICE = StrokeBreak(SLICE);
StrokeBreak.CLONE = StrokeBreak(CLONE);
export { StrokeBreak };

const StrokeDasharray = property('strokeDasharray');
StrokeDasharray.NONE = StrokeDasharray(NONE);
export { StrokeDasharray };

const StrokeDashoffset = property('strokeDashoffset');
export { StrokeDashoffset };

const StrokeDashCorner = property('strokeDashCorner');
StrokeDashCorner.NONE = StrokeDashCorner(NONE);
export { StrokeDashCorner };

const StrokeDashJustify = property('strokeDashJustify');
StrokeDashJustify.NONE = StrokeDashJustify(NONE);
StrokeDashJustify.NONE = StrokeDashJustify(STRETCH);
StrokeDashJustify.NONE = StrokeDashJustify(COMPRESS);
StrokeDashJustify.NONE = StrokeDashJustify(DASHES);
StrokeDashJustify.NONE = StrokeDashJustify(GAPS);
export { StrokeDashJustify };

const StrokeColor = property('strokeColor');
StrokeColor.TRANSPARENT = StrokeColor(TRANSPARENT);
export { StrokeColor };

const StrokeImage = property('strokeImage');
StrokeImage.NONE = StrokeImage(NONE);
export { StrokeImage };

const StrokeOrigin = property('strokeOrigin');
StrokeOrigin.MATCH_PARENT = StrokeOrigin(MATCH_PARENT);
StrokeOrigin.FILL_BOX = StrokeOrigin(FILL_BOX);
StrokeOrigin.STROKE_BOX = StrokeOrigin(STROKE_BOX);
StrokeOrigin.CONTENT_BOX = StrokeOrigin(CONTENT_BOX);
StrokeOrigin.PADDING_BOX = StrokeOrigin(PADDING_BOX);
StrokeOrigin.BORDER_BOX = StrokeOrigin(BORDER_BOX);
export { StrokeOrigin };

const StrokePosition = property('strokePosition');
StrokePosition.TOP = StrokePosition(TOP);
StrokePosition.RIGHT = StrokePosition(RIGHT);
StrokePosition.LEFT = StrokePosition(LEFT);
StrokePosition.BOTTOM = StrokePosition(BOTTOM);
StrokePosition.TOP_LEFT = StrokePosition(TOP, LEFT);
StrokePosition.TOP_RIGHT = StrokePosition(TOP, RIGHT);
StrokePosition.BOTTOM_LEFT = StrokePosition(BOTTOM, LEFT);
StrokePosition.BOTTOM_RIGHT = StrokePosition(BOTTOM, RIGHT);
export { StrokePosition };

const StrokeSize = property('strokeSize');
StrokeSize.AUTO = StrokeSize(AUTO);
export { StrokeSize };

const StrokeRepeat = property('strokeRepeat');
StrokeRepeat.REPEAT = StrokeRepeat(REPEAT);
StrokeRepeat.REPEAT_X = StrokeRepeat(REPEAT_X);
StrokeRepeat.REPEAT_Y = StrokeRepeat(REPEAT_Y);
StrokeRepeat.SPACE = StrokeRepeat(SPACE);
StrokeRepeat.AROUND = StrokeRepeat(AROUND);
StrokeRepeat.NO_REPEAT = StrokeRepeat(NO_REPEAT);
export { StrokeRepeat };

const StrokeOpacity = property('strokeOpacity');
export { StrokeOpacity };
