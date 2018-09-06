import { property } from '../../utils';
import { AUTO } from '../../constants';

const Margin = property('margin');
Margin.AUTO = Margin(AUTO);
export { Margin };

const MarginTop = property('marginTop');
MarginTop.AUTO = MarginTop(AUTO);
export { MarginTop };

const MarginBottom = property('marginBottom');
MarginBottom.AUTO = MarginBottom(AUTO);
export { MarginBottom };

const MarginLeft = property('marginLeft');
MarginLeft.AUTO = MarginLeft(AUTO);
export { MarginLeft };

const MarginRight = property('marginRight');
MarginRight.AUTO = MarginRight(AUTO);
export { MarginRight };

const MarginBlock = property('marginBlock');
MarginBlock.AUTO = MarginBlock(AUTO);
export { MarginBlock };

const MarginInline = property('marginInline');
MarginInline.AUTO = MarginInline(AUTO);
export { MarginInline };

const MarginBlockStart = property('marginBlockStart');
MarginBlockStart.AUTO = MarginBlockStart(AUTO);
export { MarginBlockStart };

const MarginBlockEnd = property('marginBlockEnd');
MarginBlockEnd.AUTO = MarginBlockEnd(AUTO);
export { MarginBlockEnd };

const MarginInlineStart = property('marginInlineStart');
MarginInlineStart.AUTO = MarginInlineStart(AUTO);
export { MarginInlineStart };

const MarginInlineEnd = property('marginInlineEnd');
MarginInlineEnd.AUTO = MarginInlineEnd(AUTO);
export { MarginInlineEnd };
