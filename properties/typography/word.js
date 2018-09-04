import { property } from 'utils';
import { BREAK_ALL, BREAK_WORD, KEEP_ALL, NORMAL } from 'constants';

export const wordBreak = property('wordBreak');
wordBreak.NORMAL = wordBreak(NORMAL);
wordBreak.KEEP_ALL = wordBreak(KEEP_ALL);
wordBreak.BREAK_ALL = wordBreak(BREAK_ALL);
wordBreak.BREAK_WORD = wordBreak(BREAK_WORD);

export const wordSpacing = property('wordSpacing');
wordSpacing.NORMAL = wordSpacing(NORMAL);
