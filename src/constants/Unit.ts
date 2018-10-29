import { ExportModifier, id, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import { Mdn } from 'data/mdn';
import * as ts from 'typescript';

export function genUnit() {

    const units: { [name: string]: string } = {};
    Mdn.Types.Angle.map(unit => units[unit] = unit);
    Mdn.Types.Frequency.map(unit => units[unit] = unit);
    Mdn.Types.Length.map(unit => units[unit] = unit);
    units['percentage'] = '%';
    Mdn.Types.Resolution.map(unit => units[unit] = unit);
    Mdn.Types.Time.map(unit => units[unit] = unit);

    const unitId = id('Unit');
    const unit = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    unitId,
                    undefined,
                    ts.createObjectLiteral(
                        Object.keys(units).sort().map(unitName => ts.createPropertyAssignment(
                            UPPER_CASE(unitName),
                            value(units[unitName])
                        )),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(unit);
}
