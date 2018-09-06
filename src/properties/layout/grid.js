import { property } from '../../utils';
import {
    AUTO, COLUMN, DENSE, MAX_CONTENT, MIN_CONTENT, NONE, ROW, SPAN
} from '../../constants';

const Grid = property('grid');
export { Grid };

const GridArea = property('gridArea');
export { GridArea };

const GridAutoColumns = property('gridAutoColumns');
GridAutoColumns.AUTO = GridAutoColumns(AUTO);
GridAutoColumns.MIN_CONTENT = GridAutoColumns(MIN_CONTENT);
GridAutoColumns.MAX_CONTENT = GridAutoColumns(MAX_CONTENT);
export { GridAutoColumns };

const GridAutoRows = property('gridAutoRows');
GridAutoRows.AUTO = GridAutoRows(AUTO);
GridAutoRows.MIN_CONTENT = GridAutoRows(MIN_CONTENT);
GridAutoRows.MAX_CONTENT = GridAutoRows(MAX_CONTENT);
export { GridAutoRows };

const GridAutoFlow = property('gridAutoFlow');
GridAutoFlow.ROW = GridAutoFlow(ROW);
GridAutoFlow.COLUMN = GridAutoFlow(COLUMN);
GridAutoFlow.DENSE = GridAutoFlow(DENSE);
export { GridAutoFlow };

const GridRow = property('gridRow');
GridRow.AUTO = GridRow(AUTO);
GridRow.span = (...values) => GridRow(SPAN, ...values);
export { GridRow };

const GridRowStart = property('gridRowStart');
GridRowStart.AUTO = GridRowStart(AUTO);
GridRowStart.span = (...values) => GridRowStart(SPAN, ...values);
export { GridRowStart };

const GridRowEnd = property('gridRowEnd');
GridRowEnd.AUTO = GridRowEnd(AUTO);
GridRowEnd.span = (...values) => GridRowEnd(SPAN, ...values);
export { GridRowEnd };

const GridColumn = property('gridColumn');
GridColumn.AUTO = GridColumn(AUTO);
GridColumn.span = (...values) => GridColumn(SPAN, ...values);
export { GridColumn };

const GridColumnStart = property('gridRowStart');
GridColumnStart.AUTO = GridColumnStart(AUTO);
GridColumnStart.span = (...values) => GridColumnStart(SPAN, ...values);
export { GridColumnStart };

const GridColumnEnd = property('gridRowEnd');
GridColumnEnd.AUTO = GridColumnEnd(AUTO);
GridColumnEnd.span = (...values) => GridColumnEnd(SPAN, ...values);
export { GridColumnEnd };

const GridTemplate = property('gridTemplate');
GridTemplate.NONE = GridTemplate(NONE);
export { GridTemplate };

const GridTemplateAreas = property('gridTemplateAreas');
GridTemplateAreas.NONE = GridTemplateAreas(NONE);
export { GridTemplateAreas };

const GridTemplateColumns = property('gridTemplateColumns');
GridTemplateColumns.NONE = GridTemplateColumns(NONE);
export { GridTemplateColumns };

const GridTemplateRows = property('gridTemplateRows');
GridTemplateRows.NONE = GridTemplateRows(NONE);
export { GridTemplateRows };
