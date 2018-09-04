import { property } from '../../utils';
import {
    _100, _200, _300, _400, _500, _600, _700, _800, _900, ALL_PETITE_CAPS, ALL_SMALL_CAPS, AUTO, BOLD, BOLDER, CAPTION,
    COMMON_LIGATURES, CONDENSED, CONTEXTUAL, CURSIVE, DIAGONAL_FRACTIONS, DISCRETIONARY_LIGATURES, EXPANDED,
    EXTRA_CONDENSED, EXTRA_EXPANDED, FANTASY, FULL_WIDTH, HISTORICAL_LIGATURES, ICON, ITALIC, JIS04, JIS78, JIS83,
    JIS90, LARGE, LARGER, LIGHTER, LINING_NUMS, MEDIUM, MENU, MESSAGE_BOX, MONOSPACE, NO_COMMON_LIGATURES,
    NO_CONTEXTUAL, NO_DISCRETIONARY_LIGATURES, NO_HISTORICAL_LIGATURES, NONE, NORMAL, OBLIQUE, OLDSTYLE_NUMS, ORDINAL,
    PETITE_CAPS, PROPORTIONAL_NUMS, PROPORTIONAL_WIDTH, RUBY, SANS_SERIF, SEMI_CONDENSED, SEMI_EXPANDED, SERIF,
    SIMPLIFIED, SLASHED_ZERO, SMALL, SMALL_CAPS, SMALL_CAPTION, SMALLER, STACKED_FRACTIONS, STATUS_BAR, SUB, SUPER,
    TABULAR_NUMS, TITLING_CAPS, TRADITIONAL, ULTRA_CONDENSED, ULTRA_EXPANDED, UNICASE, X_LARGE, X_SMALL, XX_LARGE,
    XX_SMALL
} from '../../constants';

export const font = property('font');
font.CAPTION = font(CAPTION);
font.ICON = font(ICON);
font.MENU = font(MENU);
font.MESSAGE_BOX = font(MESSAGE_BOX);
font.SMALL_CAPTION = font(SMALL_CAPTION);
font.STATUS_BAR = font(STATUS_BAR);

export const fontFamily = property('fontFamily');
fontFamily.SERIF = fontFamily(SERIF);
fontFamily.SANS_SERIF = fontFamily(SANS_SERIF);
fontFamily.CURSIVE = fontFamily(CURSIVE);
fontFamily.FANTASY = fontFamily(FANTASY);
fontFamily.MONOSPACE = fontFamily(MONOSPACE);
fontFamily.serif = (...values) => fontFamily([...values, SERIF]);
fontFamily.sansSerif = (...values) => fontFamily([...values, SANS_SERIF]);
fontFamily.cursive = (...values) => fontFamily([...values, CURSIVE]);
fontFamily.fantasy = (...values) => fontFamily([...values, FANTASY]);
fontFamily.monospace = (...values) => fontFamily([...values, MONOSPACE]);

export const fontFeatureSettings = property('fontFeatureSettings');
fontFeatureSettings.NORMAL = fontFeatureSettings(NORMAL);

export const fontKerning = property('fontKerning');
fontKerning.AUTO = fontKerning(AUTO);
fontKerning.NORMAL = fontKerning(NORMAL);
fontKerning.NONE = fontKerning(NONE);

export const fontStyle = property('fontStyle');
fontStyle.NORMAL = fontStyle(NORMAL);
fontStyle.ITALIC = fontStyle(ITALIC);
fontStyle.OBLIQUE = fontStyle(OBLIQUE);

export const fontVariant = property('fontVariant');
fontVariant.NORMAL = fontVariant(NORMAL);
fontVariant.NONE = fontVariant(NONE);

export const fontVariantCaps = property('fontVariantCaps');
fontVariantCaps.NORMAL = fontVariantCaps(NORMAL);
fontVariantCaps.SMALL_CAPS = fontVariantCaps(SMALL_CAPS);
fontVariantCaps.ALL_SMALL_CAPS = fontVariantCaps(ALL_SMALL_CAPS);
fontVariantCaps.PETITE_CAPS = fontVariantCaps(PETITE_CAPS);
fontVariantCaps.ALL_PETITE_CAPS = fontVariantCaps(ALL_PETITE_CAPS);
fontVariantCaps.UNICASE = fontVariantCaps(UNICASE);
fontVariantCaps.TITLING_CAPS = fontVariantCaps(TITLING_CAPS);

export const fontVariantEastAsian = property('fontVariantEastAsian');
fontVariantEastAsian.NORMAL = fontVariantEastAsian(NORMAL);
fontVariantEastAsian.JIS78 = fontVariantEastAsian(JIS78);
fontVariantEastAsian.JIS83 = fontVariantEastAsian(JIS83);
fontVariantEastAsian.JIS90 = fontVariantEastAsian(JIS90);
fontVariantEastAsian.JIS04 = fontVariantEastAsian(JIS04);
fontVariantEastAsian.SIMPLIFIED = fontVariantEastAsian(SIMPLIFIED);
fontVariantEastAsian.TRADITIONAL = fontVariantEastAsian(TRADITIONAL);
fontVariantEastAsian.FULL_WIDTH = fontVariantEastAsian(FULL_WIDTH);
fontVariantEastAsian.PROPORTIONAL_WIDTH = fontVariantEastAsian(PROPORTIONAL_WIDTH);
fontVariantEastAsian.RUBY = fontVariantEastAsian(RUBY);

export const fontVariantLigatures = property('fontVariantLigatures');
fontVariantLigatures.NORMAL = fontVariantLigatures(NORMAL);
fontVariantLigatures.NONE = fontVariantLigatures(NONE);
fontVariantLigatures.COMMON_LIGATURES = fontVariantLigatures(COMMON_LIGATURES);
fontVariantLigatures.NO_COMMON_LIGATURES = fontVariantLigatures(NO_COMMON_LIGATURES);
fontVariantLigatures.DISCRETIONARY_LIGATURES = fontVariantLigatures(DISCRETIONARY_LIGATURES);
fontVariantLigatures.NO_DISCRETIONARY_LIGATURES = fontVariantLigatures(NO_DISCRETIONARY_LIGATURES);
fontVariantLigatures.HISTORICAL_LIGATURES = fontVariantLigatures(HISTORICAL_LIGATURES);
fontVariantLigatures.NO_HISTORICAL_LIGATURES = fontVariantLigatures(NO_HISTORICAL_LIGATURES);
fontVariantLigatures.CONTEXTUAL = fontVariantLigatures(CONTEXTUAL);
fontVariantLigatures.NO_CONTEXTUAL = fontVariantLigatures(NO_CONTEXTUAL);

export const fontVariantNumeric = property('fontVariantNumeric');
fontVariantNumeric.NORMAL = fontVariantNumeric(NORMAL);
fontVariantNumeric.LINING_NUMS = fontVariantNumeric(LINING_NUMS);
fontVariantNumeric.OLDSTYLE_NUMS = fontVariantNumeric(OLDSTYLE_NUMS);
fontVariantNumeric.PROPORTIONAL_NUMS = fontVariantNumeric(PROPORTIONAL_NUMS);
fontVariantNumeric.TABULAR_NUMS = fontVariantNumeric(TABULAR_NUMS);
fontVariantNumeric.DIAGONAL_FRACTIONS = fontVariantNumeric(DIAGONAL_FRACTIONS);
fontVariantNumeric.STACKED_FRACTIONS = fontVariantNumeric(STACKED_FRACTIONS);
fontVariantNumeric.ORDINAL = fontVariantNumeric(ORDINAL);
fontVariantNumeric.SLASHED_ZERO = fontVariantNumeric(SLASHED_ZERO);

export const fontVariantPosition = property('fontVariantPosition');
fontVariantPosition.NORMAL = fontVariantPosition(NORMAL);
fontVariantPosition.SUB = fontVariantPosition(SUB);
fontVariantPosition.SUPER = fontVariantPosition(SUPER);

export const fontWeight = property('fontWeight');
fontWeight.NORMAL = fontWeight(NORMAL);
fontWeight.BOLD = fontWeight(BOLD);
fontWeight.BOLDER = fontWeight(BOLDER);
fontWeight.LIGHTER = fontWeight(LIGHTER);
fontWeight._100 = fontWeight(_100);
fontWeight._200 = fontWeight(_200);
fontWeight._300 = fontWeight(_300);
fontWeight._400 = fontWeight(_400);
fontWeight._500 = fontWeight(_500);
fontWeight._600 = fontWeight(_600);
fontWeight._700 = fontWeight(_700);
fontWeight._800 = fontWeight(_800);
fontWeight._900 = fontWeight(_900);

export const fontSize = property('fontSize');
fontSize.XX_SMALL = fontSize(XX_SMALL);
fontSize.X_SMALL = fontSize(X_SMALL);
fontSize.SMALL = fontSize(SMALL);
fontSize.MEDIUM = fontSize(MEDIUM);
fontSize.LARGE = fontSize(LARGE);
fontSize.X_LARGE = fontSize(X_LARGE);
fontSize.XX_LARGE = fontSize(XX_LARGE);
fontSize.LARGER = fontSize(LARGER);
fontSize.SMALLER = fontSize(SMALLER);

export const fontSizeAdjust = property('fontSizeAdjust');
fontSizeAdjust.NONE = fontSizeAdjust(NONE);

export const fontStretch = property('fontStretch');
fontStretch.NORMAL = fontStretch(NORMAL);
fontStretch.ULTRA_CONDENSED = fontStretch(ULTRA_CONDENSED);
fontStretch.EXTRA_CONDENSED = fontStretch(EXTRA_CONDENSED);
fontStretch.CONDENSED = fontStretch(CONDENSED);
fontStretch.SEMI_CONDENSED = fontStretch(SEMI_CONDENSED);
fontStretch.SEMI_EXPANDED = fontStretch(SEMI_EXPANDED);
fontStretch.EXPANDED = fontStretch(EXPANDED);
fontStretch.EXTRA_EXPANDED = fontStretch(EXTRA_EXPANDED);
fontStretch.ULTRA_EXPANDED = fontStretch(ULTRA_EXPANDED);

export const fontSynthesis = property('fontSynthesis');
fontSynthesis.NONE = fontSynthesis(NONE);
