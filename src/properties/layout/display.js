import { property } from '../../utils';
import {
    AUTO, BLOCK, CONTENTS, DISPLAY, FLEX, FLOW, FLOW_ROOT, GRID, INLINE,
    INLINE_BLOCK, INLINE_FLEX, INLINE_GRID, INLINE_TABLE, LIST_ITEM, NONE,
    OUTSIDE_SHAPE, PARENT, RUBY, RUBY_BASE, RUBY_BASE_CONTAINER, RUBY_TEXT,
    RUBY_TEXT_CONTAINER, RUN_IN, SHAPE_BOX, SUBGRID, TABLE, TABLE_CAPTION,
    TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP,
    TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP
} from '../../constants';

const Display = property('display');
Display.NONE = Display(NONE);
Display.BLOCK = Display(BLOCK);
Display.INLINE_BLOCK = Display(INLINE_BLOCK);
Display.INLINE = Display(INLINE);
Display.LIST_ITEM = Display(LIST_ITEM);
Display.TABLE = Display(TABLE);
Display.INLINE_TABLE = Display(INLINE_TABLE);
Display.TABLE_ROW = Display(TABLE_ROW);
Display.TABLE_ROW_GROUP = Display(TABLE_ROW_GROUP);
Display.TABLE_COLUMN = Display(TABLE_COLUMN);
Display.TABLE_COLUMN_GROUP = Display(TABLE_COLUMN_GROUP);
Display.TABLE_HEADER_GROUP = Display(TABLE_HEADER_GROUP);
Display.TABLE_FOOTER_GROUP = Display(TABLE_FOOTER_GROUP);
Display.TABLE_CELL = Display(TABLE_CELL);
Display.TABLE_CAPTION = Display(TABLE_CAPTION);
Display.FLEX = Display(FLEX);
Display.GRID = Display(GRID);
Display.SUBGRID = Display(SUBGRID);
Display.INLINE_FLEX = Display(INLINE_FLEX);
Display.INLINE_GRID = Display(INLINE_GRID);
Display.RUBY = Display(RUBY);
Display.RUBY_BASE = Display(RUBY_BASE);
Display.RUBY_TEXT = Display(RUBY_TEXT);
Display.RUBY_BASE_CONTAINER = Display(RUBY_BASE_CONTAINER);
Display.RUBY_TEXT_CONTAINER = Display(RUBY_TEXT_CONTAINER);
Display.CONTENTS = Display(CONTENTS);
Display.RUN_IN = Display(RUN_IN);
Display.FLOW = Display(FLOW);
Display.FLOW_ROOT = Display(FLOW_ROOT);
export { Display };

const ShapeInside = property('shapeInside');
ShapeInside.AUTO = ShapeInside(AUTO);
ShapeInside.OUTSIDE_SHAPE = ShapeInside(OUTSIDE_SHAPE);
ShapeInside.SHAPE_BOX = ShapeInside(SHAPE_BOX);
ShapeInside.DISPLAY = ShapeInside(DISPLAY);
export { ShapeInside };

const BorderBoundary = property('borderBoundary');
BorderBoundary.NONE = BorderBoundary(NONE);
BorderBoundary.NONE = BorderBoundary(PARENT);
BorderBoundary.NONE = BorderBoundary(DISPLAY);
export { BorderBoundary };
