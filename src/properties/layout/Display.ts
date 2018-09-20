import { property, Sheet, Value } from '../..';
import { Keywords } from '../../constants';

export namespace Display {
    export const set = (...values: Value[]): Sheet => ({display: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const BLOCK: Sheet = set(Keywords.BLOCK);
    export const INLINE_BLOCK: Sheet = set(Keywords.INLINE_BLOCK);
    export const INLINE: Sheet = set(Keywords.INLINE);
    export const LIST_ITEM: Sheet = set(Keywords.LIST_ITEM);
    export const TABLE: Sheet = set(Keywords.TABLE);
    export const INLINE_TABLE: Sheet = set(Keywords.INLINE_TABLE);
    export const TABLE_ROW: Sheet = set(Keywords.TABLE_ROW);
    export const TABLE_ROW_GROUP: Sheet = set(Keywords.TABLE_ROW_GROUP);
    export const TABLE_COLUMN: Sheet = set(Keywords.TABLE_COLUMN);
    export const TABLE_COLUMN_GROUP: Sheet = set(Keywords.TABLE_COLUMN_GROUP);
    export const TABLE_HEADER_GROUP: Sheet = set(Keywords.TABLE_HEADER_GROUP);
    export const TABLE_FOOTER_GROUP: Sheet = set(Keywords.TABLE_FOOTER_GROUP);
    export const TABLE_CELL: Sheet = set(Keywords.TABLE_CELL);
    export const TABLE_CAPTION: Sheet = set(Keywords.TABLE_CAPTION);
    export const FLEX: Sheet = set(Keywords.FLEX);
    export const GRID: Sheet = set(Keywords.GRID);
    export const SUBGRID: Sheet = set(Keywords.SUBGRID);
    export const INLINE_FLEX: Sheet = set(Keywords.INLINE_FLEX);
    export const INLINE_GRID: Sheet = set(Keywords.INLINE_GRID);
    export const RUBY: Sheet = set(Keywords.RUBY);
    export const RUBY_BASE: Sheet = set(Keywords.RUBY_BASE);
    export const RUBY_TEXT: Sheet = set(Keywords.RUBY_TEXT);
    export const RUBY_BASE_CONTAINER: Sheet = set(Keywords.RUBY_BASE_CONTAINER);
    export const RUBY_TEXT_CONTAINER: Sheet = set(Keywords.RUBY_TEXT_CONTAINER);
    export const CONTENTS: Sheet = set(Keywords.CONTENTS);
    export const RUN_IN: Sheet = set(Keywords.RUN_IN);
    export const FLOW: Sheet = set(Keywords.FLOW);
    export const FLOW_ROOT: Sheet = set(Keywords.FLOW_ROOT);
}

export namespace ShapeInside {
    export const set = (...values: Value[]): Sheet => ({shapeInside: property(values)});
    export const AUTO: Sheet = set(Keywords.AUTO);
    export const OUTSIDE_SHAPE: Sheet = set(Keywords.OUTSIDE_SHAPE);
    export const SHAPE_BOX: Sheet = set(Keywords.SHAPE_BOX);
    export const DISPLAY: Sheet = set(Keywords.DISPLAY);
}

export namespace BorderBoundary {
    export const set = (...values: Value[]): Sheet => ({borderBoundary: property(values)});
    export const NONE: Sheet = set(Keywords.NONE);
    export const PARENT: Sheet = set(Keywords.PARENT);
    export const DISPLAY: Sheet = set(Keywords.DISPLAY);
}
