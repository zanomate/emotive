import { property } from '../../utils/factory';
import { AUTO, NONE, REVERSE } from '../../constants';
import { ray } from '../../methods';

const Offset = property('offset');
export { Offset };

const OffsetPosition = property('offsetPosition');
OffsetPosition.AUTO = OffsetPosition(AUTO);
export { OffsetPosition };

const OffsetPath = property('offsetPath');
OffsetPath.NONE = OffsetPath(NONE);
OffsetPath.ray = (...values) => OffsetPath(ray(...values));
export { OffsetPath };

const OffsetDistance = property('offsetDistance');
export { OffsetDistance };

const OffsetRotate = property('offsetRotate');
OffsetRotate.AUTO = OffsetRotate(AUTO);
OffsetRotate.REVERSE = OffsetRotate(REVERSE);
export { OffsetRotate };

const OffsetAnchor = property('offsetAnchor');
OffsetAnchor.AUTO = OffsetAnchor(AUTO);
export { OffsetAnchor };
