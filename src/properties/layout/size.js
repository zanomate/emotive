import { property } from '../../utils';
import {
    AUTO, BOTH, HORIZONTAL, LANDSCAPE, MAX_CONTENT, MIN_CONTENT, NONE, PORTRAIT,
    VERTICAL
} from '../../constants';
import { fitContent } from '../../methods/index';

const Size = property('size');
Size.AUTO = Size(AUTO);
Size.PORTRAIT = Size(PORTRAIT);
Size.LANDSCAPE = Size(LANDSCAPE);
export { Size };

const BlockSize = property('blockSize');
BlockSize.AUTO = BlockSize(AUTO);
export { BlockSize };

const InlineSize = property('inlineSize');
InlineSize.AUTO = InlineSize(AUTO);
export { InlineSize };

const MinBlockSize = property('minBlockSize');
export { MinBlockSize };

const MinInlineSize = property('minInlineSize');
export { MinInlineSize };

const MaxBlockSize = property('maxBlockSize');
MaxBlockSize.NONE = MaxBlockSize(NONE);
export { MaxBlockSize };

const MaxInlineSize = property('maxInlineSize');
MaxInlineSize.NONE = MaxInlineSize(NONE);
export { MaxInlineSize };

const Resize = property('resize');
Resize.NONE = Resize(NONE);
Resize.BOTH = Resize(BOTH);
Resize.HORIZONTAL = Resize(HORIZONTAL);
Resize.VERTICAL = Resize(VERTICAL);
export { Resize };

/* Width */

const Width = property('width');
Width.AUTO = Width(AUTO);
Width.MIN_CONTENT = Width(MIN_CONTENT);
Width.MAX_CONTENT = Width(MAX_CONTENT);
Width.fitContent = (...values) => Width(fitContent(...values));
export { Width };

const MinWidth = property('minWidth');
MinWidth.AUTO = MinWidth(AUTO);
MinWidth.MIN_CONTENT = MinWidth(MIN_CONTENT);
MinWidth.MAX_CONTENT = MinWidth(MAX_CONTENT);
MinWidth.fitContent = (...values) => MinWidth(fitContent(...values));
export { MinWidth };

const MaxWidth = property('maxWidth');
MaxWidth.NONE = MaxWidth(NONE);
MaxWidth.MIN_CONTENT = MaxWidth(MIN_CONTENT);
MaxWidth.MAX_CONTENT = MaxWidth(MAX_CONTENT);
MaxWidth.fitContent = (...values) => MaxWidth(fitContent(...values));
export { MaxWidth };

/* Height */

const Height = property('height');
Height.AUTO = Height(AUTO);
Height.MIN_CONTENT = Height(MIN_CONTENT);
Height.MAX_CONTENT = Height(MAX_CONTENT);
Height.fitContent = (...values) => Height(fitContent(...values));
export { Height };

const MinHeight = property('minHeight');
MinHeight.AUTO = MinHeight(AUTO);
MinHeight.MIN_CONTENT = MinHeight(MIN_CONTENT);
MinHeight.MAX_CONTENT = MinHeight(MAX_CONTENT);
MinHeight.fitContent = (...values) => MinHeight(fitContent(...values));
export { MinHeight };

const MaxHeight = property('maxHeight');
MaxHeight.NONE = MaxHeight(NONE);
MaxHeight.MIN_CONTENT = MaxHeight(MIN_CONTENT);
MaxHeight.MAX_CONTENT = MaxHeight(MAX_CONTENT);
MaxHeight.fitContent = (...values) => MaxHeight(fitContent(...values));
export { MaxHeight };
