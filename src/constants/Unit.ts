import { ExportModifier, StaticModifier, StringType, value } from 'gen/base';
import { MDN } from 'gen/mdn';
import { UPPER_CASE } from 'gen/naming';
import * as ts from 'typescript';

const units: string[] = [];
units.push(...MDN.Types.Angle);
units.push(...MDN.Types.Frequency);
units.push(...MDN.Types.Length);
units.push(...MDN.Types.Resolution);
units.push(...MDN.Types.Time);

function genUnit(name: string, symbol: string) {
    return ts.createProperty(
        [],
        [StaticModifier],
        name,
        undefined,
        StringType,
        value(symbol)
    )
}

function genUnits() {

    let declarations: ts.PropertyDeclaration[] = [];
    units.map(unit => declarations.push(genUnit(UPPER_CASE(unit), unit)));
    declarations.push(genUnit('PERCENTAGE', '%'));

    return ts.createClassDeclaration(
        [],
        [ExportModifier],
        'Unit',
        [],
        [],
        declarations
    );
}

export const Unit = genUnits();
