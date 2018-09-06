import { property } from '../../utils';
import { ABSOLUTE, AUTO, FIXED, RELATIVE, STATIC, STICKY } from '../../constants';

const Position = property('position');
Position.STATIC = Position(STATIC);
Position.RELATIVE = Position(RELATIVE);
Position.ABSOLUTE = Position(ABSOLUTE);
Position.FIXED = Position(FIXED);
Position.STICKY = Position(STICKY);
export { Position };

const Top = property('top');
Top.AUTO = Top(AUTO);
export { Top };

const Bottom = property('bottom');
Bottom.AUTO = Bottom(AUTO);
export { Bottom };

const Left = property('left');
Left.AUTO = Left(AUTO);
export { Left };

const Right = property('right');
Right.AUTO = Right(AUTO);
export { Right };

const OffsetBefore = property('offsetBefore');
OffsetBefore.AUTO = OffsetBefore(AUTO);
export { OffsetBefore };

const OffsetAfter = property('offsetAfter');
OffsetAfter.AUTO = OffsetAfter(AUTO);
export { OffsetAfter };

const OffsetStart = property('offsetStart');
OffsetStart.AUTO = OffsetStart(AUTO);
export { OffsetStart };

const OffsetEnd = property('offsetEnd');
OffsetEnd.AUTO = OffsetEnd(AUTO);
export { OffsetEnd };
