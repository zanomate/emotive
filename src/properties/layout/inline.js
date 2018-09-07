import { property } from '../../utils/factory';
import {
    ALL, ALPHABETIC, AUTO, BASELINE, BORDER_BOX, BOTTOM, CENTER, CENTRAL, FIRST,
    GRID, HANGING, HEBREW, IDEOGRAPHIC, MATHEMATICAL, MIDDLE, NONE, NORMAL,
    STRETCH, SUB, SUPER, TEXT_BOTTOM, TEXT_TOP, TOP
} from '../../constants';

const AlignmentBaseline = property('alignmentBaseline');
AlignmentBaseline.BASELINE = AlignmentBaseline(BASELINE);
AlignmentBaseline.TEXT_BOTTOM = AlignmentBaseline(TEXT_BOTTOM);
AlignmentBaseline.ALPHABETIC = AlignmentBaseline(ALPHABETIC);
AlignmentBaseline.IDEOGRAPHIC = AlignmentBaseline(IDEOGRAPHIC);
AlignmentBaseline.MIDDLE = AlignmentBaseline(MIDDLE);
AlignmentBaseline.CENTRAL = AlignmentBaseline(CENTRAL);
AlignmentBaseline.MATHEMATICAL = AlignmentBaseline(MATHEMATICAL);
AlignmentBaseline.TEXT_TOP = AlignmentBaseline(TEXT_TOP);
AlignmentBaseline.BOTTOM = AlignmentBaseline(BOTTOM);
AlignmentBaseline.CENTER = AlignmentBaseline(CENTER);
AlignmentBaseline.TOP = AlignmentBaseline(TOP);
export { AlignmentBaseline };

const BaselineShift = property('baselineShift');
BaselineShift.SUB = BaselineShift(SUB);
BaselineShift.SUPER = BaselineShift(SUPER);
export { BaselineShift };

const DominantBaseline = property('dominantBaseline');
DominantBaseline.BASELINE = DominantBaseline(AUTO);
DominantBaseline.TEXT_BOTTOM = DominantBaseline(TEXT_BOTTOM);
DominantBaseline.ALPHABETIC = DominantBaseline(ALPHABETIC);
DominantBaseline.IDEOGRAPHIC = DominantBaseline(IDEOGRAPHIC);
DominantBaseline.MIDDLE = DominantBaseline(MIDDLE);
DominantBaseline.CENTRAL = DominantBaseline(CENTRAL);
DominantBaseline.MATHEMATICAL = DominantBaseline(MATHEMATICAL);
DominantBaseline.TEXT_TOP = DominantBaseline(HANGING);
DominantBaseline.BOTTOM = DominantBaseline(TEXT_TOP);
export { DominantBaseline };

const InitialLetters = property('initialLetters');
InitialLetters.NORMAL = InitialLetters(NORMAL);
export { InitialLetters };

const InitialLettersAlign = property('initialLettersAlign');
InitialLettersAlign.BORDER_BOX = InitialLettersAlign(BORDER_BOX);
InitialLettersAlign.ALPHABETIC = InitialLettersAlign(ALPHABETIC);
InitialLettersAlign.IDEOGRAPHIC = InitialLettersAlign(IDEOGRAPHIC);
InitialLettersAlign.HEBREW = InitialLettersAlign(HEBREW);
InitialLettersAlign.HANGING = InitialLettersAlign(HANGING);
export { InitialLettersAlign };

const InitialLettersWrap = property('initialLettersWrap');
InitialLettersWrap.NONE = InitialLettersWrap(NONE);
InitialLettersWrap.FIRST = InitialLettersWrap(FIRST);
InitialLettersWrap.ALL = InitialLettersWrap(ALL);
InitialLettersWrap.GRID = InitialLettersWrap(GRID);
export { InitialLettersWrap };

const InlineSizing = property('inlineSizing');
InlineSizing.NORMAL = InlineSizing(NORMAL);
InlineSizing.STRETCH = InlineSizing(STRETCH);
export { InlineSizing };

const VerticalAlign = property('verticalAlign');
VerticalAlign.SUB = VerticalAlign(SUB);
VerticalAlign.SUPER = VerticalAlign(SUPER);
VerticalAlign.BASELINE = VerticalAlign(BASELINE);
VerticalAlign.TEXT_BOTTOM = VerticalAlign(TEXT_BOTTOM);
VerticalAlign.ALPHABETIC = VerticalAlign(ALPHABETIC);
VerticalAlign.IDEOGRAPHIC = VerticalAlign(IDEOGRAPHIC);
VerticalAlign.MIDDLE = VerticalAlign(MIDDLE);
VerticalAlign.CENTRAL = VerticalAlign(CENTRAL);
VerticalAlign.MATHEMATICAL = VerticalAlign(MATHEMATICAL);
VerticalAlign.TEXT_TOP = VerticalAlign(TEXT_TOP);
VerticalAlign.BOTTOM = VerticalAlign(BOTTOM);
VerticalAlign.CENTER = VerticalAlign(CENTER);
VerticalAlign.TOP = VerticalAlign(TOP);
export { VerticalAlign };
