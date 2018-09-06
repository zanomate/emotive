import { property } from '../../utils';
import {
    ADD, ALPHA, AUTO, BORDER_BOX, BOTTOM, CENTER, CONTAIN, CONTENT_BOX, COVER,
    EXCLUDE, FILL, FILL_BOX, INTERSECT, LEFT, LUMINANCE, MARGIN_BOX, NO_CLIP,
    NO_REPEAT, NONE, PADDING_BOX, REPEAT, REPEAT_X, REPEAT_Y, RIGHT, ROUND,
    SPACE, STRETCH, STROKE_BOX, SUBTRACT, TOP, VIEW_BOX
} from '../../constants';

const Mask = property('mask');
export { Mask };

const MaskImage = property('maskImage');
MaskImage.NONE = MaskImage(NONE);
export { MaskImage };

const MaskMode = property('maskMode');
MaskMode.AUTO = MaskMode(AUTO);
MaskMode.ALPHA = MaskMode(ALPHA);
MaskMode.LUMINANCE = MaskMode(LUMINANCE);
export { MaskMode };

const MaskRepeat = property('maskRepeat');
MaskRepeat.REPEAT = MaskRepeat(REPEAT);
MaskRepeat.REPEAT_X = MaskRepeat(REPEAT_X);
MaskRepeat.REPEAT_Y = MaskRepeat(REPEAT_Y);
MaskRepeat.SPACE = MaskRepeat(SPACE);
MaskRepeat.ROUND = MaskRepeat(ROUND);
MaskRepeat.NO_REPEAT = MaskRepeat(NO_REPEAT);
export { MaskRepeat };

const MaskPosition = property('maskPosition');
MaskPosition.CENTER = MaskPosition(CENTER);
MaskPosition.TOP = MaskPosition(TOP);
MaskPosition.LEFT = MaskPosition(LEFT);
MaskPosition.RIGHT = MaskPosition(RIGHT);
MaskPosition.BOTTOM = MaskPosition(BOTTOM);
export { MaskPosition };

const MaskClip = property('maskClip');
MaskClip.NO_CLIP = MaskClip(NO_CLIP);
MaskClip.FILL_BOX = MaskClip(FILL_BOX);
MaskClip.STROKE_BOX = MaskClip(STROKE_BOX);
MaskClip.VIEW_BOX = MaskClip(VIEW_BOX);
MaskClip.MARGIN_BOX = MaskClip(MARGIN_BOX);
MaskClip.BORDER_BOX = MaskClip(BORDER_BOX);
MaskClip.PADDING_BOX = MaskClip(PADDING_BOX);
MaskClip.CONTENT_BOX = MaskClip(CONTENT_BOX);
export { MaskClip };

const MaskOrigin = property('maskOrigin');
MaskOrigin.FILL_BOX = MaskOrigin(FILL_BOX);
MaskOrigin.STROKE_BOX = MaskOrigin(STROKE_BOX);
MaskOrigin.VIEW_BOX = MaskOrigin(VIEW_BOX);
MaskOrigin.MARGIN_BOX = MaskOrigin(MARGIN_BOX);
MaskOrigin.BORDER_BOX = MaskOrigin(BORDER_BOX);
MaskOrigin.PADDING_BOX = MaskOrigin(PADDING_BOX);
MaskOrigin.CONTENT_BOX = MaskOrigin(CONTENT_BOX);
export { MaskOrigin };

const MaskSize = property('maskSize');
MaskSize.AUTO = MaskSize(AUTO);
MaskSize.COVER = MaskSize(COVER);
MaskSize.CONTAIN = MaskSize(CONTAIN);
export { MaskSize };

const MaskComposite = property('maskComposite');
MaskComposite.ADD = MaskComposite(ADD);
MaskComposite.SUBTRACT = MaskComposite(SUBTRACT);
MaskComposite.INTERSECT = MaskComposite(INTERSECT);
MaskComposite.EXCLUDE = MaskComposite(EXCLUDE);
export { MaskComposite };

const MaskBorder = property('maskBorder');
export { MaskBorder };

const MaskBorderSource = property('maskBorderSource');
MaskBorderSource.NONE = MaskBorderSource(NONE);
export { MaskBorderSource };

const MaskBorderMode = property('maskBorderMode');
MaskBorderMode.ALPHA = MaskBorderMode(ALPHA);
MaskBorderMode.LUMINANCE = MaskBorderMode(LUMINANCE);
export { MaskBorderMode };

const MaskBorderSlice = property('maskBorderSlice');
MaskBorderSlice.FILL = MaskBorderMode(FILL);
export { MaskBorderSlice };

const MaskBorderWidth = property('maskBorderWidth');
MaskBorderWidth.AUTO = MaskBorderWidth(AUTO);
export { MaskBorderWidth };

const MaskBorderOutset = property('maskBorderOutset');
export { MaskBorderOutset };

const MaskBorderRepeat = property('maskBorderRepeat');
MaskBorderRepeat.STRETCH = MaskBorderRepeat(STRETCH);
MaskBorderRepeat.REPEAT = MaskBorderRepeat(REPEAT);
MaskBorderRepeat.ROUND = MaskBorderRepeat(ROUND);
MaskBorderRepeat.SPACE = MaskBorderRepeat(SPACE);
export { MaskBorderRepeat };

const MaskType = property('maskType');
MaskType.ALPHA = MaskType(ALPHA);
MaskType.LUMINANCE = MaskType(LUMINANCE);
export { MaskType };
