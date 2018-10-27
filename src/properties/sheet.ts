import { access, array, block, call, DotDotDotToken, ExportModifier, id, ret, SheetType } from 'gen/base';
import * as ts from 'typescript';

// export const sheetId = id('sheet');
export const sheet = (() => {

    const propertiesId = id('properties');
    const propertiesType = array(SheetType);

    const sheetId = id('sheet');
    const sheetDeclaration = ts.createVariableStatement(
        [],
        ts.createVariableDeclarationList(
            [ts.createVariableDeclaration(sheetId, SheetType, ts.createObjectLiteral())],
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
                    sheetId,
                    propertyId
                )
            )
        )
    );

    return ts.createFunctionDeclaration(
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
            sheetDeclaration,
            loop,
            ret(sheetId)
        )
    );

})();
