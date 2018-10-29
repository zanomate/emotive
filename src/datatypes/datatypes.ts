import {
    array, arrow, block, buildDatatypeId, call, DotDotDotToken, ExportModifier, id, NumberType, ret, StringType, value
} from 'core/base';
import { appendNode } from 'core/print';
import { Mdn } from 'data/mdn';
import * as ts from 'typescript';


function genDatatype(datatypeName: string, listOfUnits: string[]) {

    let units: { [name: string]: string } = {};
    listOfUnits.map(unit => {
        units[unit] = unit;
    });
    if (datatypeName === 'Length') {
        units['X'] = '%';
    }

    const paramsId = id('params');
    const paramsType = array(NumberType);

    const datatypeId = id(datatypeName);
    const datatype = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    datatypeId,
                    undefined,
                    ts.createObjectLiteral(
                        Object.keys(units).sort().map(unitName => ts.createPropertyAssignment(
                            unitName,
                            arrow(
                                [ts.createParameter(
                                    [],
                                    [],
                                    DotDotDotToken,
                                    paramsId,
                                    undefined,
                                    paramsType
                                )],
                                StringType,
                                block(ret(call(buildDatatypeId, value(units[unitName]), paramsId)))
                            )
                        )),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(datatype);
}

export function genDataTypes() {
    genDatatype('Angle', Mdn.Types.Angle);
    genDatatype('Frequency', Mdn.Types.Frequency);
    genDatatype('Length', Mdn.Types.Length);
    genDatatype('Resolution', Mdn.Types.Resolution);
    genDatatype('Time', Mdn.Types.Time);
}
