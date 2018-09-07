import { property } from '../../utils/factory';
import {
    AROUND, AUTO, BORDER_BOX, BOTTOM, CONTAIN, CONTENT_BOX, COVER, FIXED, LEFT,
    LOCAL, NO_REPEAT, NONE, PADDING_BOX, REPEAT, REPEAT_X, REPEAT_Y, RIGHT,
    SCROLL, SPACE, TOP, TRANSPARENT
} from '../../constants';

const Background = property('background');
export { Background };

const BackgroundColor = property('backgroundColor');
BackgroundColor.TRANSPARENT = BackgroundColor(TRANSPARENT);
export { BackgroundColor };

const BackgroundImage = property('backgroundImage');
BackgroundImage.NONE = BackgroundImage(NONE);
export { BackgroundImage };

const BackgroundRepeat = property('backgroundRepeat');
BackgroundRepeat.REPEAT = BackgroundRepeat(REPEAT);
BackgroundRepeat.REPEAT_X = BackgroundRepeat(REPEAT_X);
BackgroundRepeat.REPEAT_Y = BackgroundRepeat(REPEAT_Y);
BackgroundRepeat.SPACE = BackgroundRepeat(SPACE);
BackgroundRepeat.AROUND = BackgroundRepeat(AROUND);
BackgroundRepeat.NO_REPEAT = BackgroundRepeat(NO_REPEAT);
export { BackgroundRepeat };

const BackgroundAttachment = property('backgroundAttachment');
BackgroundAttachment.FIXED = BackgroundAttachment(FIXED);
BackgroundAttachment.LOCAL = BackgroundAttachment(LOCAL);
BackgroundAttachment.SCROLL = BackgroundAttachment(SCROLL);
export { BackgroundAttachment };

const BackgroundPosition = property('backgroundPosition');
BackgroundPosition.TOP = BackgroundPosition(TOP);
BackgroundPosition.RIGHT = BackgroundPosition(RIGHT);
BackgroundPosition.LEFT = BackgroundPosition(LEFT);
BackgroundPosition.BOTTOM = BackgroundPosition(BOTTOM);
BackgroundPosition.TOP_LEFT = BackgroundPosition(TOP, LEFT);
BackgroundPosition.TOP_RIGHT = BackgroundPosition(TOP, RIGHT);
BackgroundPosition.BOTTOM_LEFT = BackgroundPosition(BOTTOM, LEFT);
BackgroundPosition.BOTTOM_RIGHT = BackgroundPosition(BOTTOM, RIGHT);
export { BackgroundPosition };

const BackgroundClip = property('backgroundClip');
BackgroundClip.BORDER_BOX = BackgroundClip(BORDER_BOX);
BackgroundClip.PADDING_BOX = BackgroundClip(PADDING_BOX);
BackgroundClip.CONTENT_BOX = BackgroundClip(CONTENT_BOX);
export { BackgroundClip };

const BackgroundOrigin = property('backgroundOrigin');
BackgroundOrigin.BORDER_BOX = BackgroundOrigin(BORDER_BOX);
BackgroundOrigin.PADDING_BOX = BackgroundOrigin(PADDING_BOX);
BackgroundOrigin.CONTENT_BOX = BackgroundOrigin(CONTENT_BOX);
export { BackgroundOrigin };

const BackgroundSize = property('backgroundSize');
BackgroundSize.AUTO = BackgroundSize(AUTO);
BackgroundSize.CONTAIN = BackgroundSize(CONTAIN);
BackgroundSize.COVER = BackgroundSize(COVER);
export { BackgroundSize };
