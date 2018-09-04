import { property } from '../../utils';
import { AUTO, LINEARRGB, NONE, SRGB, TRANSPARENT } from '../../constants';
import {
    blur, brightness, contrast, dropShadow, grayscale, hueRotate, invert, opacity, saturate, sepia
} from '../../methods';

export const filter = property('filter');
filter.NONE = filter(NONE);
filter.blur = (...values) => filter(blur(...values));
filter.brightness = (...values) => filter(brightness(...values));
filter.contrast = (...values) => filter(contrast(...values));
filter.dropShadow = (...values) => filter(dropShadow(...values));
filter.grayscale = (...values) => filter(grayscale(...values));
filter.hueRotate = (...values) => filter(hueRotate(...values));
filter.invert = (...values) => filter(invert(...values));
filter.opacity = (...values) => filter(opacity(...values));
filter.sepia = (...values) => filter(sepia(...values));
filter.saturate = (...values) => filter(saturate(...values));

export const floodColor = property('floodColor');
floodColor.TRANSPARENT = floodColor(TRANSPARENT);

export const floodOpacity = property('floodOpacity');

export const colorInterpolationFilters = property('colorInterpolationFilters');
colorInterpolationFilters.AUTO = colorInterpolationFilters(AUTO);
colorInterpolationFilters.SRGB = colorInterpolationFilters(SRGB);
colorInterpolationFilters.LINEARRGB = colorInterpolationFilters(LINEARRGB);

export const lightingColor = property('lightingColor');
lightingColor.TRANSPARENT = lightingColor(TRANSPARENT);
