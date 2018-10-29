import { ExportModifier, id, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import { PropertiesData } from 'data/properties';
import * as ts from 'typescript';

export function getProperty() {

    const propertyId = id('Property');
    const property = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    propertyId,
                    undefined,
                    ts.createObjectLiteral(
                        PropertiesData
                            .filter(propertyName => {
                                try {
                                    UPPER_CASE(propertyName)
                                }
                                catch (e) {
                                    console.warn('Unable to create property for', propertyName);
                                    return false;
                                }
                                return true;
                            })
                            .sort()
                            .map(propertyName => ts.createPropertyAssignment(
                                UPPER_CASE(propertyName),
                                value(propertyName)
                            )),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(property);
}
