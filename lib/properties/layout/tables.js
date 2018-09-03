import { property } from 'utils';
import { AUTO, BOTTOM, COLLAPSE, FIXED, HIDE, SEPARATE, SHOW, TOP } from 'constants';

export const tableLayout = property('captionSide');
tableLayout.AUTO = tableLayout(AUTO);
tableLayout.FIXED = tableLayout(FIXED);

export const borderCollapse = property('borderCollapse');
borderCollapse.COLLAPSE = borderCollapse(COLLAPSE);
borderCollapse.SEPARATE = borderCollapse(SEPARATE);

export const borderSpacing = property('borderSpacing');

export const captionSide = property('captionSide');
captionSide.TOP = captionSide(TOP);
captionSide.BOTTOM = captionSide(BOTTOM);

export const emptyCells = property('emptyCells');
emptyCells.SHOW = emptyCells(SHOW);
emptyCells.HIDE = emptyCells(HIDE);
