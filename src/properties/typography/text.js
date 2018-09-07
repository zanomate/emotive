import { property } from '../../utils/factory';
import {
    ANYWHERE, AUTO, BLINK, CAPITALIZE, CENTER, CIRCLE, CLIP, CURRENT_COLOR,
    DASHED, DOT, DOTTED, DOUBLE, DOUBLE_CIRCLE, ELLIPSIS, END, FILLED,
    FULL_WIDTH, INTER_CHARACTER, INTER_WORD, JUSTIFY, JUSTIFY_ALL, LEFT,
    LINE_THROUGH, LOOSE, LOWERCASE, MATCH_PARENT, NONE, NORMAL, NOWRAP, OPEN,
    OVERLINE, PRE, PRE_LINE, PRE_WRAP, RIGHT, SESAME, SOLID, START, STRICT,
    TRIANGLE, UNDER, UNDERLINE, UPPERCASE, WAVY
} from '../../constants';

const TextAlign = property('textAlign');
TextAlign.START = TextAlign(START);
TextAlign.END = TextAlign(END);
TextAlign.LEFT = TextAlign(LEFT);
TextAlign.RIGHT = TextAlign(RIGHT);
TextAlign.CENTER = TextAlign(CENTER);
TextAlign.JUSTIFY = TextAlign(JUSTIFY);
TextAlign.MATCH_PARENT = TextAlign(MATCH_PARENT);
TextAlign.JUSTIFY_ALL = TextAlign(JUSTIFY_ALL);
export { TextAlign };

const TextAlignAll = property('textAlignAll');
TextAlignAll.START = TextAlignAll(START);
TextAlignAll.END = TextAlignAll(END);
TextAlignAll.LEFT = TextAlignAll(LEFT);
TextAlignAll.RIGHT = TextAlignAll(RIGHT);
TextAlignAll.CENTER = TextAlignAll(CENTER);
TextAlignAll.JUSTIFY = TextAlignAll(JUSTIFY);
TextAlignAll.MATCH_PARENT = TextAlignAll(MATCH_PARENT);
export { TextAlignAll };

const TextAlignLast = property('textAlignAll');
TextAlignLast.AUTO = TextAlignLast(AUTO);
TextAlignLast.START = TextAlignLast(START);
TextAlignLast.END = TextAlignLast(END);
TextAlignLast.LEFT = TextAlignLast(LEFT);
TextAlignLast.RIGHT = TextAlignLast(RIGHT);
TextAlignLast.CENTER = TextAlignLast(CENTER);
TextAlignLast.JUSTIFY = TextAlignLast(JUSTIFY);
export { TextAlignLast };

const TextIndent = property('textIndent');
export { TextIndent };

const TextTransform = property('textTransform');
TextTransform.NONE = TextTransform(NONE);
TextTransform.CAPITALIZE = TextTransform(CAPITALIZE);
TextTransform.UPPERCASE = TextTransform(UPPERCASE);
TextTransform.LOWERCASE = TextTransform(LOWERCASE);
TextTransform.FULL_WIDTH = TextTransform(FULL_WIDTH);
export { TextTransform };

const TextShadow = property('textShadow');
TextShadow.NONE = TextShadow(NONE);
export { TextShadow };

const TextUnderlinePosition = property('textUnderlinePosition');
TextUnderlinePosition.AUTO = TextUnderlinePosition(AUTO);
TextUnderlinePosition.UNDER = TextUnderlinePosition(UNDER);
TextUnderlinePosition.LEFT = TextUnderlinePosition(LEFT);
TextUnderlinePosition.RIGHT = TextUnderlinePosition(RIGHT);
export { TextUnderlinePosition };

const TextJustify = property('textJustify');
TextJustify.AUTO = TextJustify(AUTO);
TextJustify.NONE = TextJustify(NONE);
TextJustify.INTER_WORD = TextJustify(INTER_WORD);
TextJustify.INTER_CHARACTER = TextJustify(INTER_CHARACTER);
export { TextJustify };

const LetterSpacing = property('letterSpacing');
LetterSpacing.NORMAL = LetterSpacing(NORMAL);
export { LetterSpacing };

const WhiteSpace = property('whiteSpace');
WhiteSpace.NORMAL = WhiteSpace(NORMAL);
WhiteSpace.PRE = WhiteSpace(PRE);
WhiteSpace.NOWRAP = WhiteSpace(NOWRAP);
WhiteSpace.PRE_WRAP = WhiteSpace(PRE_WRAP);
WhiteSpace.PRE_LINE = WhiteSpace(PRE_LINE);
export { WhiteSpace };

const LineBreak = property('lineBreak');
LineBreak.AUTO = LineBreak(AUTO);
LineBreak.LOOSE = LineBreak(LOOSE);
LineBreak.NORMAL = LineBreak(NORMAL);
LineBreak.STRICT = LineBreak(STRICT);
LineBreak.ANYWHERE = LineBreak(ANYWHERE);
export { LineBreak };

const TextOverflow = property('textOverflow');
TextOverflow.CLIP = TextOverflow(CLIP);
TextOverflow.ELLIPSIS = TextOverflow(ELLIPSIS);
export { TextOverflow };

const TextEmphasis = property('textEmphasis');
export { TextEmphasis };

const TextEmphasisColor = property('textEmphasisColor');
TextEmphasisColor.CURRENT_COLOR = TextEmphasisColor(CURRENT_COLOR);
export { TextEmphasisColor };

const TextEmphasisPosition = property('textEmphasisPosition');
export { TextEmphasisPosition };

const TextEmphasisStyle = property('textEmphasisStyle');
TextEmphasisStyle.NONE = TextEmphasisStyle(NONE);
TextEmphasisStyle.FILLED = TextEmphasisStyle(FILLED);
TextEmphasisStyle.OPEN = TextEmphasisStyle(OPEN);
TextEmphasisStyle.DOT = TextEmphasisStyle(DOT);
TextEmphasisStyle.CIRCLE = TextEmphasisStyle(CIRCLE);
TextEmphasisStyle.DOUBLE_CIRCLE = TextEmphasisStyle(DOUBLE_CIRCLE);
TextEmphasisStyle.TRIANGLE = TextEmphasisStyle(TRIANGLE);
TextEmphasisStyle.SESAME = TextEmphasisStyle(SESAME);
export { TextEmphasisStyle };

const TextDecoration = property('textDecoration');
export { TextDecoration };

const TextDecorationColor = property('textDecorationColor');
export { TextDecorationColor };

const TextDecorationLine = property('textDecorationLine');
TextDecorationLine.NONE = TextDecoration(NONE);
TextDecorationLine.UNDERLINE = TextDecoration(UNDERLINE);
TextDecorationLine.OVERLINE = TextDecoration(OVERLINE);
TextDecorationLine.LINE_THROUGH = TextDecoration(LINE_THROUGH);
TextDecorationLine.BLINK = TextDecoration(BLINK);
export { TextDecorationLine };

const TextDecorationStyle = property('textDecorationStyle');
TextDecorationStyle.SOLID = TextDecorationStyle(SOLID);
TextDecorationStyle.DOUBLE = TextDecorationStyle(DOUBLE);
TextDecorationStyle.DOTTED = TextDecorationStyle(DOTTED);
TextDecorationStyle.DASHED = TextDecorationStyle(DASHED);
TextDecorationStyle.WAVY = TextDecorationStyle(WAVY);
export { TextDecorationStyle };
