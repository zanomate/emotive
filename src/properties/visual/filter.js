import { property } from '../../utils';
import { AUTO, LINEARRGB, NONE, SRGB, TRANSPARENT } from '../../constants';
import {
    blur, brightness, contrast, dropShadow, grayscale, hueRotate, invert,
    opacity, saturate, sepia
} from '../../methods';

const Filter = property('filter');
Filter.NONE = Filter(NONE);
Filter.blur = (...values) => Filter(blur(...values));
Filter.brightness = (...values) => Filter(brightness(...values));
Filter.contrast = (...values) => Filter(contrast(...values));
Filter.dropShadow = (...values) => Filter(dropShadow(...values));
Filter.grayscale = (...values) => Filter(grayscale(...values));
Filter.hueRotate = (...values) => Filter(hueRotate(...values));
Filter.invert = (...values) => Filter(invert(...values));
Filter.opacity = (...values) => Filter(opacity(...values));
Filter.sepia = (...values) => Filter(sepia(...values));
Filter.saturate = (...values) => Filter(saturate(...values));
export { Filter };

const FloodColor = property('floodColor');
FloodColor.TRANSPARENT = FloodColor(TRANSPARENT);
export { FloodColor };

const FloodOpacity = property('floodOpacity');
export { FloodOpacity };

const ColorInterpolationFilters = property('colorInterpolationFilters');
ColorInterpolationFilters.AUTO = ColorInterpolationFilters(AUTO);
ColorInterpolationFilters.SRGB = ColorInterpolationFilters(SRGB);
ColorInterpolationFilters.LINEARRGB = ColorInterpolationFilters(LINEARRGB);
export { ColorInterpolationFilters };

const LightingColor = property('lightingColor');
LightingColor.TRANSPARENT = LightingColor(TRANSPARENT);
export { LightingColor };
