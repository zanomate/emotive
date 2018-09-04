import { property } from '../../utils';
import {
    ALL, ALPHABETIC, AUTO, BASELINE, BORDER_BOX, BOTTOM, CENTER, CENTRAL, FIRST, GRID, HANGING, HEBREW, IDEOGRAPHIC,
    MATHEMATICAL, MIDDLE, NONE, NORMAL, STRETCH, SUB, SUPER, TEXT_BOTTOM, TEXT_TOP, TOP
} from '../../constants';

export const alignmentBaseline = property('alignmentBaseline');
alignmentBaseline.BASELINE = alignmentBaseline(BASELINE);
alignmentBaseline.TEXT_BOTTOM = alignmentBaseline(TEXT_BOTTOM);
alignmentBaseline.ALPHABETIC = alignmentBaseline(ALPHABETIC);
alignmentBaseline.IDEOGRAPHIC = alignmentBaseline(IDEOGRAPHIC);
alignmentBaseline.MIDDLE = alignmentBaseline(MIDDLE);
alignmentBaseline.CENTRAL = alignmentBaseline(CENTRAL);
alignmentBaseline.MATHEMATICAL = alignmentBaseline(MATHEMATICAL);
alignmentBaseline.TEXT_TOP = alignmentBaseline(TEXT_TOP);
alignmentBaseline.BOTTOM = alignmentBaseline(BOTTOM);
alignmentBaseline.CENTER = alignmentBaseline(CENTER);
alignmentBaseline.TOP = alignmentBaseline(TOP);

export const baselineShift = property('baselineShift');
baselineShift.SUB = baselineShift(SUB);
baselineShift.SUPER = baselineShift(SUPER);

export const dominantBaseline = property('dominantBaseline');
dominantBaseline.BASELINE = dominantBaseline(AUTO);
dominantBaseline.TEXT_BOTTOM = dominantBaseline(TEXT_BOTTOM);
dominantBaseline.ALPHABETIC = dominantBaseline(ALPHABETIC);
dominantBaseline.IDEOGRAPHIC = dominantBaseline(IDEOGRAPHIC);
dominantBaseline.MIDDLE = dominantBaseline(MIDDLE);
dominantBaseline.CENTRAL = dominantBaseline(CENTRAL);
dominantBaseline.MATHEMATICAL = dominantBaseline(MATHEMATICAL);
dominantBaseline.TEXT_TOP = dominantBaseline(HANGING);
dominantBaseline.BOTTOM = dominantBaseline(TEXT_TOP);

export const initialLetters = property('initialLetters');
initialLetters.NORMAL = initialLetters(NORMAL);

export const initialLettersAlign = property('initialLettersAlign');
dominantBaseline.BORDER_BOX = dominantBaseline(BORDER_BOX);
dominantBaseline.ALPHABETIC = dominantBaseline(ALPHABETIC);
dominantBaseline.IDEOGRAPHIC = dominantBaseline(IDEOGRAPHIC);
dominantBaseline.HEBREW = dominantBaseline(HEBREW);
dominantBaseline.HANGING = dominantBaseline(HANGING);

export const initialLettersWrap = property('initialLettersWrap');
initialLettersWrap.NONE = initialLettersWrap(NONE);
initialLettersWrap.FIRST = initialLettersWrap(FIRST);
initialLettersWrap.ALL = initialLettersWrap(ALL);
initialLettersWrap.GRID = initialLettersWrap(GRID);

export const inlineSizing = property('inlineSizing');
inlineSizing.NORMAL = inlineSizing(NORMAL);
inlineSizing.STRETCH = inlineSizing(STRETCH);

export const verticalAlign = property('verticalAlign');
verticalAlign.SUB = verticalAlign(SUB);
verticalAlign.SUPER = verticalAlign(SUPER);
verticalAlign.BASELINE = verticalAlign(BASELINE);
verticalAlign.TEXT_BOTTOM = verticalAlign(TEXT_BOTTOM);
verticalAlign.ALPHABETIC = verticalAlign(ALPHABETIC);
verticalAlign.IDEOGRAPHIC = verticalAlign(IDEOGRAPHIC);
verticalAlign.MIDDLE = verticalAlign(MIDDLE);
verticalAlign.CENTRAL = verticalAlign(CENTRAL);
verticalAlign.MATHEMATICAL = verticalAlign(MATHEMATICAL);
verticalAlign.TEXT_TOP = verticalAlign(TEXT_TOP);
verticalAlign.BOTTOM = verticalAlign(BOTTOM);
verticalAlign.CENTER = verticalAlign(CENTER);
verticalAlign.TOP = verticalAlign(TOP);
