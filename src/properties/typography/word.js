import { property } from '../../utils';
import { BREAK_ALL, BREAK_WORD, KEEP_ALL, NORMAL } from '../../constants';

const WordBreak = property('wordBreak');
WordBreak.NORMAL = WordBreak(NORMAL);
WordBreak.KEEP_ALL = WordBreak(KEEP_ALL);
WordBreak.BREAK_ALL = WordBreak(BREAK_ALL);
WordBreak.BREAK_WORD = WordBreak(BREAK_WORD);
export { WordBreak };

const WordSpacing = property('wordSpacing');
WordSpacing.NORMAL = WordSpacing(NORMAL);
export { WordSpacing };
