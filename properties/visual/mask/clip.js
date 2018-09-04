import { property } from '../../../utils';
import {
    AUTO, BORDER_BOX, CONTENT_BOX, EVENODD, FILL_BOX, MARGIN_BOX, NONE, NONZERO, PADDING_BOX, STROKE_BOX, VIEW_BOX
} from '../../../constants';

export const clip = property('clip');
clip.AUTO = clip(AUTO);

export const clipPath = property('clipPath');
clipPath.NONE = clipPath(NONE);
clipPath.FILL_BOX = clipPath(FILL_BOX);
clipPath.STROKE_BOX = clipPath(STROKE_BOX);
clipPath.VIEW_BOX = clipPath(VIEW_BOX);
clipPath.MARGIN_BOX = clipPath(MARGIN_BOX);
clipPath.BORDER_BOX = clipPath(BORDER_BOX);
clipPath.PADDING_BOX = clipPath(PADDING_BOX);
clipPath.CONTENT_BOX = clipPath(CONTENT_BOX);

export const clipRule = property('clipRule');
clipRule.NONZERO = clipRule(NONZERO);
clipRule.EVENODD = clipRule(EVENODD);
