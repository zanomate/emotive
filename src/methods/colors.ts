import {
    access, add, arrow, block, call, id, mul, NumberType, ret, StaticModifier, StringType, ternary, value
} from 'core/base';
import * as ts from 'typescript';

const codeId = id('code');
const alphaId = id('alpha');
const hexId = id('hex');

export const hex: ts.PropertyDeclaration = (() => {

    const sharp = value('#');

    const condition = ts.createStrictEquality(
        call(access(codeId, 'charAt'), value(0)),
        sharp
    );

    return ts.createProperty(
        [],
        [StaticModifier],
        'hex',
        undefined,
        undefined,
        arrow(
            [
                ts.createParameter([], [], undefined, codeId, undefined, StringType)
            ],
            StringType,
            block(ret(ternary(
                ts.createParen(condition),
                codeId,
                ts.createParen(add(sharp, codeId))
            ))))
    );
})();

export const hexa: ts.PropertyDeclaration = (() => {

    const subtraction = ts.createParen(ts.createSubtract(alphaId, value(1)));

    const multiplication = ts.createParen(mul(
        subtraction,
        value(255)
    ));

    return ts.createProperty(
        [],
        [StaticModifier],
        'hexa',
        undefined,
        undefined,
        arrow(
            [
                ts.createParameter([], [], undefined, codeId, undefined, StringType),
                ts.createParameter([], [], undefined, alphaId, undefined, NumberType)
            ],
            StringType,
            block(ret(add(
                call(access(id('Method'), hexId), codeId),
                call(access(multiplication, 'toString'), value(16))
            )))
        )
    );
})();
