import { property } from 'utils/index';
import {
    AUTO, DASHED, DOTTED, DOUBLE, GROOVE, HIDDEN, INSET, INVERT, MEDIUM, NONE, OUTSET, RIDGE, SOLID, THICK, THIN
} from 'constants/index';

export const outline = property('outline');

export const outlineColor = property('outlineColor');
outlineColor.INVERT = outlineColor(INVERT);

export const outlineOffset = property('outlineOffset');

export const outlineStyle = property('outlineOffset');
outlineStyle.AUTO = outlineStyle(AUTO);
outlineStyle.NONE = outlineStyle(NONE);
outlineStyle.HIDDEN = outlineStyle(HIDDEN);
outlineStyle.DOTTED = outlineStyle(DOTTED);
outlineStyle.DASHED = outlineStyle(DASHED);
outlineStyle.SOLID = outlineStyle(SOLID);
outlineStyle.DOUBLE = outlineStyle(DOUBLE);
outlineStyle.GROOVE = outlineStyle(GROOVE);
outlineStyle.RIDGE = outlineStyle(RIDGE);
outlineStyle.INSET = outlineStyle(INSET);
outlineStyle.OUTSET = outlineStyle(OUTSET);

export const outlineWidth = property('outlineWidth');
outlineWidth.THIN = outlineWidth(THIN);
outlineWidth.MEDIUM = outlineWidth(MEDIUM);
outlineWidth.THICK = outlineWidth(THICK);
