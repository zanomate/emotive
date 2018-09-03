import { property } from 'utils';
import { BREAK_SPACES, BREAK_WORD, NORMAL } from 'constants';

export const wordWrap = property('wordWrap');
wordWrap.NORMAL = wordWrap(NORMAL);
wordWrap.BREAK_WORD = wordWrap(BREAK_WORD);
wordWrap.BREAK_SPACES = wordWrap(BREAK_SPACES);

export const overflowWrap = property('overflowWrap');
overflowWrap.NORMAL = overflowWrap(NORMAL);
overflowWrap.BREAK_WORD = overflowWrap(BREAK_WORD);
overflowWrap.BREAK_SPACES = overflowWrap(BREAK_SPACES);
