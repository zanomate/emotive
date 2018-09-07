import { property } from '../../utils/factory';
import {
    _100, _200, _300, _400, _500, _600, _700, _800, _900, ALL_PETITE_CAPS,
    ALL_SMALL_CAPS, AUTO, BOLD, BOLDER, CAPTION, COMMON_LIGATURES, CONDENSED,
    CONTEXTUAL, CURSIVE, DIAGONAL_FRACTIONS, DISCRETIONARY_LIGATURES, EXPANDED,
    EXTRA_CONDENSED, EXTRA_EXPANDED, FANTASY, FULL_WIDTH, HISTORICAL_LIGATURES,
    ICON, ITALIC, JIS04, JIS78, JIS83, JIS90, LARGE, LARGER, LIGHTER,
    LINING_NUMS, MEDIUM, MENU, MESSAGE_BOX, MONOSPACE, NO_COMMON_LIGATURES,
    NO_CONTEXTUAL, NO_DISCRETIONARY_LIGATURES, NO_HISTORICAL_LIGATURES, NONE,
    NORMAL, OBLIQUE, OLDSTYLE_NUMS, ORDINAL, PETITE_CAPS, PROPORTIONAL_NUMS,
    PROPORTIONAL_WIDTH, RUBY, SANS_SERIF, SEMI_CONDENSED, SEMI_EXPANDED, SERIF,
    SIMPLIFIED, SLASHED_ZERO, SMALL, SMALL_CAPS, SMALL_CAPTION, SMALLER,
    STACKED_FRACTIONS, STATUS_BAR, SUB, SUPER, TABULAR_NUMS, TITLING_CAPS,
    TRADITIONAL, ULTRA_CONDENSED, ULTRA_EXPANDED, UNICASE, X_LARGE, X_SMALL,
    XX_LARGE, XX_SMALL
} from '../../constants';

const Font = property('font');
Font.CAPTION = Font(CAPTION);
Font.ICON = Font(ICON);
Font.MENU = Font(MENU);
Font.MESSAGE_BOX = Font(MESSAGE_BOX);
Font.SMALL_CAPTION = Font(SMALL_CAPTION);
Font.STATUS_BAR = Font(STATUS_BAR);
export { Font };

const FontFamily = property('fontFamily');
FontFamily.SERIF = FontFamily(SERIF);
FontFamily.SANS_SERIF = FontFamily(SANS_SERIF);
FontFamily.CURSIVE = FontFamily(CURSIVE);
FontFamily.FANTASY = FontFamily(FANTASY);
FontFamily.MONOSPACE = FontFamily(MONOSPACE);
FontFamily.serif = (...values) => FontFamily([...values, SERIF]);
FontFamily.sansSerif = (...values) => FontFamily([...values, SANS_SERIF]);
FontFamily.cursive = (...values) => FontFamily([...values, CURSIVE]);
FontFamily.fantasy = (...values) => FontFamily([...values, FANTASY]);
FontFamily.monospace = (...values) => FontFamily([...values, MONOSPACE]);
export { FontFamily };

const FontFeatureSettings = property('fontFeatureSettings');
FontFeatureSettings.NORMAL = FontFeatureSettings(NORMAL);
export { FontFeatureSettings };

const FontKerning = property('fontKerning');
FontKerning.AUTO = FontKerning(AUTO);
FontKerning.NORMAL = FontKerning(NORMAL);
FontKerning.NONE = FontKerning(NONE);
export { FontKerning };

const FontStyle = property('fontStyle');
FontStyle.NORMAL = FontStyle(NORMAL);
FontStyle.ITALIC = FontStyle(ITALIC);
FontStyle.OBLIQUE = FontStyle(OBLIQUE);
export { FontStyle };

const FontVariant = property('fontVariant');
FontVariant.NORMAL = FontVariant(NORMAL);
FontVariant.NONE = FontVariant(NONE);
export { FontVariant };

const FontVariantCaps = property('fontVariantCaps');
FontVariantCaps.NORMAL = FontVariantCaps(NORMAL);
FontVariantCaps.SMALL_CAPS = FontVariantCaps(SMALL_CAPS);
FontVariantCaps.ALL_SMALL_CAPS = FontVariantCaps(ALL_SMALL_CAPS);
FontVariantCaps.PETITE_CAPS = FontVariantCaps(PETITE_CAPS);
FontVariantCaps.ALL_PETITE_CAPS = FontVariantCaps(ALL_PETITE_CAPS);
FontVariantCaps.UNICASE = FontVariantCaps(UNICASE);
FontVariantCaps.TITLING_CAPS = FontVariantCaps(TITLING_CAPS);
export { FontVariantCaps };

const FontVariantEastAsian = property('fontVariantEastAsian');
FontVariantEastAsian.NORMAL = FontVariantEastAsian(NORMAL);
FontVariantEastAsian.JIS78 = FontVariantEastAsian(JIS78);
FontVariantEastAsian.JIS83 = FontVariantEastAsian(JIS83);
FontVariantEastAsian.JIS90 = FontVariantEastAsian(JIS90);
FontVariantEastAsian.JIS04 = FontVariantEastAsian(JIS04);
FontVariantEastAsian.SIMPLIFIED = FontVariantEastAsian(SIMPLIFIED);
FontVariantEastAsian.TRADITIONAL = FontVariantEastAsian(TRADITIONAL);
FontVariantEastAsian.FULL_WIDTH = FontVariantEastAsian(FULL_WIDTH);
FontVariantEastAsian.PROPORTIONAL_WIDTH = FontVariantEastAsian(PROPORTIONAL_WIDTH);
FontVariantEastAsian.RUBY = FontVariantEastAsian(RUBY);
export { FontVariantEastAsian };

const FontVariantLigatures = property('fontVariantLigatures');
FontVariantLigatures.NORMAL = FontVariantLigatures(NORMAL);
FontVariantLigatures.NONE = FontVariantLigatures(NONE);
FontVariantLigatures.COMMON_LIGATURES = FontVariantLigatures(COMMON_LIGATURES);
FontVariantLigatures.NO_COMMON_LIGATURES = FontVariantLigatures(NO_COMMON_LIGATURES);
FontVariantLigatures.DISCRETIONARY_LIGATURES = FontVariantLigatures(DISCRETIONARY_LIGATURES);
FontVariantLigatures.NO_DISCRETIONARY_LIGATURES = FontVariantLigatures(NO_DISCRETIONARY_LIGATURES);
FontVariantLigatures.HISTORICAL_LIGATURES = FontVariantLigatures(HISTORICAL_LIGATURES);
FontVariantLigatures.NO_HISTORICAL_LIGATURES = FontVariantLigatures(NO_HISTORICAL_LIGATURES);
FontVariantLigatures.CONTEXTUAL = FontVariantLigatures(CONTEXTUAL);
FontVariantLigatures.NO_CONTEXTUAL = FontVariantLigatures(NO_CONTEXTUAL);
export { FontVariantLigatures };

const FontVariantNumeric = property('fontVariantNumeric');
FontVariantNumeric.NORMAL = FontVariantNumeric(NORMAL);
FontVariantNumeric.LINING_NUMS = FontVariantNumeric(LINING_NUMS);
FontVariantNumeric.OLDSTYLE_NUMS = FontVariantNumeric(OLDSTYLE_NUMS);
FontVariantNumeric.PROPORTIONAL_NUMS = FontVariantNumeric(PROPORTIONAL_NUMS);
FontVariantNumeric.TABULAR_NUMS = FontVariantNumeric(TABULAR_NUMS);
FontVariantNumeric.DIAGONAL_FRACTIONS = FontVariantNumeric(DIAGONAL_FRACTIONS);
FontVariantNumeric.STACKED_FRACTIONS = FontVariantNumeric(STACKED_FRACTIONS);
FontVariantNumeric.ORDINAL = FontVariantNumeric(ORDINAL);
FontVariantNumeric.SLASHED_ZERO = FontVariantNumeric(SLASHED_ZERO);
export { FontVariantNumeric };

const FontVariantPosition = property('fontVariantPosition');
FontVariantPosition.NORMAL = FontVariantPosition(NORMAL);
FontVariantPosition.SUB = FontVariantPosition(SUB);
FontVariantPosition.SUPER = FontVariantPosition(SUPER);
export { FontVariantPosition };

const FontWeight = property('fontWeight');
FontWeight.NORMAL = FontWeight(NORMAL);
FontWeight.BOLD = FontWeight(BOLD);
FontWeight.BOLDER = FontWeight(BOLDER);
FontWeight.LIGHTER = FontWeight(LIGHTER);
FontWeight._100 = FontWeight(_100);
FontWeight._200 = FontWeight(_200);
FontWeight._300 = FontWeight(_300);
FontWeight._400 = FontWeight(_400);
FontWeight._500 = FontWeight(_500);
FontWeight._600 = FontWeight(_600);
FontWeight._700 = FontWeight(_700);
FontWeight._800 = FontWeight(_800);
FontWeight._900 = FontWeight(_900);
export { FontWeight };

const FontSize = property('fontSize');
FontSize.XX_SMALL = FontSize(XX_SMALL);
FontSize.X_SMALL = FontSize(X_SMALL);
FontSize.SMALL = FontSize(SMALL);
FontSize.MEDIUM = FontSize(MEDIUM);
FontSize.LARGE = FontSize(LARGE);
FontSize.X_LARGE = FontSize(X_LARGE);
FontSize.XX_LARGE = FontSize(XX_LARGE);
FontSize.LARGER = FontSize(LARGER);
FontSize.SMALLER = FontSize(SMALLER);
export { FontSize };

const FontSizeAdjust = property('fontSizeAdjust');
FontSizeAdjust.NONE = FontSizeAdjust(NONE);
export { FontSizeAdjust };

const FontStretch = property('fontStretch');
FontStretch.NORMAL = FontStretch(NORMAL);
FontStretch.ULTRA_CONDENSED = FontStretch(ULTRA_CONDENSED);
FontStretch.EXTRA_CONDENSED = FontStretch(EXTRA_CONDENSED);
FontStretch.CONDENSED = FontStretch(CONDENSED);
FontStretch.SEMI_CONDENSED = FontStretch(SEMI_CONDENSED);
FontStretch.SEMI_EXPANDED = FontStretch(SEMI_EXPANDED);
FontStretch.EXPANDED = FontStretch(EXPANDED);
FontStretch.EXTRA_EXPANDED = FontStretch(EXTRA_EXPANDED);
FontStretch.ULTRA_EXPANDED = FontStretch(ULTRA_EXPANDED);
export { FontStretch };

const FontSynthesis = property('fontSynthesis');
FontSynthesis.NONE = FontSynthesis(NONE);
export { FontSynthesis };
