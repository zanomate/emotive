import { property } from '../../utils/factory';
import {
    AUTO, BORDER_BOX, CONTENT_BOX, EVENODD, FILL_BOX, MARGIN_BOX, NONE, NONZERO,
    PADDING_BOX, STROKE_BOX, VIEW_BOX
} from '../../constants';
import { rect } from '../../methods';

const Clip = property('clip');
Clip.AUTO = Clip(AUTO);
Clip.rect = (...values) => Clip(rect(...values));
export { Clip };

const ClipPath = property('clipPath');
ClipPath.NONE = ClipPath(NONE);
ClipPath.FILL_BOX = ClipPath(FILL_BOX);
ClipPath.STROKE_BOX = ClipPath(STROKE_BOX);
ClipPath.VIEW_BOX = ClipPath(VIEW_BOX);
ClipPath.MARGIN_BOX = ClipPath(MARGIN_BOX);
ClipPath.BORDER_BOX = ClipPath(BORDER_BOX);
ClipPath.PADDING_BOX = ClipPath(PADDING_BOX);
ClipPath.CONTENT_BOX = ClipPath(CONTENT_BOX);
export { ClipPath };

const ClipRule = property('clipRule');
ClipRule.NONZERO = ClipRule(NONZERO);
ClipRule.EVENODD = ClipRule(EVENODD);
export { ClipRule };
