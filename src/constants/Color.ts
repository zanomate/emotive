import { ExportModifier, StaticModifier, StringType, value } from 'gen/base';
import { MDN } from 'gen/mdn';
import { UPPER_CASE } from 'gen/naming';
import * as ts from 'typescript';

export const Color = ts.createClassDeclaration(
    [],
    [ExportModifier],
    'Color',
    [],
    [],
    MDN.Colors.map(color => ts.createProperty(
        [],
        [StaticModifier],
        UPPER_CASE(color),
        undefined,
        StringType,
        value(color)
    ))
);
