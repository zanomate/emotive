import { property, Sheet, Value } from '../..';
import { Keyword } from '../../constants';

export namespace AlignmentBaseline {
    export const set = (...values: Value[]): Sheet => ({alignmentBaseline: property(values)});
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const TEXT_BOTTOM: Sheet = set(Keyword.TEXT_BOTTOM);
    export const ALPHABETIC: Sheet = set(Keyword.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keyword.IDEOGRAPHIC);
    export const MIDDLE: Sheet = set(Keyword.MIDDLE);
    export const CENTRAL: Sheet = set(Keyword.CENTRAL);
    export const MATHEMATICAL: Sheet = set(Keyword.MATHEMATICAL);
    export const TEXT_TOP: Sheet = set(Keyword.TEXT_TOP);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const TOP: Sheet = set(Keyword.TOP);
}

export namespace BaselineShift {
    export const set = (...values: Value[]): Sheet => ({baselineShift: property(values)});
    export const SUB: Sheet = set(Keyword.SUB);
    export const SUPER: Sheet = set(Keyword.SUPER);
}

export namespace DominantBaseline {
    export const set = (...values: Value[]): Sheet => ({dominantBaseline: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const TEXT_BOTTOM: Sheet = set(Keyword.TEXT_BOTTOM);
    export const ALPHABETIC: Sheet = set(Keyword.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keyword.IDEOGRAPHIC);
    export const MIDDLE: Sheet = set(Keyword.MIDDLE);
    export const CENTRAL: Sheet = set(Keyword.CENTRAL);
    export const MATHEMATICAL: Sheet = set(Keyword.MATHEMATICAL);
    export const HANGING: Sheet = set(Keyword.HANGING);
    export const TEXT_TOP: Sheet = set(Keyword.TEXT_TOP);
}

export namespace InitialLetters {
    export const set = (...values: Value[]): Sheet => ({initialLetters: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
}

export namespace InitialLettersAlign {
    export const set = (...values: Value[]): Sheet => ({initialLettersAlign: property(values)});
    export const BORDER_BOX: Sheet = set(Keyword.BORDER_BOX);
    export const ALPHABETIC: Sheet = set(Keyword.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keyword.IDEOGRAPHIC);
    export const HEBREW: Sheet = set(Keyword.HEBREW);
    export const HANGING: Sheet = set(Keyword.HANGING);
}

export namespace InitialLettersWrap {
    export const set = (...values: Value[]): Sheet => ({initialLettersWrap: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const FIRST: Sheet = set(Keyword.FIRST);
    export const ALL: Sheet = set(Keyword.ALL);
    export const GRID: Sheet = set(Keyword.GRID);
}

export namespace InlineSizing {
    export const set = (...values: Value[]): Sheet => ({inlineSizing: property(values)});
    export const NORMAL: Sheet = set(Keyword.NORMAL);
    export const STRETCH: Sheet = set(Keyword.STRETCH);
}

export namespace VerticalAlign {
    export const set = (...values: Value[]): Sheet => ({verticalAlign: property(values)});
    export const SUB: Sheet = set(Keyword.SUB);
    export const SUPER: Sheet = set(Keyword.SUPER);
    export const BASELINE: Sheet = set(Keyword.BASELINE);
    export const TEXT_BOTTOM: Sheet = set(Keyword.TEXT_BOTTOM);
    export const ALPHABETIC: Sheet = set(Keyword.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keyword.IDEOGRAPHIC);
    export const MIDDLE: Sheet = set(Keyword.MIDDLE);
    export const CENTRAL: Sheet = set(Keyword.CENTRAL);
    export const MATHEMATICAL: Sheet = set(Keyword.MATHEMATICAL);
    export const TEXT_TOP: Sheet = set(Keyword.TEXT_TOP);
    export const BOTTOM: Sheet = set(Keyword.BOTTOM);
    export const CENTER: Sheet = set(Keyword.CENTER);
    export const TOP: Sheet = set(Keyword.TOP);
}
