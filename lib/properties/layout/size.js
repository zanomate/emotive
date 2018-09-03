import { property } from 'utils/index';
import { AUTO, LANDSCAPE, NONE, PORTRAIT } from 'constants/index';
import { BOTH, HORIZONTAL, MAX_CONTENT, MIN_CONTENT, VERTICAL } from 'constants';
import { fitContent } from 'functions';

export const size = property('size');
size.AUTO = size(AUTO);
size.PORTRAIT = size(PORTRAIT);
size.LANDSCAPE = size(LANDSCAPE);

export const blockSize = property('blockSize');
blockSize.AUTO = blockSize(AUTO);

export const inlineSize = property('inlineSize');
inlineSize.AUTO = inlineSize(AUTO);

export const minBlockSize = property('minBlockSize');

export const minInlineSize = property('minInlineSize');

export const maxBlockSize = property('maxBlockSize');
maxBlockSize.NONE = maxBlockSize(NONE);

export const maxInlineSize = property('maxInlineSize');
maxInlineSize.NONE = maxInlineSize(NONE);

export const resize = property('resize');
resize.NONE = resize(NONE);
resize.BOTH = resize(BOTH);
resize.HORIZONTAL = resize(HORIZONTAL);
resize.VERTICAL = resize(VERTICAL);

/* Width */

export const width = property('width');
width.AUTO = width(AUTO);
width.MIN_CONTENT = width(MIN_CONTENT);
width.MAX_CONTENT = width(MAX_CONTENT);
width.fitContent = (...values) => width(fitContent(...values));

export const minWidth = property('minWidth');
minWidth.AUTO = minWidth(AUTO);
minWidth.MIN_CONTENT = minWidth(MIN_CONTENT);
minWidth.MAX_CONTENT = minWidth(MAX_CONTENT);
minWidth.fitContent = (...values) => minWidth(fitContent(...values));

export const maxWidth = property('maxWidth');
maxWidth.NONE = maxWidth(NONE);
maxWidth.MIN_CONTENT = maxWidth(MIN_CONTENT);
maxWidth.MAX_CONTENT = maxWidth(MAX_CONTENT);
maxWidth.fitContent = (...values) => maxWidth(fitContent(...values));

/* Height */

export const height = property('width');
height.AUTO = height(AUTO);
height.MIN_CONTENT = height(MIN_CONTENT);
height.MAX_CONTENT = height(MAX_CONTENT);
height.fitContent = (...values) => height(fitContent(...values));

export const minHeight = property('minHeight');
minHeight.AUTO = minHeight(AUTO);
minHeight.MIN_CONTENT = minHeight(MIN_CONTENT);
minHeight.MAX_CONTENT = minHeight(MAX_CONTENT);
minHeight.fitContent = (...values) => minHeight(fitContent(...values));

export const maxHeight = property('maxHeight');
maxHeight.NONE = maxHeight(NONE);
maxHeight.MIN_CONTENT = maxHeight(MIN_CONTENT);
maxHeight.MAX_CONTENT = maxHeight(MAX_CONTENT);
maxHeight.fitContent = (...values) => maxHeight(fitContent(...values));
