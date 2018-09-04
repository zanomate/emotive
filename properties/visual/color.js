import { property } from 'utils';
import { AUTO, TRANSPARENT } from 'constants';

export const color = property('color');
color.TRANSPARENT = color(TRANSPARENT);

export const caretColor = property('caretColor');
caretColor.AUTO = caretColor(AUTO);
caretColor.TRANSPARENT = caretColor(TRANSPARENT);

export const opacity = property('opacity');
