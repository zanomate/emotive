import { property } from '../../utils';
import {
    AUTO, BLOCK, CONTENTS, DISPLAY, FLEX, FLOW, FLOW_ROOT, GRID, INLINE, INLINE_BLOCK, INLINE_FLEX, INLINE_GRID,
    INLINE_TABLE, LIST_ITEM, NONE, OUTSIDE_SHAPE, PARENT, RUBY, RUBY_BASE, RUBY_BASE_CONTAINER, RUBY_TEXT,
    RUBY_TEXT_CONTAINER, RUN_IN, SHAPE_BOX, SUBGRID, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP,
    TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP
} from '../../constants';

export const display = property('display');
display.NONE = display(NONE);
display.BLOCK = display(BLOCK);
display.INLINE_BLOCK = display(INLINE_BLOCK);
display.INLINE = display(INLINE);
display.LIST_ITEM = display(LIST_ITEM);
display.TABLE = display(TABLE);
display.INLINE_TABLE = display(INLINE_TABLE);
display.TABLE_ROW = display(TABLE_ROW);
display.TABLE_ROW_GROUP = display(TABLE_ROW_GROUP);
display.TABLE_COLUMN = display(TABLE_COLUMN);
display.TABLE_COLUMN_GROUP = display(TABLE_COLUMN_GROUP);
display.TABLE_HEADER_GROUP = display(TABLE_HEADER_GROUP);
display.TABLE_FOOTER_GROUP = display(TABLE_FOOTER_GROUP);
display.TABLE_CELL = display(TABLE_CELL);
display.TABLE_CAPTION = display(TABLE_CAPTION);
display.FLEX = display(FLEX);
display.GRID = display(GRID);
display.SUBGRID = display(SUBGRID);
display.INLINE_FLEX = display(INLINE_FLEX);
display.INLINE_GRID = display(INLINE_GRID);
display.RUBY = display(RUBY);
display.RUBY_BASE = display(RUBY_BASE);
display.RUBY_TEXT = display(RUBY_TEXT);
display.RUBY_BASE_CONTAINER = display(RUBY_BASE_CONTAINER);
display.RUBY_TEXT_CONTAINER = display(RUBY_TEXT_CONTAINER);
display.CONTENTS = display(CONTENTS);
display.RUN_IN = display(RUN_IN);
display.FLOW = display(FLOW);
display.FLOW_ROOT = display(FLOW_ROOT);

export const shapeInside = property('shapeInside');
shapeInside.AUTO = shapeInside(AUTO);
shapeInside.OUTSIDE_SHAPE = shapeInside(OUTSIDE_SHAPE);
shapeInside.SHAPE_BOX = shapeInside(SHAPE_BOX);
shapeInside.DISPLAY = shapeInside(DISPLAY);

export const borderBoundary = property('borderBoundary');
borderBoundary.NONE = borderBoundary(NONE);
borderBoundary.NONE = borderBoundary(PARENT);
borderBoundary.NONE = borderBoundary(DISPLAY);
