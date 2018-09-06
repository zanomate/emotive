
// export const css = (...styles) => Object.assign({}, ...styles);

export function css(...styles) {
    return Object.assign({}, ...styles);
}

export * from './constants';
export * from './methods';
export * from './properties';

import {
    _var, add, annotation, attr, blur, brightness, calc, characterVariant,
    circle, contrast, crossFade, cubicBezier, div, dropShadow, element, ellipse,
    fitContent, format, frames, grayscale, hex, hexa, hsl, hsla, hueRotate,
    image, imageSet, inset, invert, leader, linearGradient, local, matrix,
    matrix3d, minMax, mul, opacity, ornaments, perspective, polygon,
    radialGradient, ray, rect, repeatingLinearGradient, repeatingRadialGradient,
    rgb, rgba, rotate, rotate3d, rotateX, rotateY, rotateZ, saturate, scale,
    scale3d, scaleX, scaleY, scaleZ, sepia, skew, skewX, skewY, steps, styleset,
    stylistic, sub, swash, targetCounter, targetCounters, targetText, translate,
    translate3d, translateX, translateY, translateZ, url
} from './methods';
import {
    AlignContent, AlignItems, AlignmentBaseline, AlignSelf, All, Animation,
    AnimationDelay, AnimationDirection, AnimationDuration, AnimationFillMode,
    AnimationIterationCount, AnimationName, AnimationPlayState,
    AnimationTimingFunction, Background, BackgroundAttachment,
    BackgroundBlendMode, BackgroundClip, BackgroundColor, BackgroundImage,
    BackgroundOrigin, BackgroundPosition, BackgroundRepeat, BackgroundSize,
    BaselineShift, BlockOverflow, BlockSize, BookmarkLabel, BookmarkLevel,
    BookmarkState, Border, BorderBlock, BorderBlockColor, BorderBlockEnd,
    BorderBlockEndColor, BorderBlockEndStyle, BorderBlockEndWidth,
    BorderBlockStart, BorderBlockStartColor, BorderBlockStartStyle,
    BorderBlockStartWidth, BorderBlockStyle, BorderBlockWidth, BorderBottom,
    BorderBottomColor, BorderBottomLeftRadius, BorderBottomRightRadius,
    BorderBottomStyle, BorderBottomWidth, BorderBoundary, BorderCollapse,
    BorderColor, BorderEndEndRadius, BorderEndStartRadius, BorderImage,
    BorderImageOutset, BorderImageRepeat, BorderImageSlice, BorderImageSource,
    BorderImageWidth, BorderInline, BorderInlineColor, BorderInlineEnd,
    BorderInlineEndColor, BorderInlineEndStyle, BorderInlineEndWidth,
    BorderInlineStart, BorderInlineStartColor, BorderInlineStartStyle,
    BorderInlineStartWidth, BorderInlineStyle, BorderInlineWidth, BorderLeft,
    BorderLeftColor, BorderLeftStyle, BorderLeftWidth, BorderRadius,
    BorderRight, BorderRightColor, BorderRightStyle, BorderRightWidth,
    BorderSpacing, BorderStartEndRadius, BorderStartStartRadius, BorderStyle,
    BorderTop, BorderTopColor, BorderTopLeftRadius, BorderTopRightRadius,
    BorderTopStyle, BorderTopWidth, BorderWidth, Bottom, BoxDecorationBreak,
    BoxShadow, BreakAfter, BreakBefore, BreakInside, CaptionSide, CaretColor,
    Chains, Clear, Clip, ClipPath, ClipRule, Color, ColorInterpolationFilters,
    ColumnCount, ColumnFill, ColumnGap, ColumnRule, ColumnRuleColor,
    ColumnRuleStyle, ColumnRuleWidth, Columns, ColumnSpan, ColumnWidth, Contain,
    Content, Continue, CounterIncrement, CounterReset, CounterSet, Cursor,
    Direction, Display, DominantBaseline, EmptyCells, Fill, FillBreak,
    FillColor, FillImage, FillOpacity, FillOrigin, FillPosition, FillRepeat,
    FillRule, FillSize, Filter, Flex, FlexBasis, FlexDirection, FlexFlow,
    FlexGrow, FlexShrink, FlexWrap, Float, FloatOffset, FloatReference,
    FloodColor, FloodOpacity, Flow, Font, FontFamily, FontFeatureSettings,
    FontKerning, FontSize, FontSizeAdjust, FontStretch, FontStyle,
    FontSynthesis, FontVariant, FontVariantCaps, FontVariantEastAsian,
    FontVariantLigatures, FontVariantNumeric, FontVariantPosition, FontWeight,
    Gap, GlyphOrientationVertical, Grid, GridArea, GridAutoColumns,
    GridAutoFlow, GridAutoRows, GridColumn, GridColumnEnd, GridColumnStart,
    GridRow, GridRowEnd, GridRowStart, GridTemplate, GridTemplateAreas,
    GridTemplateColumns, GridTemplateRows, HangingPunctuation, Height, Hyphens,
    ImageOrientation, ImageResolution, InitialLetters, InitialLettersAlign,
    InitialLettersWrap, InlineSize, InlineSizing, Inset, InsetBlock,
    InsetBlockEnd, InsetBlockStart, InsetInline, InsetInlineEnd,
    InsetInlineStart, Isolation, JustifyContent, JustifyItems, JustifySelf,
    Left, LetterSpacing, LightingColor, LineBreak, LineClamp, LineHeight,
    LineHeightStep, ListStyle, ListStyleImage, ListStylePosition, ListStyleType,
    Margin, MarginBlock, MarginBlockEnd, MarginBlockStart, MarginBottom,
    MarginInline, MarginInlineEnd, MarginInlineStart, MarginLeft, MarginRight,
    MarginTop, MarkerSide, Mask, MaskBorder, MaskBorderMode, MaskBorderOutset,
    MaskBorderRepeat, MaskBorderSlice, MaskBorderSource, MaskBorderWidth,
    MaskClip, MaskComposite, MaskImage, MaskMode, MaskOrigin, MaskPosition,
    MaskRepeat, MaskSize, MaskType, MaxBlockSize, MaxHeight, MaxInlineSize,
    MaxLines, MaxWidth, MaxZoom, MinBlockSize, MinHeight, MinInlineSize,
    MinWidth, MinZoom, MixBlendMode, ObjectFit, ObjectPosition, Offset,
    OffsetAfter, OffsetAnchor, OffsetBefore, OffsetDistance, OffsetEnd,
    OffsetPath, OffsetPosition, OffsetRotate, OffsetStart, Opacity, Order,
    Orientation, Orphans, Outline, OutlineColor, OutlineOffset, OutlineStyle,
    OutlineWidth, Overflow, OverflowBlock, OverflowInline, OverflowWrap,
    OverflowX, OverflowY, Padding, PaddingBlock, PaddingBlockEnd,
    PaddingBlockStart, PaddingBottom, PaddingInline, PaddingInlineEnd,
    PaddingInlineStart, PaddingLeft, PaddingRight, PaddingTop, PageBreakAfter,
    PageBreakBefore, PageBreakInside, PlaceContent, PlaceItems, PlaceSelf,
    Position, Quotes, Resize, Right, RowGap, RubyAlign, RubyMerge, RubyPosition,
    ScrollbarGutter, ScrollBehavior, ScrollMargin, ScrollMarginBlock,
    ScrollMarginBlockEnd, ScrollMarginBlockStart, ScrollMarginBottom,
    ScrollMarginInline, ScrollMarginInlineEnd, ScrollMarginInlineStart,
    ScrollMarginLeft, ScrollMarginRight, ScrollMarginTop, ScrollPadding,
    ScrollPaddingBlock, ScrollPaddingBlockEnd, ScrollPaddingBlockStart,
    ScrollPaddingBottom, ScrollPaddingInline, ScrollPaddingInlineEnd,
    ScrollPaddingInlineStart, ScrollPaddingLeft, ScrollPaddingRight,
    ScrollPaddingTop, ScrollSnapAlign, ScrollSnapStop, ScrollSnapType, Shape,
    ShapeImageThreshold, ShapeInside, ShapeMargin, ShapeOutside, Size,
    StringSet, Stroke, StrokeAlign, StrokeBreak, StrokeColor, StrokeDasharray,
    StrokeDashCorner, StrokeDashJustify, StrokeDashoffset, StrokeImage,
    StrokeLinecap, StrokeLinejoin, StrokeMiterlimit, StrokeOpacity,
    StrokeOrigin, StrokePosition, StrokeRepeat, StrokeSize, StrokeWidth,
    TableLayout, TabSize, TextAlign, TextAlignAll, TextAlignLast,
    TextCombineUpright, TextDecoration, TextDecorationColor, TextDecorationLine,
    TextDecorationStyle, TextEmphasis, TextEmphasisColor, TextEmphasisPosition,
    TextEmphasisStyle, TextIndent, TextJustify, TextOrientation, TextOverflow,
    TextShadow, TextTransform, TextUnderlinePosition, Top, Transition,
    TransitionDelay, TransitionDuration, TransitionProperty,
    TransitionTimingFunction, UnicodeBidi, UserZoom, VerticalAlign, ViewportFit,
    Visibility, WhiteSpace, Widows, Width, WillChange, WordBreak, WordSpacing,
    WordWrap, WritingMode, ZIndex, Zoom
} from './properties';

export const Methods = {
    rgb, rgba, hsl, hsla, hex, hexa, targetCounter, targetCounters, targetText,
    leader, blur, brightness, contrast, dropShadow, grayscale, hueRotate,
    invert, opacity, saturate, sepia, stylistic, styleset, characterVariant,
    swash, ornaments, annotation, linearGradient, repeatingLinearGradient,
    radialGradient, repeatingRadialGradient, crossFade, element, image,
    imageSet, add, sub, mul, div, calc, fitContent, minMax, ray, rect, inset,
    circle, ellipse, polygon, cubicBezier, steps, frames, matrix, matrix3d,
    perspective, rotate, rotate3d, rotateX, rotateY, rotateZ, scale, scale3d,
    scaleX, scaleY, scaleZ, skew, skewX, skewY, translate, translate3d,
    translateX, translateY, translateZ, format, local, url, attr, _var
};

export const Properties = {
    AlignContent, AlignItems, AlignmentBaseline, AlignSelf, All, Animation,
    AnimationDelay, AnimationDirection, AnimationDuration, AnimationFillMode,
    AnimationIterationCount, AnimationName, AnimationPlayState,
    AnimationTimingFunction, Background, BackgroundAttachment,
    BackgroundBlendMode, BackgroundClip, BackgroundColor, BackgroundImage,
    BackgroundOrigin, BackgroundPosition, BackgroundRepeat, BackgroundSize,
    BaselineShift, BlockOverflow, BlockSize, BookmarkLabel, BookmarkLevel,
    BookmarkState, Border, BorderBlock, BorderBlockColor, BorderBlockEnd,
    BorderBlockEndColor, BorderBlockEndStyle, BorderBlockEndWidth,
    BorderBlockStart, BorderBlockStartColor, BorderBlockStartStyle,
    BorderBlockStartWidth, BorderBlockStyle, BorderBlockWidth, BorderBottom,
    BorderBottomColor, BorderBottomLeftRadius, BorderBottomRightRadius,
    BorderBottomStyle, BorderBottomWidth, BorderBoundary, BorderCollapse,
    BorderColor, BorderEndEndRadius, BorderEndStartRadius, BorderImage,
    BorderImageOutset, BorderImageRepeat, BorderImageSlice, BorderImageSource,
    BorderImageWidth, BorderInline, BorderInlineColor, BorderInlineEnd,
    BorderInlineEndColor, BorderInlineEndStyle, BorderInlineEndWidth,
    BorderInlineStart, BorderInlineStartColor, BorderInlineStartStyle,
    BorderInlineStartWidth, BorderInlineStyle, BorderInlineWidth, BorderLeft,
    BorderLeftColor, BorderLeftStyle, BorderLeftWidth, BorderRadius,
    BorderRight, BorderRightColor, BorderRightStyle, BorderRightWidth,
    BorderSpacing, BorderStartEndRadius, BorderStartStartRadius, BorderStyle,
    BorderTop, BorderTopColor, BorderTopLeftRadius, BorderTopRightRadius,
    BorderTopStyle, BorderTopWidth, BorderWidth, Bottom, BoxDecorationBreak,
    BoxShadow, BreakAfter, BreakBefore, BreakInside, CaptionSide, CaretColor,
    Chains, Clear, Clip, ClipPath, ClipRule, Color, ColorInterpolationFilters,
    ColumnCount, ColumnFill, ColumnGap, ColumnRule, ColumnRuleColor,
    ColumnRuleStyle, ColumnRuleWidth, Columns, ColumnSpan, ColumnWidth, Contain,
    Content, Continue, CounterIncrement, CounterReset, CounterSet, Cursor,
    Direction, Display, DominantBaseline, EmptyCells, Fill, FillBreak,
    FillColor, FillImage, FillOpacity, FillOrigin, FillPosition, FillRepeat,
    FillRule, FillSize, Filter, Flex, FlexBasis, FlexDirection, FlexFlow,
    FlexGrow, FlexShrink, FlexWrap, Float, FloatOffset, FloatReference,
    FloodColor, FloodOpacity, Flow, Font, FontFamily, FontFeatureSettings,
    FontKerning, FontSize, FontSizeAdjust, FontStretch, FontStyle,
    FontSynthesis, FontVariant, FontVariantCaps, FontVariantEastAsian,
    FontVariantLigatures, FontVariantNumeric, FontVariantPosition, FontWeight,
    Gap, GlyphOrientationVertical, Grid, GridArea, GridAutoColumns,
    GridAutoFlow, GridAutoRows, GridColumn, GridColumnEnd, GridColumnStart,
    GridRow, GridRowEnd, GridRowStart, GridTemplate, GridTemplateAreas,
    GridTemplateColumns, GridTemplateRows, HangingPunctuation, Height, Hyphens,
    ImageOrientation, ImageResolution, InitialLetters, InitialLettersAlign,
    InitialLettersWrap, InlineSize, InlineSizing, Inset, InsetBlock,
    InsetBlockEnd, InsetBlockStart, InsetInline, InsetInlineEnd,
    InsetInlineStart, Isolation, JustifyContent, JustifyItems, JustifySelf,
    Left, LetterSpacing, LightingColor, LineBreak, LineClamp, LineHeight,
    LineHeightStep, ListStyle, ListStyleImage, ListStylePosition, ListStyleType,
    Margin, MarginBlock, MarginBlockEnd, MarginBlockStart, MarginBottom,
    MarginInline, MarginInlineEnd, MarginInlineStart, MarginLeft, MarginRight,
    MarginTop, MarkerSide, Mask, MaskBorder, MaskBorderMode, MaskBorderOutset,
    MaskBorderRepeat, MaskBorderSlice, MaskBorderSource, MaskBorderWidth,
    MaskClip, MaskComposite, MaskImage, MaskMode, MaskOrigin, MaskPosition,
    MaskRepeat, MaskSize, MaskType, MaxBlockSize, MaxHeight, MaxInlineSize,
    MaxLines, MaxWidth, MaxZoom, MinBlockSize, MinHeight, MinInlineSize,
    MinWidth, MinZoom, MixBlendMode, ObjectFit, ObjectPosition, Offset,
    OffsetAfter, OffsetAnchor, OffsetBefore, OffsetDistance, OffsetEnd,
    OffsetPath, OffsetPosition, OffsetRotate, OffsetStart, Opacity, Order,
    Orientation, Orphans, Outline, OutlineColor, OutlineOffset, OutlineStyle,
    OutlineWidth, Overflow, OverflowBlock, OverflowInline, OverflowWrap,
    OverflowX, OverflowY, Padding, PaddingBlock, PaddingBlockEnd,
    PaddingBlockStart, PaddingBottom, PaddingInline, PaddingInlineEnd,
    PaddingInlineStart, PaddingLeft, PaddingRight, PaddingTop, PageBreakAfter,
    PageBreakBefore, PageBreakInside, PlaceContent, PlaceItems, PlaceSelf,
    Position, Quotes, Resize, Right, RowGap, RubyAlign, RubyMerge, RubyPosition,
    ScrollbarGutter, ScrollBehavior, ScrollMargin, ScrollMarginBlock,
    ScrollMarginBlockEnd, ScrollMarginBlockStart, ScrollMarginBottom,
    ScrollMarginInline, ScrollMarginInlineEnd, ScrollMarginInlineStart,
    ScrollMarginLeft, ScrollMarginRight, ScrollMarginTop, ScrollPadding,
    ScrollPaddingBlock, ScrollPaddingBlockEnd, ScrollPaddingBlockStart,
    ScrollPaddingBottom, ScrollPaddingInline, ScrollPaddingInlineEnd,
    ScrollPaddingInlineStart, ScrollPaddingLeft, ScrollPaddingRight,
    ScrollPaddingTop, ScrollSnapAlign, ScrollSnapStop, ScrollSnapType, Shape,
    ShapeImageThreshold, ShapeInside, ShapeMargin, ShapeOutside, Size,
    StringSet, Stroke, StrokeAlign, StrokeBreak, StrokeColor, StrokeDasharray,
    StrokeDashCorner, StrokeDashJustify, StrokeDashoffset, StrokeImage,
    StrokeLinecap, StrokeLinejoin, StrokeMiterlimit, StrokeOpacity,
    StrokeOrigin, StrokePosition, StrokeRepeat, StrokeSize, StrokeWidth,
    TableLayout, TabSize, TextAlign, TextAlignAll, TextAlignLast,
    TextCombineUpright, TextDecoration, TextDecorationColor, TextDecorationLine,
    TextDecorationStyle, TextEmphasis, TextEmphasisColor, TextEmphasisPosition,
    TextEmphasisStyle, TextIndent, TextJustify, TextOrientation, TextOverflow,
    TextShadow, TextTransform, TextUnderlinePosition, Top, Transition,
    TransitionDelay, TransitionDuration, TransitionProperty,
    TransitionTimingFunction, UnicodeBidi, UserZoom, VerticalAlign, ViewportFit,
    Visibility, WhiteSpace, Widows, Width, WillChange, WordBreak, WordSpacing,
    WordWrap, WritingMode, ZIndex, Zoom
};