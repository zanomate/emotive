import {
    access, add, array, arrow, block, call, DotDotDotToken, id, ifThen, ParamType, ret, StaticModifier, StringType,
    value
} from 'core/base';
import * as ts from 'typescript';

const paramsName = 'params';
const paramsId = id(paramsName);
const paramsType = array(ParamType);

const valueName = 'value';
const valueId = id(valueName);

export const calcAddName = 'calc_add';
export const calcAddId = id(calcAddName);

export const calcMulName = 'calc_mul';
export const calcMulId = id(calcMulName);

export const calcAdd = (() => {

    const mappedParams = call(
        access(paramsId, 'map'),
        arrow(
            [
                ts.createParameter(
                    [],
                    [],
                    undefined,
                    valueId
                )
            ],
            StringType,
            block(ifThen(
                call(access(id('Array'), 'isArray'), valueId),
                ret(add(
                    value('('),
                    call(access(id('Method'), calcMulId), valueId),
                    value(')')
                )),
                ret(call(access(valueId, 'toString')))
            ))
        )
    );

    return ts.createProperty(
        [],
        [StaticModifier],
        calcAddName,
        undefined,
        undefined,
        arrow(
            [
                ts.createParameter(
                    [],
                    [],
                    undefined,
                    paramsId,
                    undefined,
                    paramsType
                )
            ],
            StringType,
            block(ret(call(
                access(mappedParams, 'join'),
                value(' + ')
            )))
        )
    );

})();

export const calcMul = (() => {

    const mappedParams = call(
        access(paramsId, 'map'),
        arrow(
            [
                ts.createParameter(
                    [],
                    [],
                    undefined,
                    valueId
                )
            ],
            StringType,
            block(ifThen(
                call(access(id('Array'), 'isArray'), valueId),
                ret(add(
                    value('('),
                    call(access(id('Method'), calcAddId), valueId),
                    value(')')
                )),
                ret(call(access(valueId, 'toString')))
            ))
        )
    );

    return ts.createProperty(
        [],
        [StaticModifier],
        calcMulName,
        undefined,
        undefined,
        arrow(
            [
                ts.createParameter([], [], undefined, paramsId, undefined, paramsType)
            ],
            StringType,
            block(ret(call(
                access(mappedParams, 'join'),
                value(' * ')
            )))
        )
    );

})();

export const calc: ts.PropertyDeclaration = (() => {

    return ts.createProperty(
        [],
        [StaticModifier],
        'calc',
        undefined,
        undefined,
        arrow(
            [
                ts.createParameter([], [], DotDotDotToken, paramsId, undefined, paramsType)
            ],
            StringType,
            block(ret(
                add(
                    value('calc('),
                    call(access(id('Method'), calcAddId), paramsId),
                    value(')')
                )
                )
            )
        )
    );
})();
