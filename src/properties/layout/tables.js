import { property } from '../../utils';
import {
    AUTO, BOTTOM, COLLAPSE, FIXED, HIDE, SEPARATE, SHOW, TOP
} from '../../constants';

const TableLayout = property('captionSide');
TableLayout.AUTO = TableLayout(AUTO);
TableLayout.FIXED = TableLayout(FIXED);
export { TableLayout };

const BorderCollapse = property('borderCollapse');
BorderCollapse.COLLAPSE = BorderCollapse(COLLAPSE);
BorderCollapse.SEPARATE = BorderCollapse(SEPARATE);
export { BorderCollapse };

const BorderSpacing = property('borderSpacing');
export { BorderSpacing };

const CaptionSide = property('captionSide');
CaptionSide.TOP = CaptionSide(TOP);
CaptionSide.BOTTOM = CaptionSide(BOTTOM);
export { CaptionSide };

const EmptyCells = property('emptyCells');
EmptyCells.SHOW = EmptyCells(SHOW);
EmptyCells.HIDE = EmptyCells(HIDE);
export { EmptyCells };
