import {ExportModifier, id, StaticModifier, StringType, value} from 'core/base';
import {MDN} from 'core/mdn';
import {UPPER_CASE} from 'core/naming';
import * as ts from 'typescript';
import {appendNode} from "core/print";

export function genColor() {

    // const colorId = id('_colors');
    // const color = ts.createClassDeclaration(
    //     [],
    //     [],
    //     colorId,
    //     [],
    //     [],
    //     MDN.Colors.map(color => ts.createProperty(
    //         [],
    //         [StaticModifier],
    //         UPPER_CASE(color),
    //         undefined,
    //         StringType,
    //         value(color)
    //     ))
    // );

    const colorId = id('Color');
    const color = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    colorId,
                    undefined,
                    ts.createObjectLiteral(
                        MDN.Colors.map(color => ts.createPropertyAssignment(
                            UPPER_CASE(color),
                            value(color)
                        )),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(color);

}
