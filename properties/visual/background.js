import { property } from '../../utils';
import {
    AROUND, AUTO, BORDER_BOX, BOTTOM, CONTAIN, CONTENT_BOX, COVER, FIXED, LEFT, LOCAL, NO_REPEAT, NONE, PADDING_BOX,
    REPEAT, REPEAT_X, REPEAT_Y, RIGHT, SCROLL, SPACE, TOP, TRANSPARENT
} from '../../constants';

export const background = property('background');

export const backgroundColor = property('backgroundColor');
backgroundColor.TRANSPARENT = backgroundColor(TRANSPARENT);

export const backgroundImage = property('backgroundImage');
backgroundImage.NONE = backgroundImage(NONE);

export const backgroundRepeat = property('backgroundRepeat');
backgroundRepeat.REPEAT = backgroundRepeat(REPEAT);
backgroundRepeat.REPEAT_X = backgroundRepeat(REPEAT_X);
backgroundRepeat.REPEAT_Y = backgroundRepeat(REPEAT_Y);
backgroundRepeat.SPACE = backgroundRepeat(SPACE);
backgroundRepeat.AROUND = backgroundRepeat(AROUND);
backgroundRepeat.NO_REPEAT = backgroundRepeat(NO_REPEAT);

export const backgroundAttachment = property('backgroundAttachment');
backgroundAttachment.FIXED = backgroundAttachment(FIXED);
backgroundAttachment.LOCAL = backgroundAttachment(LOCAL);
backgroundAttachment.SCROLL = backgroundAttachment(SCROLL);

export const backgroundPosition = property('backgroundPosition');
backgroundPosition.TOP = backgroundPosition(TOP);
backgroundPosition.RIGHT = backgroundPosition(RIGHT);
backgroundPosition.LEFT = backgroundPosition(LEFT);
backgroundPosition.BOTTOM = backgroundPosition(BOTTOM);
backgroundPosition.TOP_LEFT = backgroundPosition(TOP, LEFT);
backgroundPosition.TOP_RIGHT = backgroundPosition(TOP, RIGHT);
backgroundPosition.BOTTOM_LEFT = backgroundPosition(BOTTOM, LEFT);
backgroundPosition.BOTTOM_RIGHT = backgroundPosition(BOTTOM, RIGHT);

export const backgroundClip = property('backgroundClip');
backgroundClip.BORDER_BOX = backgroundClip(BORDER_BOX);
backgroundClip.PADDING_BOX = backgroundClip(PADDING_BOX);
backgroundClip.CONTENT_BOX = backgroundClip(CONTENT_BOX);

export const backgroundOrigin = property('backgroundOrigin');
backgroundOrigin.BORDER_BOX = backgroundOrigin(BORDER_BOX);
backgroundOrigin.PADDING_BOX = backgroundOrigin(PADDING_BOX);
backgroundOrigin.CONTENT_BOX = backgroundOrigin(CONTENT_BOX);

export const backgroundSize = property('backgroundSize');
backgroundSize.AUTO = backgroundSize(AUTO);
backgroundSize.CONTAIN = backgroundSize(CONTAIN);
backgroundSize.COVER = backgroundSize(COVER);
