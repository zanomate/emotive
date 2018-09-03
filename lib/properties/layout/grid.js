import { property } from 'utils/index';
import { AUTO, COLUMN, DENSE, MAX_CONTENT, MIN_CONTENT, ROW, SPAN } from 'constants/index';
import { NONE } from 'constants/index';

export const grid = property('grid');

export const gridArea = property('gridArea');

export const gridAutoColumns = property('gridAutoColumns');
gridAutoColumns.AUTO = gridAutoColumns(AUTO);
gridAutoColumns.MIN_CONTENT = gridAutoColumns(MIN_CONTENT);
gridAutoColumns.MAX_CONTENT = gridAutoColumns(MAX_CONTENT);

export const gridAutoRows = property('gridAutoRows');
gridAutoRows.AUTO = gridAutoRows(AUTO);
gridAutoRows.MIN_CONTENT = gridAutoRows(MIN_CONTENT);
gridAutoRows.MAX_CONTENT = gridAutoRows(MAX_CONTENT);

export const gridAutoFlow = property('gridAutoFlow');
gridAutoFlow.ROW = gridAutoFlow(ROW);
gridAutoFlow.COLUMN = gridAutoFlow(COLUMN);
gridAutoFlow.DENSE = gridAutoFlow(DENSE);

export const gridRow = property('gridRow');
gridRow.AUTO = gridRow(AUTO);
gridRow.span = (...values) => gridRow(SPAN, ...values);

export const gridRowStart = property('gridRowStart');
gridRowStart.AUTO = gridRowStart(AUTO);
gridRowStart.span = (...values) => gridRowStart(SPAN, ...values);

export const gridRowEnd = property('gridRowEnd');
gridRowEnd.AUTO = gridRowEnd(AUTO);
gridRowEnd.span = (...values) => gridRowEnd(SPAN, ...values);

export const gridColumn = property('gridColumn');
gridColumn.AUTO = gridColumn(AUTO);
gridColumn.span = (...values) => gridColumn(SPAN, ...values);

export const gridColumnStart = property('gridRowStart');
gridColumnStart.AUTO = gridColumnStart(AUTO);
gridColumnStart.span = (...values) => gridColumnStart(SPAN, ...values);

export const gridColumnEnd = property('gridRowEnd');
gridColumnEnd.AUTO = gridColumnEnd(AUTO);
gridColumnEnd.span = (...values) => gridColumnEnd(SPAN, ...values);

export const gridTemplate = property('gridTemplate');
gridTemplate.NONE = gridTemplate(NONE);

export const gridTemplateAreas = property('gridTemplateAreas');
gridTemplateAreas.NONE = gridTemplateAreas(NONE);

export const gridTemplateColumns = property('gridTemplateColumns');
gridTemplateColumns.NONE = gridTemplateColumns(NONE);

export const gridTemplateRows = property('gridTemplateRows');
gridTemplateRows.NONE = gridTemplateRows(NONE);
