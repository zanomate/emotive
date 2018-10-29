import { ExportModifier, id, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import { ColorsData } from 'data/colors';
import * as ts from 'typescript';

export function genColor() {

    const colorId = id('Color');
    const color = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    colorId,
                    undefined,
                    ts.createObjectLiteral(
                        ColorsData.All.sort().map(colorName => ts.createPropertyAssignment(
                            UPPER_CASE(colorName),
                            value(colorName)
                        )),
                        true
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(color);
}
