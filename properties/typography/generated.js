import { property } from '../../utils';
import {
    CLOSE, CLOSE_QUOTE, CONTENTS, DOCUMENT_URL, NO_CLOSE_QUOTE, NO_OPEN_QUOTE, NONE, NORMAL, OPEN, OPEN_QUOTE
} from '../../constants';
import { leader, targetCounter, targetCounters, targetText, url } from '../../methods';

export const content = property('content');
content.NONE = content(NONE);
content.NORMAL = content(NORMAL);
content.CONTENTS = content(CONTENTS);
content.OPEN_QUOTE = content(OPEN_QUOTE);
content.CLOSE_QUOTE = content(CLOSE_QUOTE);
content.NO_OPEN_QUOTE = content(NO_OPEN_QUOTE);
content.NO_CLOSE_QUOTE = content(NO_CLOSE_QUOTE);
content.DOCUMENT_URL = content(DOCUMENT_URL);
content.url = (...values) => content(url(...values));
content.targetCounter = (...values) => content(targetCounter(...values));
content.targetCounters = (...values) => content(targetCounters(...values));
content.targetText = (...values) => content(targetText(...values));
content.leader = (...values) => content(leader(...values));

export const quotes = property('quotes');
quotes.NONE = quotes(NONE);

export const stringSet = property('stringSet');
stringSet.NONE = stringSet(NONE);

export const bookmarkLevel = property('bookmarkLevel');
bookmarkLevel.NONE = bookmarkLevel(NONE);

export const bookmarkLabel = property('bookmarkLabel');
bookmarkLabel.CONTENTS = bookmarkLabel(CONTENTS);
bookmarkLabel.OPEN_QUOTE = bookmarkLabel(OPEN_QUOTE);
bookmarkLabel.CLOSE_QUOTE = bookmarkLabel(CLOSE_QUOTE);
bookmarkLabel.NO_OPEN_QUOTE = bookmarkLabel(NO_OPEN_QUOTE);
bookmarkLabel.NO_CLOSE_QUOTE = bookmarkLabel(NO_CLOSE_QUOTE);
bookmarkLabel.DOCUMENT_URL = bookmarkLabel(DOCUMENT_URL);
bookmarkLabel.url = (...values) => bookmarkLabel(url(...values));
bookmarkLabel.targetCounter = (...values) => bookmarkLabel(targetCounter(...values));
bookmarkLabel.targetCounters = (...values) => bookmarkLabel(targetCounters(...values));
bookmarkLabel.targetText = (...values) => bookmarkLabel(targetText(...values));
bookmarkLabel.leader = (...values) => bookmarkLabel(leader(...values));

export const bookmarkState = property('bookmarkState');
bookmarkState.OPEN = bookmarkState(OPEN);
bookmarkState.CLOSE = bookmarkState(CLOSE);
