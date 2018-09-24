import { Keyword } from 'constants';
import { property, Sheet, Value } from 'core';

export namespace Display {
    export const set = (...values: Value[]): Sheet => ({display: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const BLOCK: Sheet = set(Keyword.BLOCK);
    export const INLINE_BLOCK: Sheet = set(Keyword.INLINE_BLOCK);
    export const INLINE: Sheet = set(Keyword.INLINE);
    export const LIST_ITEM: Sheet = set(Keyword.LIST_ITEM);
    export const TABLE: Sheet = set(Keyword.TABLE);
    export const INLINE_TABLE: Sheet = set(Keyword.INLINE_TABLE);
    export const TABLE_ROW: Sheet = set(Keyword.TABLE_ROW);
    export const TABLE_ROW_GROUP: Sheet = set(Keyword.TABLE_ROW_GROUP);
    export const TABLE_COLUMN: Sheet = set(Keyword.TABLE_COLUMN);
    export const TABLE_COLUMN_GROUP: Sheet = set(Keyword.TABLE_COLUMN_GROUP);
    export const TABLE_HEADER_GROUP: Sheet = set(Keyword.TABLE_HEADER_GROUP);
    export const TABLE_FOOTER_GROUP: Sheet = set(Keyword.TABLE_FOOTER_GROUP);
    export const TABLE_CELL: Sheet = set(Keyword.TABLE_CELL);
    export const TABLE_CAPTION: Sheet = set(Keyword.TABLE_CAPTION);
    export const FLEX: Sheet = set(Keyword.FLEX);
    export const GRID: Sheet = set(Keyword.GRID);
    export const SUBGRID: Sheet = set(Keyword.SUBGRID);
    export const INLINE_FLEX: Sheet = set(Keyword.INLINE_FLEX);
    export const INLINE_GRID: Sheet = set(Keyword.INLINE_GRID);
    export const RUBY: Sheet = set(Keyword.RUBY);
    export const RUBY_BASE: Sheet = set(Keyword.RUBY_BASE);
    export const RUBY_TEXT: Sheet = set(Keyword.RUBY_TEXT);
    export const RUBY_BASE_CONTAINER: Sheet = set(Keyword.RUBY_BASE_CONTAINER);
    export const RUBY_TEXT_CONTAINER: Sheet = set(Keyword.RUBY_TEXT_CONTAINER);
    export const CONTENTS: Sheet = set(Keyword.CONTENTS);
    export const RUN_IN: Sheet = set(Keyword.RUN_IN);
    export const FLOW: Sheet = set(Keyword.FLOW);
    export const FLOW_ROOT: Sheet = set(Keyword.FLOW_ROOT);
}

export namespace ShapeInside {
    export const set = (...values: Value[]): Sheet => ({shapeInside: property(values)});
    export const AUTO: Sheet = set(Keyword.AUTO);
    export const OUTSIDE_SHAPE: Sheet = set(Keyword.OUTSIDE_SHAPE);
    export const SHAPE_BOX: Sheet = set(Keyword.SHAPE_BOX);
    export const DISPLAY: Sheet = set(Keyword.DISPLAY);
}

export namespace BorderBoundary {
    export const set = (...values: Value[]): Sheet => ({borderBoundary: property(values)});
    export const NONE: Sheet = set(Keyword.NONE);
    export const PARENT: Sheet = set(Keyword.PARENT);
    export const DISPLAY: Sheet = set(Keyword.DISPLAY);
}
