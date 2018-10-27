import {
    array, arrow, block, buildDatatypeId, call, DotDotDotToken, ExportModifier, id, NumberType, ret, StaticModifier,
    StringType, value
} from 'gen/base';
import { MDN } from 'gen/mdn';
import * as ts from 'typescript';

const paramsId = id('params');
const paramsType = array(NumberType);

function genDatatypeMethod(name: string, symbol: string) {
    return ts.createProperty(
        [],
        [StaticModifier],
        name,
        undefined,
        undefined,
        arrow(
            [
                ts.createParameter([], [], DotDotDotToken, paramsId, undefined, paramsType)
            ],
            StringType,
            block(ret(call(buildDatatypeId, value(symbol), paramsId)))
        )
    )
}

function genDatatype(name: string, units: string[]) {

    const declarations: ts.PropertyDeclaration[] = [];

    // Percentage
    if (name === 'Length') {
        declarations.push(genDatatypeMethod('X', '%'));
    }

    units.map(unit => {
        declarations.push(genDatatypeMethod(unit, unit));
    });

    return ts.createClassDeclaration(
        [],
        [ExportModifier],
        name,
        [],
        [],
        declarations
    );
}

export const Angle = genDatatype('Angle', MDN.Types.Angle);
export const Frequency = genDatatype('Frequency', MDN.Types.Frequency);
export const Length = genDatatype('Length', MDN.Types.Length);
export const Resolution = genDatatype('Resolution', MDN.Types.Resolution);
export const Time = genDatatype('Time', MDN.Types.Time);
