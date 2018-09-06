import { property } from '../../utils';
import { BREAK_SPACES, BREAK_WORD, NORMAL } from '../../constants';

const WordWrap = property('wordWrap');
WordWrap.NORMAL = WordWrap(NORMAL);
WordWrap.BREAK_WORD = WordWrap(BREAK_WORD);
WordWrap.BREAK_SPACES = WordWrap(BREAK_SPACES);
export { WordWrap };

const OverflowWrap = property('overflowWrap');
OverflowWrap.NORMAL = OverflowWrap(NORMAL);
OverflowWrap.BREAK_WORD = OverflowWrap(BREAK_WORD);
OverflowWrap.BREAK_SPACES = OverflowWrap(BREAK_SPACES);
export { OverflowWrap };
