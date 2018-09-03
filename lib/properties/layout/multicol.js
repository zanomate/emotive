import { property } from 'utils';
import {
    ALL, AUTO, BALANCE, BALANCE_ALL, DASHED, DOTTED, DOUBLE, GROOVE, HIDDEN, INSET, MEDIUM, NONE, NORMAL, OUTSET, RIDGE,
    SOLID, THICK, THIN, TRANSPARENT
} from 'constants';

export const columns = property('columns');

export const columnCount = property('columnCount');
columnCount.AUTO = columnCount(AUTO);

export const columnFill = property('columnFill');
columnFill.AUTO = columnFill(AUTO);
columnFill.BALANCE = columnFill(BALANCE);
columnFill.BALANCE_ALL = columnFill(BALANCE_ALL);

export const columnGap = property('columnGap');
columnFill.NORMAL = columnFill(NORMAL);

export const columnRule = property('columnRule');
columnRule.hidden = (...values) => columnRule(HIDDEN, ...values);
columnRule.dotted = (...values) => columnRule(DOTTED, ...values);
columnRule.dashed = (...values) => columnRule(DASHED, ...values);
columnRule.solid = (...values) => columnRule(SOLID, ...values);
columnRule.double = (...values) => columnRule(DOUBLE, ...values);
columnRule.groove = (...values) => columnRule(GROOVE, ...values);
columnRule.ridge = (...values) => columnRule(RIDGE, ...values);
columnRule.inset = (...values) => columnRule(INSET, ...values);
columnRule.outset = (...values) => columnRule(OUTSET, ...values);
columnRule.thin = (...values) => columnRule(THIN, SOLID, ...values);
columnRule.medium = (...values) => columnRule(MEDIUM, SOLID, ...values);
columnRule.thick = (...values) => columnRule(THICK, SOLID, ...values);

export const columnRuleColor = property('columnRule');
columnRuleColor.TRANSPARENT = columnRuleColor(TRANSPARENT);

export const columnRuleStyle = property('columnRuleStyle');
columnRuleStyle.NONE = columnRuleStyle(NONE);
columnRuleStyle.HIDDEN = columnRuleStyle(HIDDEN);
columnRuleStyle.DOTTED = columnRuleStyle(DOTTED);
columnRuleStyle.DASHED = columnRuleStyle(DASHED);
columnRuleStyle.SOLID = columnRuleStyle(SOLID);
columnRuleStyle.DOUBLE = columnRuleStyle(DOUBLE);
columnRuleStyle.GROOVE = columnRuleStyle(GROOVE);
columnRuleStyle.RIDGE = columnRuleStyle(RIDGE);
columnRuleStyle.INSET = columnRuleStyle(INSET);
columnRuleStyle.OUTSET = columnRuleStyle(OUTSET);

export const columnRuleWidth = property('columnRuleWidth');
columnRuleWidth.THIN = columnRuleWidth(THIN);
columnRuleWidth.MEDIUM = columnRuleWidth(MEDIUM);
columnRuleWidth.THICK = columnRuleWidth(THICK);

export const columnSpan = property('columnRuleWidth');
columnSpan.NONE = columnSpan(NONE);
columnSpan.ALL = columnSpan(ALL);

export const columnWidth = property('columnRuleWidth');
columnWidth.AUTO = columnWidth(AUTO);


