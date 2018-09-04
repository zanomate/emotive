import { property } from '../../utils';
import {
    ANYWHERE, AUTO, BLINK, CAPITALIZE, CENTER, CIRCLE, CLIP, CURRENT_COLOR, DASHED, DOT, DOTTED, DOUBLE, DOUBLE_CIRCLE,
    ELLIPSIS, END, FILLED, FULL_WIDTH, INTER_CHARACTER, INTER_WORD, JUSTIFY, JUSTIFY_ALL, LEFT, LINE_THROUGH, LOOSE,
    LOWERCASE, MATCH_PARENT, NONE, NORMAL, NOWRAP, OPEN, OVERLINE, PRE, PRE_LINE, PRE_WRAP, RIGHT, SESAME, SOLID, START,
    STRICT, TRIANGLE, UNDER, UNDERLINE, UPPERCASE, WAVY
} from '../../constants';

export const textAlign = property('textAlign');
textAlign.START = textAlign(START);
textAlign.END = textAlign(END);
textAlign.LEFT = textAlign(LEFT);
textAlign.RIGHT = textAlign(RIGHT);
textAlign.CENTER = textAlign(CENTER);
textAlign.JUSTIFY = textAlign(JUSTIFY);
textAlign.MATCH_PARENT = textAlign(MATCH_PARENT);
textAlign.JUSTIFY_ALL = textAlign(JUSTIFY_ALL);

export const textAlignAll = property('textAlignAll');
textAlignAll.START = textAlignAll(START);
textAlignAll.END = textAlignAll(END);
textAlignAll.LEFT = textAlignAll(LEFT);
textAlignAll.RIGHT = textAlignAll(RIGHT);
textAlignAll.CENTER = textAlignAll(CENTER);
textAlignAll.JUSTIFY = textAlignAll(JUSTIFY);
textAlignAll.MATCH_PARENT = textAlignAll(MATCH_PARENT);

export const textAlignLast = property('textAlignAll');
textAlignLast.AUTO = textAlignLast(AUTO);
textAlignLast.START = textAlignLast(START);
textAlignLast.END = textAlignLast(END);
textAlignLast.LEFT = textAlignLast(LEFT);
textAlignLast.RIGHT = textAlignLast(RIGHT);
textAlignLast.CENTER = textAlignLast(CENTER);
textAlignLast.JUSTIFY = textAlignLast(JUSTIFY);

export const textIndent = property('textIndent');

export const textTransform = property('textTransform');
textTransform.NONE = textTransform(NONE);
textTransform.CAPITALIZE = textTransform(CAPITALIZE);
textTransform.UPPERCASE = textTransform(UPPERCASE);
textTransform.LOWERCASE = textTransform(LOWERCASE);
textTransform.FULL_WIDTH = textTransform(FULL_WIDTH);

export const textShadow = property('textShadow');
textShadow.NONE = textShadow(NONE);

export const textUnderlinePosition = property('textUnderlinePosition');
textUnderlinePosition.AUTO = textUnderlinePosition(AUTO);
textUnderlinePosition.UNDER = textUnderlinePosition(UNDER);
textUnderlinePosition.LEFT = textUnderlinePosition(LEFT);
textUnderlinePosition.RIGHT = textUnderlinePosition(RIGHT);

export const textJustify = property('textJustify');
textJustify.AUTO = textJustify(AUTO);
textJustify.NONE = textJustify(NONE);
textJustify.INTER_WORD = textJustify(INTER_WORD);
textJustify.INTER_CHARACTER = textJustify(INTER_CHARACTER);

export const letterSpacing = property('letterSpacing');
letterSpacing.NORMAL = letterSpacing(NORMAL);

export const whiteSpace = property('whiteSpace');
whiteSpace.NORMAL = whiteSpace(NORMAL);
whiteSpace.PRE = whiteSpace(PRE);
whiteSpace.NOWRAP = whiteSpace(NOWRAP);
whiteSpace.PRE_WRAP = whiteSpace(PRE_WRAP);
whiteSpace.PRE_LINE = whiteSpace(PRE_LINE);

export const lineBreak = property('lineBreak');
lineBreak.AUTO = lineBreak(AUTO);
lineBreak.LOOSE = lineBreak(LOOSE);
lineBreak.NORMAL = lineBreak(NORMAL);
lineBreak.STRICT = lineBreak(STRICT);
lineBreak.ANYWHERE = lineBreak(ANYWHERE);

export const textOverflow = property('textOverflow');
textOverflow.CLIP = textOverflow(CLIP);
textOverflow.ELLIPSIS = textOverflow(ELLIPSIS);

export const textEmphasis = property('textEmphasis');

export const textEmphasisColor = property('textEmphasisColor');
textEmphasisColor.CURRENT_COLOR = textEmphasisColor(CURRENT_COLOR);

export const textEmphasisPosition = property('textEmphasisPosition');

export const textEmphasisStyle = property('textEmphasisStyle');
textEmphasisStyle.NONE = textEmphasisStyle(NONE);
textEmphasisStyle.FILLED = textEmphasisStyle(FILLED);
textEmphasisStyle.OPEN = textEmphasisStyle(OPEN);
textEmphasisStyle.DOT = textEmphasisStyle(DOT);
textEmphasisStyle.CIRCLE = textEmphasisStyle(CIRCLE);
textEmphasisStyle.DOUBLE_CIRCLE = textEmphasisStyle(DOUBLE_CIRCLE);
textEmphasisStyle.TRIANGLE = textEmphasisStyle(TRIANGLE);
textEmphasisStyle.SESAME = textEmphasisStyle(SESAME);

export const textDecoration = property('textDecoration');

export const textDecorationColor = property('textDecorationColor');

export const textDecorationLine = property('textDecorationLine');
textDecorationLine.NONE = textDecoration(NONE);
textDecorationLine.UNDERLINE = textDecoration(UNDERLINE);
textDecorationLine.OVERLINE = textDecoration(OVERLINE);
textDecorationLine.LINE_THROUGH = textDecoration(LINE_THROUGH);
textDecorationLine.BLINK = textDecoration(BLINK);

export const textDecorationStyle = property('textDecorationStyle');
textDecorationStyle.SOLID = textDecorationStyle(SOLID);
textDecorationStyle.DOUBLE = textDecorationStyle(DOUBLE);
textDecorationStyle.DOTTED = textDecorationStyle(DOTTED);
textDecorationStyle.DASHED = textDecorationStyle(DASHED);
textDecorationStyle.WAVY = textDecorationStyle(WAVY);
