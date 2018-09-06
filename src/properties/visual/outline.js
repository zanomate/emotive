import { property } from '../../utils';
import {
    AUTO, DASHED, DOTTED, DOUBLE, GROOVE, HIDDEN, INSET, INVERT, MEDIUM, NONE,
    OUTSET, RIDGE, SOLID, THICK, THIN
} from '../../constants';

const Outline = property('outline');
export { Outline };

const OutlineColor = property('outlineColor');
OutlineColor.INVERT = OutlineColor(INVERT);
export { OutlineColor };

const OutlineOffset = property('outlineOffset');
export { OutlineOffset };

const OutlineStyle = property('outlineOffset');
OutlineStyle.AUTO = OutlineStyle(AUTO);
OutlineStyle.NONE = OutlineStyle(NONE);
OutlineStyle.HIDDEN = OutlineStyle(HIDDEN);
OutlineStyle.DOTTED = OutlineStyle(DOTTED);
OutlineStyle.DASHED = OutlineStyle(DASHED);
OutlineStyle.SOLID = OutlineStyle(SOLID);
OutlineStyle.DOUBLE = OutlineStyle(DOUBLE);
OutlineStyle.GROOVE = OutlineStyle(GROOVE);
OutlineStyle.RIDGE = OutlineStyle(RIDGE);
OutlineStyle.INSET = OutlineStyle(INSET);
OutlineStyle.OUTSET = OutlineStyle(OUTSET);
export { OutlineStyle };

const OutlineWidth = property('outlineWidth');
OutlineWidth.THIN = OutlineWidth(THIN);
OutlineWidth.MEDIUM = OutlineWidth(MEDIUM);
OutlineWidth.THICK = OutlineWidth(THICK);
export { OutlineWidth };
