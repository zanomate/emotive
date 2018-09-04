import { property } from '../../../utils';
import {
    ADD, ALPHA, AUTO, BORDER_BOX, BOTTOM, CENTER, CONTAIN, CONTENT_BOX, COVER, EXCLUDE, FILL, FILL_BOX, INTERSECT, LEFT,
    LUMINANCE, MARGIN_BOX, NO_CLIP, NO_REPEAT, NONE, PADDING_BOX, REPEAT, REPEAT_X, REPEAT_Y, RIGHT, ROUND, SPACE,
    STRETCH, STROKE_BOX, SUBTRACT, TOP, VIEW_BOX
} from '../../../constants';

export const mask = property('mask');

export const maskImage = property('maskImage');
maskImage.NONE = maskImage(NONE);

export const maskMode = property('maskMode');
maskMode.AUTO = maskMode(AUTO);
maskMode.ALPHA = maskMode(ALPHA);
maskMode.LUMINANCE = maskMode(LUMINANCE);

export const maskRepeat = property('maskRepeat');
maskRepeat.REPEAT = maskRepeat(REPEAT);
maskRepeat.REPEAT_X = maskRepeat(REPEAT_X);
maskRepeat.REPEAT_Y = maskRepeat(REPEAT_Y);
maskRepeat.SPACE = maskRepeat(SPACE);
maskRepeat.ROUND = maskRepeat(ROUND);
maskRepeat.NO_REPEAT = maskRepeat(NO_REPEAT);

export const maskPosition = property('maskPosition');
maskPosition.CENTER = maskPosition(CENTER);
maskPosition.TOP = maskPosition(TOP);
maskPosition.LEFT = maskPosition(LEFT);
maskPosition.RIGHT = maskPosition(RIGHT);
maskPosition.BOTTOM = maskPosition(BOTTOM);

export const maskClip = property('maskClip');
maskClip.NO_CLIP = maskClip(NO_CLIP);
maskClip.FILL_BOX = maskClip(FILL_BOX);
maskClip.STROKE_BOX = maskClip(STROKE_BOX);
maskClip.VIEW_BOX = maskClip(VIEW_BOX);
maskClip.MARGIN_BOX = maskClip(MARGIN_BOX);
maskClip.BORDER_BOX = maskClip(BORDER_BOX);
maskClip.PADDING_BOX = maskClip(PADDING_BOX);
maskClip.CONTENT_BOX = maskClip(CONTENT_BOX);

export const maskOrigin = property('maskOrigin');
maskOrigin.FILL_BOX = maskOrigin(FILL_BOX);
maskOrigin.STROKE_BOX = maskOrigin(STROKE_BOX);
maskOrigin.VIEW_BOX = maskOrigin(VIEW_BOX);
maskOrigin.MARGIN_BOX = maskOrigin(MARGIN_BOX);
maskOrigin.BORDER_BOX = maskOrigin(BORDER_BOX);
maskOrigin.PADDING_BOX = maskOrigin(PADDING_BOX);
maskOrigin.CONTENT_BOX = maskOrigin(CONTENT_BOX);

export const maskSize = property('maskSize');
maskSize.AUTO = maskSize(AUTO);
maskSize.COVER = maskSize(COVER);
maskSize.CONTAIN = maskSize(CONTAIN);

export const maskComposite = property('maskComposite');
maskComposite.ADD = maskComposite(ADD);
maskComposite.SUBTRACT = maskComposite(SUBTRACT);
maskComposite.INTERSECT = maskComposite(INTERSECT);
maskComposite.EXCLUDE = maskComposite(EXCLUDE);

export const maskBorder = property('maskBorder');

export const maskBorderSource = property('maskBorderSource');
maskBorderSource.NONE = maskBorderSource(NONE);

export const maskBorderMode = property('maskBorderMode');
maskBorderMode.ALPHA = maskBorderMode(ALPHA);
maskBorderMode.LUMINANCE = maskBorderMode(LUMINANCE);

export const maskBorderSlice = property('maskBorderSlice');
maskBorderSlice.FILL = maskBorderMode(FILL);

export const maskBorderWidth = property('maskBorderWidth');
maskBorderWidth.AUTO = maskBorderWidth(AUTO);

export const maskBorderOutset = property('maskBorderOutset');

export const maskBorderRepeat = property('maskBorderRepeat');
maskBorderRepeat.STRETCH = maskBorderRepeat(STRETCH);
maskBorderRepeat.REPEAT = maskBorderRepeat(REPEAT);
maskBorderRepeat.ROUND = maskBorderRepeat(ROUND);
maskBorderRepeat.SPACE = maskBorderRepeat(SPACE);

export const maskType = property('maskType');
maskType.ALPHA = maskType(ALPHA);
maskType.LUMINANCE = maskType(LUMINANCE);
