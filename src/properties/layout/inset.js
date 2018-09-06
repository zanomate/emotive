import { property } from '../../utils';
import { AUTO } from '../../constants';

const Inset = property('inset');
Inset.AUTO = Inset(AUTO);
export { Inset };

const InsetBlock = property('insetBlock');
InsetBlock.AUTO = InsetBlock(AUTO);
export { InsetBlock };

const InsetBlockStart = property('insetBlockStart');
InsetBlockStart.AUTO = InsetBlockStart(AUTO);
export { InsetBlockStart };

const InsetBlockEnd = property('insetBlockEnd');
InsetBlockEnd.AUTO = InsetBlockEnd(AUTO);
export { InsetBlockEnd };

const InsetInline = property('insetInline');
InsetInline.AUTO = InsetInline(AUTO);
export { InsetInline };

const InsetInlineStart = property('insetInlineStart');
InsetInlineStart.AUTO = InsetInlineStart(AUTO);
export { InsetInlineStart };

const InsetInlineEnd = property('insetInlineEnd');
InsetInlineEnd.AUTO = InsetInlineEnd(AUTO);
export { InsetInlineEnd };
