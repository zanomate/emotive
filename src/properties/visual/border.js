import { property } from '../../utils';
import {
    AUTO, DASHED, DOTTED, DOUBLE, GROOVE, HIDDEN, INSET, MEDIUM, NONE, OUTSET,
    REPEAT, RIDGE, ROUND, SOLID, SPACE, STRETCH, THICK, THIN
} from '../../constants';

const Border = property('border');
Border.hidden = (...values) => Border(HIDDEN, ...values);
Border.dotted = (...values) => Border(DOTTED, ...values);
Border.dashed = (...values) => Border(DASHED, ...values);
Border.solid = (...values) => Border(SOLID, ...values);
Border.double = (...values) => Border(DOUBLE, ...values);
Border.groove = (...values) => Border(GROOVE, ...values);
Border.ridge = (...values) => Border(RIDGE, ...values);
Border.inset = (...values) => Border(INSET, ...values);
Border.outset = (...values) => Border(OUTSET, ...values);
Border.thin = (...values) => Border(THIN, SOLID, ...values);
Border.medium = (...values) => Border(MEDIUM, SOLID, ...values);
Border.thick = (...values) => Border(THICK, SOLID, ...values);
export { Border };

const BorderTop = property('borderTop');
BorderTop.hidden = (...values) => BorderTop(HIDDEN, ...values);
BorderTop.dotted = (...values) => BorderTop(DOTTED, ...values);
BorderTop.dashed = (...values) => BorderTop(DASHED, ...values);
BorderTop.solid = (...values) => BorderTop(SOLID, ...values);
BorderTop.double = (...values) => BorderTop(DOUBLE, ...values);
BorderTop.groove = (...values) => BorderTop(GROOVE, ...values);
BorderTop.ridge = (...values) => BorderTop(RIDGE, ...values);
BorderTop.inset = (...values) => BorderTop(INSET, ...values);
BorderTop.outset = (...values) => BorderTop(OUTSET, ...values);
BorderTop.thin = (...values) => BorderTop(THIN, SOLID, ...values);
BorderTop.medium = (...values) => BorderTop(MEDIUM, SOLID, ...values);
BorderTop.thick = (...values) => BorderTop(THICK, SOLID, ...values);
export { BorderTop };

const BorderBottom = property('borderBottom');
BorderBottom.hidden = (...values) => BorderBottom(HIDDEN, ...values);
BorderBottom.dotted = (...values) => BorderBottom(DOTTED, ...values);
BorderBottom.dashed = (...values) => BorderBottom(DASHED, ...values);
BorderBottom.solid = (...values) => BorderBottom(SOLID, ...values);
BorderBottom.double = (...values) => BorderBottom(DOUBLE, ...values);
BorderBottom.groove = (...values) => BorderBottom(GROOVE, ...values);
BorderBottom.ridge = (...values) => BorderBottom(RIDGE, ...values);
BorderBottom.inset = (...values) => BorderBottom(INSET, ...values);
BorderBottom.outset = (...values) => BorderBottom(OUTSET, ...values);
BorderBottom.thin = (...values) => BorderBottom(THIN, SOLID, ...values);
BorderBottom.medium = (...values) => BorderBottom(MEDIUM, SOLID, ...values);
BorderBottom.thick = (...values) => BorderBottom(THICK, SOLID, ...values);
export { BorderBottom };

const BorderLeft = property('borderLeft');
BorderLeft.hidden = (...values) => BorderLeft(HIDDEN, ...values);
BorderLeft.dotted = (...values) => BorderLeft(DOTTED, ...values);
BorderLeft.dashed = (...values) => BorderLeft(DASHED, ...values);
BorderLeft.solid = (...values) => BorderLeft(SOLID, ...values);
BorderLeft.double = (...values) => BorderLeft(DOUBLE, ...values);
BorderLeft.groove = (...values) => BorderLeft(GROOVE, ...values);
BorderLeft.ridge = (...values) => BorderLeft(RIDGE, ...values);
BorderLeft.inset = (...values) => BorderLeft(INSET, ...values);
BorderLeft.outset = (...values) => BorderLeft(OUTSET, ...values);
BorderLeft.thin = (...values) => BorderLeft(THIN, SOLID, ...values);
BorderLeft.medium = (...values) => BorderLeft(MEDIUM, SOLID, ...values);
BorderLeft.thick = (...values) => BorderLeft(THICK, SOLID, ...values);
export { BorderLeft };

const BorderRight = property('borderRight');
BorderRight.hidden = (...values) => BorderRight(HIDDEN, ...values);
BorderRight.dotted = (...values) => BorderRight(DOTTED, ...values);
BorderRight.dashed = (...values) => BorderRight(DASHED, ...values);
BorderRight.solid = (...values) => BorderRight(SOLID, ...values);
BorderRight.double = (...values) => BorderRight(DOUBLE, ...values);
BorderRight.groove = (...values) => BorderRight(GROOVE, ...values);
BorderRight.ridge = (...values) => BorderRight(RIDGE, ...values);
BorderRight.inset = (...values) => BorderRight(INSET, ...values);
BorderRight.outset = (...values) => BorderRight(OUTSET, ...values);
BorderRight.thin = (...values) => BorderRight(THIN, SOLID, ...values);
BorderRight.medium = (...values) => BorderRight(MEDIUM, SOLID, ...values);
BorderRight.thick = (...values) => BorderRight(THICK, SOLID, ...values);
export { BorderRight };

const BorderBlock = property('borderBlock');
BorderBlock.hidden = (...values) => BorderBlock(HIDDEN, ...values);
BorderBlock.dotted = (...values) => BorderBlock(DOTTED, ...values);
BorderBlock.dashed = (...values) => BorderBlock(DASHED, ...values);
BorderBlock.solid = (...values) => BorderBlock(SOLID, ...values);
BorderBlock.double = (...values) => BorderBlock(DOUBLE, ...values);
BorderBlock.groove = (...values) => BorderBlock(GROOVE, ...values);
BorderBlock.ridge = (...values) => BorderBlock(RIDGE, ...values);
BorderBlock.inset = (...values) => BorderBlock(INSET, ...values);
BorderBlock.outset = (...values) => BorderBlock(OUTSET, ...values);
BorderBlock.thin = (...values) => BorderBlock(THIN, SOLID, ...values);
BorderBlock.medium = (...values) => BorderBlock(MEDIUM, SOLID, ...values);
BorderBlock.thick = (...values) => BorderBlock(THICK, SOLID, ...values);
export { BorderBlock };

const BorderBlockStart = property('borderBlockStart');
BorderBlockStart.hidden = (...values) => BorderBlockStart(HIDDEN, ...values);
BorderBlockStart.dotted = (...values) => BorderBlockStart(DOTTED, ...values);
BorderBlockStart.dashed = (...values) => BorderBlockStart(DASHED, ...values);
BorderBlockStart.solid = (...values) => BorderBlockStart(SOLID, ...values);
BorderBlockStart.double = (...values) => BorderBlockStart(DOUBLE, ...values);
BorderBlockStart.groove = (...values) => BorderBlockStart(GROOVE, ...values);
BorderBlockStart.ridge = (...values) => BorderBlockStart(RIDGE, ...values);
BorderBlockStart.inset = (...values) => BorderBlockStart(INSET, ...values);
BorderBlockStart.outset = (...values) => BorderBlockStart(OUTSET, ...values);
BorderBlockStart.thin = (...values) => BorderBlockStart(THIN, SOLID, ...values);
BorderBlockStart.medium = (...values) => BorderBlockStart(MEDIUM, SOLID, ...values);
BorderBlockStart.thick = (...values) => BorderBlockStart(THICK, SOLID, ...values);
export { BorderBlockStart };

const BorderBlockEnd = property('borderBlockEnd');
BorderBlockEnd.hidden = (...values) => BorderBlockEnd(HIDDEN, ...values);
BorderBlockEnd.dotted = (...values) => BorderBlockEnd(DOTTED, ...values);
BorderBlockEnd.dashed = (...values) => BorderBlockEnd(DASHED, ...values);
BorderBlockEnd.solid = (...values) => BorderBlockEnd(SOLID, ...values);
BorderBlockEnd.double = (...values) => BorderBlockEnd(DOUBLE, ...values);
BorderBlockEnd.groove = (...values) => BorderBlockEnd(GROOVE, ...values);
BorderBlockEnd.ridge = (...values) => BorderBlockEnd(RIDGE, ...values);
BorderBlockEnd.inset = (...values) => BorderBlockEnd(INSET, ...values);
BorderBlockEnd.outset = (...values) => BorderBlockEnd(OUTSET, ...values);
BorderBlockEnd.thin = (...values) => BorderBlockEnd(THIN, SOLID, ...values);
BorderBlockEnd.medium = (...values) => BorderBlockEnd(MEDIUM, SOLID, ...values);
BorderBlockEnd.thick = (...values) => BorderBlockEnd(THICK, SOLID, ...values);
export { BorderBlockEnd };

const BorderInline = property('borderInline');
BorderInline.hidden = (...values) => BorderInline(HIDDEN, ...values);
BorderInline.dotted = (...values) => BorderInline(DOTTED, ...values);
BorderInline.dashed = (...values) => BorderInline(DASHED, ...values);
BorderInline.solid = (...values) => BorderInline(SOLID, ...values);
BorderInline.double = (...values) => BorderInline(DOUBLE, ...values);
BorderInline.groove = (...values) => BorderInline(GROOVE, ...values);
BorderInline.ridge = (...values) => BorderInline(RIDGE, ...values);
BorderInline.inset = (...values) => BorderInline(INSET, ...values);
BorderInline.outset = (...values) => BorderInline(OUTSET, ...values);
BorderInline.thin = (...values) => BorderInline(THIN, SOLID, ...values);
BorderInline.medium = (...values) => BorderInline(MEDIUM, SOLID, ...values);
BorderInline.thick = (...values) => BorderInline(THICK, SOLID, ...values);
export { BorderInline };

const BorderInlineStart = property('borderInlineStart');
BorderInlineStart.hidden = (...values) => BorderInlineStart(HIDDEN, ...values);
BorderInlineStart.dotted = (...values) => BorderInlineStart(DOTTED, ...values);
BorderInlineStart.dashed = (...values) => BorderInlineStart(DASHED, ...values);
BorderInlineStart.solid = (...values) => BorderInlineStart(SOLID, ...values);
BorderInlineStart.double = (...values) => BorderInlineStart(DOUBLE, ...values);
BorderInlineStart.groove = (...values) => BorderInlineStart(GROOVE, ...values);
BorderInlineStart.ridge = (...values) => BorderInlineStart(RIDGE, ...values);
BorderInlineStart.inset = (...values) => BorderInlineStart(INSET, ...values);
BorderInlineStart.outset = (...values) => BorderInlineStart(OUTSET, ...values);
BorderInlineStart.thin = (...values) => BorderInlineStart(THIN, SOLID, ...values);
BorderInlineStart.medium = (...values) => BorderInlineStart(MEDIUM, SOLID, ...values);
BorderInlineStart.thick = (...values) => BorderInlineStart(THICK, SOLID, ...values);
export { BorderInlineStart };

const BorderInlineEnd = property('borderInlineEnd');
BorderInlineEnd.hidden = (...values) => BorderInlineEnd(HIDDEN, ...values);
BorderInlineEnd.dotted = (...values) => BorderInlineEnd(DOTTED, ...values);
BorderInlineEnd.dashed = (...values) => BorderInlineEnd(DASHED, ...values);
BorderInlineEnd.solid = (...values) => BorderInlineEnd(SOLID, ...values);
BorderInlineEnd.double = (...values) => BorderInlineEnd(DOUBLE, ...values);
BorderInlineEnd.groove = (...values) => BorderInlineEnd(GROOVE, ...values);
BorderInlineEnd.ridge = (...values) => BorderInlineEnd(RIDGE, ...values);
BorderInlineEnd.inset = (...values) => BorderInlineEnd(INSET, ...values);
BorderInlineEnd.outset = (...values) => BorderInlineEnd(OUTSET, ...values);
BorderInlineEnd.thin = (...values) => BorderInlineEnd(THIN, SOLID, ...values);
BorderInlineEnd.medium = (...values) => BorderInlineEnd(MEDIUM, SOLID, ...values);
BorderInlineEnd.thick = (...values) => BorderInlineEnd(THICK, SOLID, ...values);
export { BorderInlineEnd };

/* Width */

const BorderWidth = property('borderWidth');
BorderWidth.THIN = BorderWidth(THIN);
BorderWidth.MEDIUM = BorderWidth(MEDIUM);
BorderWidth.THICK = BorderWidth(THICK);
export { BorderWidth };

const BorderTopWidth = property('borderWidth');
BorderTopWidth.THIN = BorderTopWidth(THIN);
BorderTopWidth.MEDIUM = BorderTopWidth(MEDIUM);
BorderTopWidth.THICK = BorderTopWidth(THICK);
export { BorderTopWidth };

const BorderBottomWidth = property('borderWidth');
BorderBottomWidth.THIN = BorderBottomWidth(THIN);
BorderBottomWidth.MEDIUM = BorderBottomWidth(MEDIUM);
BorderBottomWidth.THICK = BorderBottomWidth(THICK);
export { BorderBottomWidth };

const BorderLeftWidth = property('borderWidth');
BorderLeftWidth.THIN = BorderLeftWidth(THIN);
BorderLeftWidth.MEDIUM = BorderLeftWidth(MEDIUM);
BorderLeftWidth.THICK = BorderLeftWidth(THICK);
export { BorderLeftWidth };

const BorderRightWidth = property('borderWidth');
BorderRightWidth.THIN = BorderRightWidth(THIN);
BorderRightWidth.MEDIUM = BorderRightWidth(MEDIUM);
BorderRightWidth.THICK = BorderRightWidth(THICK);
export { BorderRightWidth };

const BorderBlockWidth = property('borderBlockWidth');
BorderBlockWidth.THIN = BorderBlockWidth(THIN);
BorderBlockWidth.MEDIUM = BorderBlockWidth(MEDIUM);
BorderBlockWidth.THICK = BorderBlockWidth(THICK);
export { BorderBlockWidth };

const BorderBlockStartWidth = property('borderBlockStartWidth');
BorderBlockStartWidth.THIN = BorderBlockStartWidth(THIN);
BorderBlockStartWidth.MEDIUM = BorderBlockStartWidth(MEDIUM);
BorderBlockStartWidth.THICK = BorderBlockStartWidth(THICK);
export { BorderBlockStartWidth };

const BorderBlockEndWidth = property('borderBlockEndWidth');
BorderBlockEndWidth.THIN = BorderBlockEndWidth(THIN);
BorderBlockEndWidth.MEDIUM = BorderBlockEndWidth(MEDIUM);
BorderBlockEndWidth.THICK = BorderBlockEndWidth(THICK);
export { BorderBlockEndWidth };

const BorderInlineWidth = property('borderInlineWidth');
BorderInlineWidth.THIN = BorderInlineWidth(THIN);
BorderInlineWidth.MEDIUM = BorderInlineWidth(MEDIUM);
BorderInlineWidth.THICK = BorderInlineWidth(THICK);
export { BorderInlineWidth };

const BorderInlineStartWidth = property('borderInlineStartWidth');
BorderInlineStartWidth.THIN = BorderInlineStartWidth(THIN);
BorderInlineStartWidth.MEDIUM = BorderInlineStartWidth(MEDIUM);
BorderInlineStartWidth.THICK = BorderInlineStartWidth(THICK);
export { BorderInlineStartWidth };

const BorderInlineEndWidth = property('borderInlineEndWidth');
BorderInlineEndWidth.THIN = BorderInlineEndWidth(THIN);
BorderInlineEndWidth.MEDIUM = BorderInlineEndWidth(MEDIUM);
BorderInlineEndWidth.THICK = BorderInlineEndWidth(THICK);
export { BorderInlineEndWidth };

/* Style */

const BorderStyle = property('borderStyle');
BorderStyle.NONE = BorderStyle(NONE);
BorderStyle.HIDDEN = BorderStyle(HIDDEN);
BorderStyle.DOTTED = BorderStyle(DOTTED);
BorderStyle.DASHED = BorderStyle(DASHED);
BorderStyle.SOLID = BorderStyle(SOLID);
BorderStyle.DOUBLE = BorderStyle(DOUBLE);
BorderStyle.GROOVE = BorderStyle(GROOVE);
BorderStyle.RIDGE = BorderStyle(RIDGE);
BorderStyle.INSET = BorderStyle(INSET);
BorderStyle.OUTSET = BorderStyle(OUTSET);
export { BorderStyle };

const BorderTopStyle = property('borderStyle');
BorderTopStyle.NONE = BorderTopStyle(NONE);
BorderTopStyle.HIDDEN = BorderTopStyle(HIDDEN);
BorderTopStyle.DOTTED = BorderTopStyle(DOTTED);
BorderTopStyle.DASHED = BorderTopStyle(DASHED);
BorderTopStyle.SOLID = BorderTopStyle(SOLID);
BorderTopStyle.DOUBLE = BorderTopStyle(DOUBLE);
BorderTopStyle.GROOVE = BorderTopStyle(GROOVE);
BorderTopStyle.RIDGE = BorderTopStyle(RIDGE);
BorderTopStyle.INSET = BorderTopStyle(INSET);
BorderTopStyle.OUTSET = BorderTopStyle(OUTSET);
export { BorderTopStyle };

const BorderBottomStyle = property('borderBottomStyle');
BorderBottomStyle.NONE = BorderBottomStyle(NONE);
BorderBottomStyle.HIDDEN = BorderBottomStyle(HIDDEN);
BorderBottomStyle.DOTTED = BorderBottomStyle(DOTTED);
BorderBottomStyle.DASHED = BorderBottomStyle(DASHED);
BorderBottomStyle.SOLID = BorderBottomStyle(SOLID);
BorderBottomStyle.DOUBLE = BorderBottomStyle(DOUBLE);
BorderBottomStyle.GROOVE = BorderBottomStyle(GROOVE);
BorderBottomStyle.RIDGE = BorderBottomStyle(RIDGE);
BorderBottomStyle.INSET = BorderBottomStyle(INSET);
BorderBottomStyle.OUTSET = BorderBottomStyle(OUTSET);
export { BorderBottomStyle };

const BorderLeftStyle = property('borderLeftStyle');
BorderLeftStyle.NONE = BorderLeftStyle(NONE);
BorderLeftStyle.HIDDEN = BorderLeftStyle(HIDDEN);
BorderLeftStyle.DOTTED = BorderLeftStyle(DOTTED);
BorderLeftStyle.DASHED = BorderLeftStyle(DASHED);
BorderLeftStyle.SOLID = BorderLeftStyle(SOLID);
BorderLeftStyle.DOUBLE = BorderLeftStyle(DOUBLE);
BorderLeftStyle.GROOVE = BorderLeftStyle(GROOVE);
BorderLeftStyle.RIDGE = BorderLeftStyle(RIDGE);
BorderLeftStyle.INSET = BorderLeftStyle(INSET);
BorderLeftStyle.OUTSET = BorderLeftStyle(OUTSET);
export { BorderLeftStyle };

const BorderRightStyle = property('borderRightStyle');
BorderRightStyle.NONE = BorderRightStyle(NONE);
BorderRightStyle.HIDDEN = BorderRightStyle(HIDDEN);
BorderRightStyle.DOTTED = BorderRightStyle(DOTTED);
BorderRightStyle.DASHED = BorderRightStyle(DASHED);
BorderRightStyle.SOLID = BorderRightStyle(SOLID);
BorderRightStyle.DOUBLE = BorderRightStyle(DOUBLE);
BorderRightStyle.GROOVE = BorderRightStyle(GROOVE);
BorderRightStyle.RIDGE = BorderRightStyle(RIDGE);
BorderRightStyle.INSET = BorderRightStyle(INSET);
BorderRightStyle.OUTSET = BorderRightStyle(OUTSET);
export { BorderRightStyle };

const BorderBlockStyle = property('borderBlockStyle');
BorderBlockStyle.NONE = BorderBlockStyle(NONE);
BorderBlockStyle.HIDDEN = BorderBlockStyle(HIDDEN);
BorderBlockStyle.DOTTED = BorderBlockStyle(DOTTED);
BorderBlockStyle.DASHED = BorderBlockStyle(DASHED);
BorderBlockStyle.SOLID = BorderBlockStyle(SOLID);
BorderBlockStyle.DOUBLE = BorderBlockStyle(DOUBLE);
BorderBlockStyle.GROOVE = BorderBlockStyle(GROOVE);
BorderBlockStyle.RIDGE = BorderBlockStyle(RIDGE);
BorderBlockStyle.INSET = BorderBlockStyle(INSET);
BorderBlockStyle.OUTSET = BorderBlockStyle(OUTSET);
export { BorderBlockStyle };

const BorderBlockStartStyle = property('borderBlockStartStyle');
BorderBlockStartStyle.NONE = BorderBlockStartStyle(NONE);
BorderBlockStartStyle.HIDDEN = BorderBlockStartStyle(HIDDEN);
BorderBlockStartStyle.DOTTED = BorderBlockStartStyle(DOTTED);
BorderBlockStartStyle.DASHED = BorderBlockStartStyle(DASHED);
BorderBlockStartStyle.SOLID = BorderBlockStartStyle(SOLID);
BorderBlockStartStyle.DOUBLE = BorderBlockStartStyle(DOUBLE);
BorderBlockStartStyle.GROOVE = BorderBlockStartStyle(GROOVE);
BorderBlockStartStyle.RIDGE = BorderBlockStartStyle(RIDGE);
BorderBlockStartStyle.INSET = BorderBlockStartStyle(INSET);
BorderBlockStartStyle.OUTSET = BorderBlockStartStyle(OUTSET);
export { BorderBlockStartStyle };

const BorderBlockEndStyle = property('borderBlockEndStyle');
BorderBlockEndStyle.NONE = BorderBlockEndStyle(NONE);
BorderBlockEndStyle.HIDDEN = BorderBlockEndStyle(HIDDEN);
BorderBlockEndStyle.DOTTED = BorderBlockEndStyle(DOTTED);
BorderBlockEndStyle.DASHED = BorderBlockEndStyle(DASHED);
BorderBlockEndStyle.SOLID = BorderBlockEndStyle(SOLID);
BorderBlockEndStyle.DOUBLE = BorderBlockEndStyle(DOUBLE);
BorderBlockEndStyle.GROOVE = BorderBlockEndStyle(GROOVE);
BorderBlockEndStyle.RIDGE = BorderBlockEndStyle(RIDGE);
BorderBlockEndStyle.INSET = BorderBlockEndStyle(INSET);
BorderBlockEndStyle.OUTSET = BorderBlockEndStyle(OUTSET);
export { BorderBlockEndStyle };

const BorderInlineStyle = property('borderInlineStyle');
BorderInlineStyle.NONE = BorderInlineStyle(NONE);
BorderInlineStyle.HIDDEN = BorderInlineStyle(HIDDEN);
BorderInlineStyle.DOTTED = BorderInlineStyle(DOTTED);
BorderInlineStyle.DASHED = BorderInlineStyle(DASHED);
BorderInlineStyle.SOLID = BorderInlineStyle(SOLID);
BorderInlineStyle.DOUBLE = BorderInlineStyle(DOUBLE);
BorderInlineStyle.GROOVE = BorderInlineStyle(GROOVE);
BorderInlineStyle.RIDGE = BorderInlineStyle(RIDGE);
BorderInlineStyle.INSET = BorderInlineStyle(INSET);
BorderInlineStyle.OUTSET = BorderInlineStyle(OUTSET);
export { BorderInlineStyle };

const BorderInlineStartStyle = property('borderInlineStartStyle');
BorderInlineStartStyle.NONE = BorderInlineStartStyle(NONE);
BorderInlineStartStyle.HIDDEN = BorderInlineStartStyle(HIDDEN);
BorderInlineStartStyle.DOTTED = BorderInlineStartStyle(DOTTED);
BorderInlineStartStyle.DASHED = BorderInlineStartStyle(DASHED);
BorderInlineStartStyle.SOLID = BorderInlineStartStyle(SOLID);
BorderInlineStartStyle.DOUBLE = BorderInlineStartStyle(DOUBLE);
BorderInlineStartStyle.GROOVE = BorderInlineStartStyle(GROOVE);
BorderInlineStartStyle.RIDGE = BorderInlineStartStyle(RIDGE);
BorderInlineStartStyle.INSET = BorderInlineStartStyle(INSET);
BorderInlineStartStyle.OUTSET = BorderInlineStartStyle(OUTSET);
export { BorderInlineStartStyle };

const BorderInlineEndStyle = property('borderInlineEndStyle');
BorderInlineEndStyle.NONE = BorderInlineEndStyle(NONE);
BorderInlineEndStyle.HIDDEN = BorderInlineEndStyle(HIDDEN);
BorderInlineEndStyle.DOTTED = BorderInlineEndStyle(DOTTED);
BorderInlineEndStyle.DASHED = BorderInlineEndStyle(DASHED);
BorderInlineEndStyle.SOLID = BorderInlineEndStyle(SOLID);
BorderInlineEndStyle.DOUBLE = BorderInlineEndStyle(DOUBLE);
BorderInlineEndStyle.GROOVE = BorderInlineEndStyle(GROOVE);
BorderInlineEndStyle.RIDGE = BorderInlineEndStyle(RIDGE);
BorderInlineEndStyle.INSET = BorderInlineEndStyle(INSET);
BorderInlineEndStyle.OUTSET = BorderInlineEndStyle(OUTSET);
export { BorderInlineEndStyle };

/* Colors */

const BorderColor = property('borderColor');
export { BorderColor };

const BorderTopColor = property('borderTopColor');
export { BorderTopColor };

const BorderBottomColor = property('borderBottomColor');
export { BorderBottomColor };

const BorderLeftColor = property('borderLeftColor');
export { BorderLeftColor };

const BorderRightColor = property('borderRightColor');
export { BorderRightColor };

const BorderBlockColor = property('borderBlockColor');
export { BorderBlockColor };

const BorderBlockStartColor = property('borderBlockStartColor');
export { BorderBlockStartColor };

const BorderBlockEndColor = property('borderBlockEndColor');
export { BorderBlockEndColor };

const BorderInlineColor = property('borderInlineColor');
export { BorderInlineColor };

const BorderInlineStartColor = property('borderInlineStartColor');
export { BorderInlineStartColor };

const BorderInlineEndColor = property('borderInlineEndColor');
export { BorderInlineEndColor };

/* Radius */

const BorderRadius = property('borderRadius');
export { BorderRadius };

const BorderTopLeftRadius = property('borderTopLeftRadius');
export { BorderTopLeftRadius };

const BorderTopRightRadius = property('borderTopRightRadius');
export { BorderTopRightRadius };

const BorderBottomLeftRadius = property('borderBottomLeftRadius');
export { BorderBottomLeftRadius };

const BorderBottomRightRadius = property('borderBottomRightRadius');
export { BorderBottomRightRadius };

const BorderStartStartRadius = property('borderStartStartRadius');
export { BorderStartStartRadius };

const BorderStartEndRadius = property('borderStartEndRadius');
export { BorderStartEndRadius };

const BorderEndStartRadius = property('borderEndStartRadius');
export { BorderEndStartRadius };

const BorderEndEndRadius = property('borderEndEndRadius');
export { BorderEndEndRadius };

/* Image */

const BorderImage = property('borderImage');
export { BorderImage };

const BorderImageOutset = property('borderImageOutset');
export { BorderImageOutset };

const BorderImageRepeat = property('borderImageRepeat');
BorderImageRepeat.STRETCH = BorderImageRepeat(STRETCH);
BorderImageRepeat.REPEAT = BorderImageRepeat(REPEAT);
BorderImageRepeat.ROUND = BorderImageRepeat(ROUND);
BorderImageRepeat.SPACE = BorderImageRepeat(SPACE);
export { BorderImageRepeat };

const BorderImageSlice = property('borderImageSlice');
export { BorderImageSlice };

const BorderImageSource = property('borderImageSource');
BorderImageSource.NONE = BorderImageSource(NONE);
export { BorderImageSource };

const BorderImageWidth = property('borderImageWidth');
BorderImageWidth.AUTO = BorderImageWidth(AUTO);
export { BorderImageWidth };
