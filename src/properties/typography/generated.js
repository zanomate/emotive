import { property } from '../../utils/factory';
import {
    CLOSE, CLOSE_QUOTE, CONTENTS, DOCUMENT_URL, NO_CLOSE_QUOTE, NO_OPEN_QUOTE,
    NONE, NORMAL, OPEN, OPEN_QUOTE
} from '../../constants';
import {
    leader, targetCounter, targetCounters, targetText, url
} from '../../methods/index';

const Content = property('content');
Content.NONE = Content(NONE);
Content.NORMAL = Content(NORMAL);
Content.CONTENTS = Content(CONTENTS);
Content.OPEN_QUOTE = Content(OPEN_QUOTE);
Content.CLOSE_QUOTE = Content(CLOSE_QUOTE);
Content.NO_OPEN_QUOTE = Content(NO_OPEN_QUOTE);
Content.NO_CLOSE_QUOTE = Content(NO_CLOSE_QUOTE);
Content.DOCUMENT_URL = Content(DOCUMENT_URL);
Content.url = (...values) => Content(url(...values));
Content.targetCounter = (...values) => Content(targetCounter(...values));
Content.targetCounters = (...values) => Content(targetCounters(...values));
Content.targetText = (...values) => Content(targetText(...values));
Content.leader = (...values) => Content(leader(...values));
export { Content };

const Quotes = property('quotes');
Quotes.NONE = Quotes(NONE);
export { Quotes };

const StringSet = property('stringSet');
StringSet.NONE = StringSet(NONE);
export { StringSet };

const BookmarkLevel = property('bookmarkLevel');
BookmarkLevel.NONE = BookmarkLevel(NONE);
export { BookmarkLevel };

const BookmarkLabel = property('bookmarkLabel');
BookmarkLabel.CONTENTS = BookmarkLabel(CONTENTS);
BookmarkLabel.OPEN_QUOTE = BookmarkLabel(OPEN_QUOTE);
BookmarkLabel.CLOSE_QUOTE = BookmarkLabel(CLOSE_QUOTE);
BookmarkLabel.NO_OPEN_QUOTE = BookmarkLabel(NO_OPEN_QUOTE);
BookmarkLabel.NO_CLOSE_QUOTE = BookmarkLabel(NO_CLOSE_QUOTE);
BookmarkLabel.DOCUMENT_URL = BookmarkLabel(DOCUMENT_URL);
BookmarkLabel.url = (...values) => BookmarkLabel(url(...values));
BookmarkLabel.targetCounter = (...values) => BookmarkLabel(targetCounter(...values));
BookmarkLabel.targetCounters = (...values) => BookmarkLabel(targetCounters(...values));
BookmarkLabel.targetText = (...values) => BookmarkLabel(targetText(...values));
BookmarkLabel.leader = (...values) => BookmarkLabel(leader(...values));
export { BookmarkLabel };

const BookmarkState = property('bookmarkState');
BookmarkState.OPEN = BookmarkState(OPEN);
BookmarkState.CLOSE = BookmarkState(CLOSE);
export { BookmarkState };
