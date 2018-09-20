import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace AlignmentBaseline {
    export const set = (...values: Value[]): Sheet => ({alignmentBaseline: property(values)});
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const TEXT_BOTTOM: Sheet = set(Keywords.TEXT_BOTTOM);
    export const ALPHABETIC: Sheet = set(Keywords.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keywords.IDEOGRAPHIC);
    export const MIDDLE: Sheet = set(Keywords.MIDDLE);
    export const CENTRAL: Sheet = set(Keywords.CENTRAL);
    export const MATHEMATICAL: Sheet = set(Keywords.MATHEMATICAL);
    export const TEXT_TOP: Sheet = set(Keywords.TEXT_TOP);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const TOP: Sheet = set(Keywords.TOP);
}

export namespace BaselineShift {
    export const set = (...values: Value[]): Sheet => ({baselineShift: property(values)});
    export const SUB: Sheet = set(Keywords.SUB);
    export const SUPER: Sheet = set(Keywords.SUPER);
}

export namespace DominantBaseline {
    export const set = (...values: Value[]): Sheet => ({dominantBaseline: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const TEXT_BOTTOM: Sheet = set(Keywords.TEXT_BOTTOM);
    export const ALPHABETIC: Sheet = set(Keywords.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keywords.IDEOGRAPHIC);
    export const MIDDLE: Sheet = set(Keywords.MIDDLE);
    export const CENTRAL: Sheet = set(Keywords.CENTRAL);
    export const MATHEMATICAL: Sheet = set(Keywords.MATHEMATICAL);
    export const HANGING: Sheet = set(Keywords.HANGING);
    export const TEXT_TOP: Sheet = set(Keywords.TEXT_TOP);
}

export namespace InitialLetters {
    export const set = (...values: Value[]): Sheet => ({initialLetters: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
}

export namespace InitialLettersAlign {
    export const set = (...values: Value[]): Sheet => ({initialLettersAlign: property(values)});
    export const BORDER_BOX: Sheet = set(Keywords.BORDER_BOX);
    export const ALPHABETIC: Sheet = set(Keywords.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keywords.IDEOGRAPHIC);
    export const HEBREW: Sheet = set(Keywords.HEBREW);
    export const HANGING: Sheet = set(Keywords.HANGING);
}

export namespace InitialLettersWrap {
    export const set = (...values: Value[]): Sheet => ({initialLettersWrap: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const FIRST: Sheet = set(Keywords.FIRST);
    export const ALL: Sheet = set(Keywords.ALL);
    export const GRID: Sheet = set(Keywords.GRID);
}

export namespace InlineSizing {
    export const set = (...values: Value[]): Sheet => ({inlineSizing: property(values)});
    export const NORMAL: Sheet = set(Keywords.NORMAL);
    export const STRETCH: Sheet = set(Keywords.STRETCH);
}

export namespace VerticalAlign {
    export const set = (...values: Value[]): Sheet => ({verticalAlign: property(values)});
    export const SUB: Sheet = set(Keywords.SUB);
    export const SUPER: Sheet = set(Keywords.SUPER);
    export const BASELINE: Sheet = set(Keywords.BASELINE);
    export const TEXT_BOTTOM: Sheet = set(Keywords.TEXT_BOTTOM);
    export const ALPHABETIC: Sheet = set(Keywords.ALPHABETIC);
    export const IDEOGRAPHIC: Sheet = set(Keywords.IDEOGRAPHIC);
    export const MIDDLE: Sheet = set(Keywords.MIDDLE);
    export const CENTRAL: Sheet = set(Keywords.CENTRAL);
    export const MATHEMATICAL: Sheet = set(Keywords.MATHEMATICAL);
    export const TEXT_TOP: Sheet = set(Keywords.TEXT_TOP);
    export const BOTTOM: Sheet = set(Keywords.BOTTOM);
    export const CENTER: Sheet = set(Keywords.CENTER);
    export const TOP: Sheet = set(Keywords.TOP);
}
