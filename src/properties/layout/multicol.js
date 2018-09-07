import { property } from '../../utils/factory';
import {
    ALL, AUTO, BALANCE, BALANCE_ALL, DASHED, DOTTED, DOUBLE, GROOVE, HIDDEN,
    INSET, MEDIUM, NONE, NORMAL, OUTSET, RIDGE, SOLID, THICK, THIN, TRANSPARENT
} from '../../constants';

const Columns = property('columns');
export { Columns };

const ColumnCount = property('columnCount');
ColumnCount.AUTO = ColumnCount(AUTO);
export { ColumnCount };

const ColumnFill = property('columnFill');
ColumnFill.AUTO = ColumnFill(AUTO);
ColumnFill.BALANCE = ColumnFill(BALANCE);
ColumnFill.BALANCE_ALL = ColumnFill(BALANCE_ALL);
export { ColumnFill };

const ColumnRule = property('columnRule');
ColumnRule.hidden = (...values) => ColumnRule(HIDDEN, ...values);
ColumnRule.dotted = (...values) => ColumnRule(DOTTED, ...values);
ColumnRule.dashed = (...values) => ColumnRule(DASHED, ...values);
ColumnRule.solid = (...values) => ColumnRule(SOLID, ...values);
ColumnRule.double = (...values) => ColumnRule(DOUBLE, ...values);
ColumnRule.groove = (...values) => ColumnRule(GROOVE, ...values);
ColumnRule.ridge = (...values) => ColumnRule(RIDGE, ...values);
ColumnRule.inset = (...values) => ColumnRule(INSET, ...values);
ColumnRule.outset = (...values) => ColumnRule(OUTSET, ...values);
ColumnRule.thin = (...values) => ColumnRule(THIN, SOLID, ...values);
ColumnRule.medium = (...values) => ColumnRule(MEDIUM, SOLID, ...values);
ColumnRule.thick = (...values) => ColumnRule(THICK, SOLID, ...values);
export { ColumnRule };

const ColumnRuleColor = property('columnRule');
ColumnRuleColor.TRANSPARENT = ColumnRuleColor(TRANSPARENT);
export { ColumnRuleColor };

const ColumnRuleStyle = property('columnRuleStyle');
ColumnRuleStyle.NONE = ColumnRuleStyle(NONE);
ColumnRuleStyle.HIDDEN = ColumnRuleStyle(HIDDEN);
ColumnRuleStyle.DOTTED = ColumnRuleStyle(DOTTED);
ColumnRuleStyle.DASHED = ColumnRuleStyle(DASHED);
ColumnRuleStyle.SOLID = ColumnRuleStyle(SOLID);
ColumnRuleStyle.DOUBLE = ColumnRuleStyle(DOUBLE);
ColumnRuleStyle.GROOVE = ColumnRuleStyle(GROOVE);
ColumnRuleStyle.RIDGE = ColumnRuleStyle(RIDGE);
ColumnRuleStyle.INSET = ColumnRuleStyle(INSET);
ColumnRuleStyle.OUTSET = ColumnRuleStyle(OUTSET);
export { ColumnRuleStyle };

const ColumnRuleWidth = property('columnRuleWidth');
ColumnRuleWidth.THIN = ColumnRuleWidth(THIN);
ColumnRuleWidth.MEDIUM = ColumnRuleWidth(MEDIUM);
ColumnRuleWidth.THICK = ColumnRuleWidth(THICK);
export { ColumnRuleWidth };

const ColumnSpan = property('columnRuleWidth');
ColumnSpan.NONE = ColumnSpan(NONE);
ColumnSpan.ALL = ColumnSpan(ALL);
export { ColumnSpan };

const ColumnWidth = property('columnRuleWidth');
ColumnWidth.AUTO = ColumnWidth(AUTO);
export { ColumnWidth };

/* Gap */

const Gap = property('gap');
Gap.NORMAL = Gap(NORMAL);
export { Gap };

const RowGap = property('rowGap');
RowGap.NORMAL = RowGap(NORMAL);
export { RowGap };

const ColumnGap = property('columnGap');
ColumnGap.NORMAL = ColumnGap(NORMAL);
export { ColumnGap };
