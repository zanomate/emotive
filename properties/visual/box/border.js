import { property } from '../../../utils';
import {
    AUTO, DASHED, DOTTED, DOUBLE, GROOVE, HIDDEN, INSET, MEDIUM, NONE, OUTSET, REPEAT, RIDGE, ROUND, SOLID, SPACE,
    STRETCH, THICK, THIN
} from '../../../constants';

export const border = property('border');
border.hidden = (...values) => border(HIDDEN, ...values);
border.dotted = (...values) => border(DOTTED, ...values);
border.dashed = (...values) => border(DASHED, ...values);
border.solid = (...values) => border(SOLID, ...values);
border.double = (...values) => border(DOUBLE, ...values);
border.groove = (...values) => border(GROOVE, ...values);
border.ridge = (...values) => border(RIDGE, ...values);
border.inset = (...values) => border(INSET, ...values);
border.outset = (...values) => border(OUTSET, ...values);
border.thin = (...values) => border(THIN, SOLID, ...values);
border.medium = (...values) => border(MEDIUM, SOLID, ...values);
border.thick = (...values) => border(THICK, SOLID, ...values);

export const borderTop = property('borderTop');
borderTop.hidden = (...values) => borderTop(HIDDEN, ...values);
borderTop.dotted = (...values) => borderTop(DOTTED, ...values);
borderTop.dashed = (...values) => borderTop(DASHED, ...values);
borderTop.solid = (...values) => borderTop(SOLID, ...values);
borderTop.double = (...values) => borderTop(DOUBLE, ...values);
borderTop.groove = (...values) => borderTop(GROOVE, ...values);
borderTop.ridge = (...values) => borderTop(RIDGE, ...values);
borderTop.inset = (...values) => borderTop(INSET, ...values);
borderTop.outset = (...values) => borderTop(OUTSET, ...values);
borderTop.thin = (...values) => borderTop(THIN, SOLID, ...values);
borderTop.medium = (...values) => borderTop(MEDIUM, SOLID, ...values);
borderTop.thick = (...values) => borderTop(THICK, SOLID, ...values);

export const borderBottom = property('borderBottom');
borderBottom.hidden = (...values) => borderBottom(HIDDEN, ...values);
borderBottom.dotted = (...values) => borderBottom(DOTTED, ...values);
borderBottom.dashed = (...values) => borderBottom(DASHED, ...values);
borderBottom.solid = (...values) => borderBottom(SOLID, ...values);
borderBottom.double = (...values) => borderBottom(DOUBLE, ...values);
borderBottom.groove = (...values) => borderBottom(GROOVE, ...values);
borderBottom.ridge = (...values) => borderBottom(RIDGE, ...values);
borderBottom.inset = (...values) => borderBottom(INSET, ...values);
borderBottom.outset = (...values) => borderBottom(OUTSET, ...values);
borderBottom.thin = (...values) => borderBottom(THIN, SOLID, ...values);
borderBottom.medium = (...values) => borderBottom(MEDIUM, SOLID, ...values);
borderBottom.thick = (...values) => borderBottom(THICK, SOLID, ...values);

export const borderLeft = property('borderLeft');
borderLeft.hidden = (...values) => borderLeft(HIDDEN, ...values);
borderLeft.dotted = (...values) => borderLeft(DOTTED, ...values);
borderLeft.dashed = (...values) => borderLeft(DASHED, ...values);
borderLeft.solid = (...values) => borderLeft(SOLID, ...values);
borderLeft.double = (...values) => borderLeft(DOUBLE, ...values);
borderLeft.groove = (...values) => borderLeft(GROOVE, ...values);
borderLeft.ridge = (...values) => borderLeft(RIDGE, ...values);
borderLeft.inset = (...values) => borderLeft(INSET, ...values);
borderLeft.outset = (...values) => borderLeft(OUTSET, ...values);
borderLeft.thin = (...values) => borderLeft(THIN, SOLID, ...values);
borderLeft.medium = (...values) => borderLeft(MEDIUM, SOLID, ...values);
borderLeft.thick = (...values) => borderLeft(THICK, SOLID, ...values);

export const borderRight = property('borderRight');
borderRight.hidden = (...values) => borderRight(HIDDEN, ...values);
borderRight.dotted = (...values) => borderRight(DOTTED, ...values);
borderRight.dashed = (...values) => borderRight(DASHED, ...values);
borderRight.solid = (...values) => borderRight(SOLID, ...values);
borderRight.double = (...values) => borderRight(DOUBLE, ...values);
borderRight.groove = (...values) => borderRight(GROOVE, ...values);
borderRight.ridge = (...values) => borderRight(RIDGE, ...values);
borderRight.inset = (...values) => borderRight(INSET, ...values);
borderRight.outset = (...values) => borderRight(OUTSET, ...values);
borderRight.thin = (...values) => borderRight(THIN, SOLID, ...values);
borderRight.medium = (...values) => borderRight(MEDIUM, SOLID, ...values);
borderRight.thick = (...values) => borderRight(THICK, SOLID, ...values);

export const borderBlock = property('borderBlock');
borderBlock.hidden = (...values) => borderBlock(HIDDEN, ...values);
borderBlock.dotted = (...values) => borderBlock(DOTTED, ...values);
borderBlock.dashed = (...values) => borderBlock(DASHED, ...values);
borderBlock.solid = (...values) => borderBlock(SOLID, ...values);
borderBlock.double = (...values) => borderBlock(DOUBLE, ...values);
borderBlock.groove = (...values) => borderBlock(GROOVE, ...values);
borderBlock.ridge = (...values) => borderBlock(RIDGE, ...values);
borderBlock.inset = (...values) => borderBlock(INSET, ...values);
borderBlock.outset = (...values) => borderBlock(OUTSET, ...values);
borderBlock.thin = (...values) => borderBlock(THIN, SOLID, ...values);
borderBlock.medium = (...values) => borderBlock(MEDIUM, SOLID, ...values);
borderBlock.thick = (...values) => borderBlock(THICK, SOLID, ...values);

export const borderBlockStart = property('borderBlockStart');
borderBlockStart.hidden = (...values) => borderBlockStart(HIDDEN, ...values);
borderBlockStart.dotted = (...values) => borderBlockStart(DOTTED, ...values);
borderBlockStart.dashed = (...values) => borderBlockStart(DASHED, ...values);
borderBlockStart.solid = (...values) => borderBlockStart(SOLID, ...values);
borderBlockStart.double = (...values) => borderBlockStart(DOUBLE, ...values);
borderBlockStart.groove = (...values) => borderBlockStart(GROOVE, ...values);
borderBlockStart.ridge = (...values) => borderBlockStart(RIDGE, ...values);
borderBlockStart.inset = (...values) => borderBlockStart(INSET, ...values);
borderBlockStart.outset = (...values) => borderBlockStart(OUTSET, ...values);
borderBlockStart.thin = (...values) => borderBlockStart(THIN, SOLID, ...values);
borderBlockStart.medium = (...values) => borderBlockStart(MEDIUM, SOLID, ...values);
borderBlockStart.thick = (...values) => borderBlockStart(THICK, SOLID, ...values);

export const borderBlockEnd = property('borderBlockEnd');
borderBlockEnd.hidden = (...values) => borderBlockEnd(HIDDEN, ...values);
borderBlockEnd.dotted = (...values) => borderBlockEnd(DOTTED, ...values);
borderBlockEnd.dashed = (...values) => borderBlockEnd(DASHED, ...values);
borderBlockEnd.solid = (...values) => borderBlockEnd(SOLID, ...values);
borderBlockEnd.double = (...values) => borderBlockEnd(DOUBLE, ...values);
borderBlockEnd.groove = (...values) => borderBlockEnd(GROOVE, ...values);
borderBlockEnd.ridge = (...values) => borderBlockEnd(RIDGE, ...values);
borderBlockEnd.inset = (...values) => borderBlockEnd(INSET, ...values);
borderBlockEnd.outset = (...values) => borderBlockEnd(OUTSET, ...values);
borderBlockEnd.thin = (...values) => borderBlockEnd(THIN, SOLID, ...values);
borderBlockEnd.medium = (...values) => borderBlockEnd(MEDIUM, SOLID, ...values);
borderBlockEnd.thick = (...values) => borderBlockEnd(THICK, SOLID, ...values);

export const borderInline = property('borderInline');
borderInline.hidden = (...values) => borderInline(HIDDEN, ...values);
borderInline.dotted = (...values) => borderInline(DOTTED, ...values);
borderInline.dashed = (...values) => borderInline(DASHED, ...values);
borderInline.solid = (...values) => borderInline(SOLID, ...values);
borderInline.double = (...values) => borderInline(DOUBLE, ...values);
borderInline.groove = (...values) => borderInline(GROOVE, ...values);
borderInline.ridge = (...values) => borderInline(RIDGE, ...values);
borderInline.inset = (...values) => borderInline(INSET, ...values);
borderInline.outset = (...values) => borderInline(OUTSET, ...values);
borderInline.thin = (...values) => borderInline(THIN, SOLID, ...values);
borderInline.medium = (...values) => borderInline(MEDIUM, SOLID, ...values);
borderInline.thick = (...values) => borderInline(THICK, SOLID, ...values);

export const borderInlineStart = property('borderInlineStart');
borderInlineStart.hidden = (...values) => borderInlineStart(HIDDEN, ...values);
borderInlineStart.dotted = (...values) => borderInlineStart(DOTTED, ...values);
borderInlineStart.dashed = (...values) => borderInlineStart(DASHED, ...values);
borderInlineStart.solid = (...values) => borderInlineStart(SOLID, ...values);
borderInlineStart.double = (...values) => borderInlineStart(DOUBLE, ...values);
borderInlineStart.groove = (...values) => borderInlineStart(GROOVE, ...values);
borderInlineStart.ridge = (...values) => borderInlineStart(RIDGE, ...values);
borderInlineStart.inset = (...values) => borderInlineStart(INSET, ...values);
borderInlineStart.outset = (...values) => borderInlineStart(OUTSET, ...values);
borderInlineStart.thin = (...values) => borderInlineStart(THIN, SOLID, ...values);
borderInlineStart.medium = (...values) => borderInlineStart(MEDIUM, SOLID, ...values);
borderInlineStart.thick = (...values) => borderInlineStart(THICK, SOLID, ...values);

export const borderInlineEnd = property('borderInlineEnd');
borderInlineEnd.hidden = (...values) => borderInlineEnd(HIDDEN, ...values);
borderInlineEnd.dotted = (...values) => borderInlineEnd(DOTTED, ...values);
borderInlineEnd.dashed = (...values) => borderInlineEnd(DASHED, ...values);
borderInlineEnd.solid = (...values) => borderInlineEnd(SOLID, ...values);
borderInlineEnd.double = (...values) => borderInlineEnd(DOUBLE, ...values);
borderInlineEnd.groove = (...values) => borderInlineEnd(GROOVE, ...values);
borderInlineEnd.ridge = (...values) => borderInlineEnd(RIDGE, ...values);
borderInlineEnd.inset = (...values) => borderInlineEnd(INSET, ...values);
borderInlineEnd.outset = (...values) => borderInlineEnd(OUTSET, ...values);
borderInlineEnd.thin = (...values) => borderInlineEnd(THIN, SOLID, ...values);
borderInlineEnd.medium = (...values) => borderInlineEnd(MEDIUM, SOLID, ...values);
borderInlineEnd.thick = (...values) => borderInlineEnd(THICK, SOLID, ...values);

/* Width */

export const borderWidth = property('borderWidth');
borderWidth.THIN = borderWidth(THIN);
borderWidth.MEDIUM = borderWidth(MEDIUM);
borderWidth.THICK = borderWidth(THICK);

export const borderTopWidth = property('borderWidth');
borderTopWidth.THIN = borderTopWidth(THIN);
borderTopWidth.MEDIUM = borderTopWidth(MEDIUM);
borderTopWidth.THICK = borderTopWidth(THICK);

export const borderBottomWidth = property('borderWidth');
borderBottomWidth.THIN = borderBottomWidth(THIN);
borderBottomWidth.MEDIUM = borderBottomWidth(MEDIUM);
borderBottomWidth.THICK = borderBottomWidth(THICK);

export const borderLeftWidth = property('borderWidth');
borderLeftWidth.THIN = borderLeftWidth(THIN);
borderLeftWidth.MEDIUM = borderLeftWidth(MEDIUM);
borderLeftWidth.THICK = borderLeftWidth(THICK);

export const borderRightWidth = property('borderWidth');
borderRightWidth.THIN = borderRightWidth(THIN);
borderRightWidth.MEDIUM = borderRightWidth(MEDIUM);
borderRightWidth.THICK = borderRightWidth(THICK);

export const borderBlockWidth = property('borderBlockWidth');
borderBlockWidth.THIN = borderBlockWidth(THIN);
borderBlockWidth.MEDIUM = borderBlockWidth(MEDIUM);
borderBlockWidth.THICK = borderBlockWidth(THICK);

export const borderBlockStartWidth = property('borderBlockStartWidth');
borderBlockStartWidth.THIN = borderBlockStartWidth(THIN);
borderBlockStartWidth.MEDIUM = borderBlockStartWidth(MEDIUM);
borderBlockStartWidth.THICK = borderBlockStartWidth(THICK);

export const borderBlockEndWidth = property('borderBlockEndWidth');
borderBlockEndWidth.THIN = borderBlockEndWidth(THIN);
borderBlockEndWidth.MEDIUM = borderBlockEndWidth(MEDIUM);
borderBlockEndWidth.THICK = borderBlockEndWidth(THICK);

export const borderInlineWidth = property('borderInlineWidth');
borderInlineWidth.THIN = borderInlineWidth(THIN);
borderInlineWidth.MEDIUM = borderInlineWidth(MEDIUM);
borderInlineWidth.THICK = borderInlineWidth(THICK);

export const borderInlineStartWidth = property('borderInlineStartWidth');
borderInlineStartWidth.THIN = borderInlineStartWidth(THIN);
borderInlineStartWidth.MEDIUM = borderInlineStartWidth(MEDIUM);
borderInlineStartWidth.THICK = borderInlineStartWidth(THICK);

export const borderInlineEndWidth = property('borderInlineEndWidth');
borderInlineEndWidth.THIN = borderInlineEndWidth(THIN);
borderInlineEndWidth.MEDIUM = borderInlineEndWidth(MEDIUM);
borderInlineEndWidth.THICK = borderInlineEndWidth(THICK);

/* Style */

export const borderStyle = property('borderStyle');
borderStyle.NONE = borderStyle(NONE);
borderStyle.HIDDEN = borderStyle(HIDDEN);
borderStyle.DOTTED = borderStyle(DOTTED);
borderStyle.DASHED = borderStyle(DASHED);
borderStyle.SOLID = borderStyle(SOLID);
borderStyle.DOUBLE = borderStyle(DOUBLE);
borderStyle.GROOVE = borderStyle(GROOVE);
borderStyle.RIDGE = borderStyle(RIDGE);
borderStyle.INSET = borderStyle(INSET);
borderStyle.OUTSET = borderStyle(OUTSET);

export const borderTopStyle = property('borderStyle');
borderTopStyle.NONE = borderTopStyle(NONE);
borderTopStyle.HIDDEN = borderTopStyle(HIDDEN);
borderTopStyle.DOTTED = borderTopStyle(DOTTED);
borderTopStyle.DASHED = borderTopStyle(DASHED);
borderTopStyle.SOLID = borderTopStyle(SOLID);
borderTopStyle.DOUBLE = borderTopStyle(DOUBLE);
borderTopStyle.GROOVE = borderTopStyle(GROOVE);
borderTopStyle.RIDGE = borderTopStyle(RIDGE);
borderTopStyle.INSET = borderTopStyle(INSET);
borderTopStyle.OUTSET = borderTopStyle(OUTSET);

export const borderBottomStyle = property('borderBottomStyle');
borderBottomStyle.NONE = borderBottomStyle(NONE);
borderBottomStyle.HIDDEN = borderBottomStyle(HIDDEN);
borderBottomStyle.DOTTED = borderBottomStyle(DOTTED);
borderBottomStyle.DASHED = borderBottomStyle(DASHED);
borderBottomStyle.SOLID = borderBottomStyle(SOLID);
borderBottomStyle.DOUBLE = borderBottomStyle(DOUBLE);
borderBottomStyle.GROOVE = borderBottomStyle(GROOVE);
borderBottomStyle.RIDGE = borderBottomStyle(RIDGE);
borderBottomStyle.INSET = borderBottomStyle(INSET);
borderBottomStyle.OUTSET = borderBottomStyle(OUTSET);

export const borderLeftStyle = property('borderLeftStyle');
borderLeftStyle.NONE = borderLeftStyle(NONE);
borderLeftStyle.HIDDEN = borderLeftStyle(HIDDEN);
borderLeftStyle.DOTTED = borderLeftStyle(DOTTED);
borderLeftStyle.DASHED = borderLeftStyle(DASHED);
borderLeftStyle.SOLID = borderLeftStyle(SOLID);
borderLeftStyle.DOUBLE = borderLeftStyle(DOUBLE);
borderLeftStyle.GROOVE = borderLeftStyle(GROOVE);
borderLeftStyle.RIDGE = borderLeftStyle(RIDGE);
borderLeftStyle.INSET = borderLeftStyle(INSET);
borderLeftStyle.OUTSET = borderLeftStyle(OUTSET);

export const borderRightStyle = property('borderRightStyle');
borderRightStyle.NONE = borderRightStyle(NONE);
borderRightStyle.HIDDEN = borderRightStyle(HIDDEN);
borderRightStyle.DOTTED = borderRightStyle(DOTTED);
borderRightStyle.DASHED = borderRightStyle(DASHED);
borderRightStyle.SOLID = borderRightStyle(SOLID);
borderRightStyle.DOUBLE = borderRightStyle(DOUBLE);
borderRightStyle.GROOVE = borderRightStyle(GROOVE);
borderRightStyle.RIDGE = borderRightStyle(RIDGE);
borderRightStyle.INSET = borderRightStyle(INSET);
borderRightStyle.OUTSET = borderRightStyle(OUTSET);

export const borderBlockStyle = property('borderBlockStyle');
borderBlockStyle.NONE = borderBlockStyle(NONE);
borderBlockStyle.HIDDEN = borderBlockStyle(HIDDEN);
borderBlockStyle.DOTTED = borderBlockStyle(DOTTED);
borderBlockStyle.DASHED = borderBlockStyle(DASHED);
borderBlockStyle.SOLID = borderBlockStyle(SOLID);
borderBlockStyle.DOUBLE = borderBlockStyle(DOUBLE);
borderBlockStyle.GROOVE = borderBlockStyle(GROOVE);
borderBlockStyle.RIDGE = borderBlockStyle(RIDGE);
borderBlockStyle.INSET = borderBlockStyle(INSET);
borderBlockStyle.OUTSET = borderBlockStyle(OUTSET);

export const borderBlockStartStyle = property('borderBlockStartStyle');
borderBlockStartStyle.NONE = borderBlockStartStyle(NONE);
borderBlockStartStyle.HIDDEN = borderBlockStartStyle(HIDDEN);
borderBlockStartStyle.DOTTED = borderBlockStartStyle(DOTTED);
borderBlockStartStyle.DASHED = borderBlockStartStyle(DASHED);
borderBlockStartStyle.SOLID = borderBlockStartStyle(SOLID);
borderBlockStartStyle.DOUBLE = borderBlockStartStyle(DOUBLE);
borderBlockStartStyle.GROOVE = borderBlockStartStyle(GROOVE);
borderBlockStartStyle.RIDGE = borderBlockStartStyle(RIDGE);
borderBlockStartStyle.INSET = borderBlockStartStyle(INSET);
borderBlockStartStyle.OUTSET = borderBlockStartStyle(OUTSET);

export const borderBlockEndStyle = property('borderBlockEndStyle');
borderBlockEndStyle.NONE = borderBlockEndStyle(NONE);
borderBlockEndStyle.HIDDEN = borderBlockEndStyle(HIDDEN);
borderBlockEndStyle.DOTTED = borderBlockEndStyle(DOTTED);
borderBlockEndStyle.DASHED = borderBlockEndStyle(DASHED);
borderBlockEndStyle.SOLID = borderBlockEndStyle(SOLID);
borderBlockEndStyle.DOUBLE = borderBlockEndStyle(DOUBLE);
borderBlockEndStyle.GROOVE = borderBlockEndStyle(GROOVE);
borderBlockEndStyle.RIDGE = borderBlockEndStyle(RIDGE);
borderBlockEndStyle.INSET = borderBlockEndStyle(INSET);
borderBlockEndStyle.OUTSET = borderBlockEndStyle(OUTSET);

export const borderInlineStyle = property('borderInlineStyle');
borderInlineStyle.NONE = borderInlineStyle(NONE);
borderInlineStyle.HIDDEN = borderInlineStyle(HIDDEN);
borderInlineStyle.DOTTED = borderInlineStyle(DOTTED);
borderInlineStyle.DASHED = borderInlineStyle(DASHED);
borderInlineStyle.SOLID = borderInlineStyle(SOLID);
borderInlineStyle.DOUBLE = borderInlineStyle(DOUBLE);
borderInlineStyle.GROOVE = borderInlineStyle(GROOVE);
borderInlineStyle.RIDGE = borderInlineStyle(RIDGE);
borderInlineStyle.INSET = borderInlineStyle(INSET);
borderInlineStyle.OUTSET = borderInlineStyle(OUTSET);

export const borderInlineStartStyle = property('borderInlineStartStyle');
borderInlineStartStyle.NONE = borderInlineStartStyle(NONE);
borderInlineStartStyle.HIDDEN = borderInlineStartStyle(HIDDEN);
borderInlineStartStyle.DOTTED = borderInlineStartStyle(DOTTED);
borderInlineStartStyle.DASHED = borderInlineStartStyle(DASHED);
borderInlineStartStyle.SOLID = borderInlineStartStyle(SOLID);
borderInlineStartStyle.DOUBLE = borderInlineStartStyle(DOUBLE);
borderInlineStartStyle.GROOVE = borderInlineStartStyle(GROOVE);
borderInlineStartStyle.RIDGE = borderInlineStartStyle(RIDGE);
borderInlineStartStyle.INSET = borderInlineStartStyle(INSET);
borderInlineStartStyle.OUTSET = borderInlineStartStyle(OUTSET);

export const borderInlineEndStyle = property('borderInlineEndStyle');
borderInlineEndStyle.NONE = borderInlineEndStyle(NONE);
borderInlineEndStyle.HIDDEN = borderInlineEndStyle(HIDDEN);
borderInlineEndStyle.DOTTED = borderInlineEndStyle(DOTTED);
borderInlineEndStyle.DASHED = borderInlineEndStyle(DASHED);
borderInlineEndStyle.SOLID = borderInlineEndStyle(SOLID);
borderInlineEndStyle.DOUBLE = borderInlineEndStyle(DOUBLE);
borderInlineEndStyle.GROOVE = borderInlineEndStyle(GROOVE);
borderInlineEndStyle.RIDGE = borderInlineEndStyle(RIDGE);
borderInlineEndStyle.INSET = borderInlineEndStyle(INSET);
borderInlineEndStyle.OUTSET = borderInlineEndStyle(OUTSET);

/* Colors */

export const borderColor = property('borderColor');
export const borderTopColor = property('borderTopColor');
export const borderBottomColor = property('borderBottomColor');
export const borderLeftColor = property('borderLeftColor');
export const borderRightColor = property('borderRightColor');
export const borderBlockColor = property('borderBlockColor');
export const borderBlockStartColor = property('borderBlockStartColor');
export const borderBlockEndColor = property('borderBlockEndColor');
export const borderInlineColor = property('borderInlineColor');
export const borderInlineStartColor = property('borderInlineStartColor');
export const borderInlineEndColor = property('borderInlineEndColor');

/* Radius */

export const borderRadius = property('borderRadius');
export const borderTopLeftRadius = property('borderTopLeftRadius');
export const borderTopRightRadius = property('borderTopRightRadius');
export const borderBottomLeftRadius = property('borderBottomLeftRadius');
export const borderBottomRightRadius = property('borderBottomRightRadius');
export const borderStartStartRadius = property('borderStartStartRadius');
export const borderStartEndRadius = property('borderStartEndRadius');
export const borderEndStartRadius = property('borderEndStartRadius');
export const borderEndEndRadius = property('borderEndEndRadius');

/* Image */

export const borderImage = property('borderImage');

export const borderImageOutset = property('borderImageOutset');

export const borderImageRepeat = property('borderImageRepeat');
borderImageRepeat.STRETCH = borderImageRepeat(STRETCH);
borderImageRepeat.REPEAT = borderImageRepeat(REPEAT);
borderImageRepeat.ROUND = borderImageRepeat(ROUND);
borderImageRepeat.SPACE = borderImageRepeat(SPACE);

export const borderImageSlice = property('borderImageSlice');

export const borderImageSource = property('borderImageSource');
borderImageSource.NONE = borderImageSource(NONE);

export const borderImageWidth = property('borderImageWidth');
borderImageWidth.AUTO = borderImageWidth(AUTO);
