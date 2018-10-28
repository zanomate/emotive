import {access, array, block, call, DotDotDotToken, ExportModifier, id, ret, SheetType} from 'core/base';
import * as ts from 'typescript';
import {appendNode} from "core/print";

export function genSheet(): ts.Identifier {

    const sheetId = id('_sheet');

    const propertiesId = id('properties');
    const propertiesType = array(SheetType);

    const resultId = id('sheet');
    const resultDeclaration = ts.createVariableStatement(
        [],
        ts.createVariableDeclarationList(
            [ts.createVariableDeclaration(resultId, SheetType, ts.createObjectLiteral())],
            ts.NodeFlags.Const
        )
    );

    const propertyId = id('property');
    const loop = ts.createForOf(undefined,
        ts.createVariableDeclarationList(
            [ts.createVariableDeclaration(propertyId)],
            ts.NodeFlags.Let
        ),
        propertiesId,
        block(
            ts.createExpressionStatement(
                call(
                    access(
                        id('(<any>Object)'),
                        'assign'
                    ),
                    resultId,
                    propertyId
                )
            )
        )
    );

    const fun = ts.createFunctionDeclaration(
        [],
        [ExportModifier],
        undefined,
        sheetId,
        [],
        [
            ts.createParameter(
                [],
                [],
                DotDotDotToken,
                propertiesId,
                undefined,
                propertiesType
            )
        ],
        SheetType,
        block(
            resultDeclaration,
            loop,
            ret(resultId)
        )
    );

    appendNode(fun);
    return sheetId;

}
