import {
    access, add, arrow, assign, call, constant, Expr, id, NumberType, obj, param, StringType, value
} from 'core/base';
import { UPPER_CASE, UpperCamelCase } from 'core/naming';
import { appendNode } from 'core/print';
import { Mdn } from 'data/mdn';
import { QueryPropertyData } from 'data/query';

const numId = id('num');
const valueId = id('value');
const parenthesisId = id('parenthesis');

const genConstant = (cssProperty: string, cssValue: string): Expr =>
    call(parenthesisId, value(cssProperty + ': ' + cssValue));

const genUnit = (cssProperty: string, datatype: string, unit: string): Expr => arrow(
    [
        param(numId, NumberType)
    ],
    StringType,
    call(parenthesisId, add(value(cssProperty + ': '), call(access(id(datatype), unit), numId)))
);

function genQueryProperty(data: QueryPropertyData) {

    const attributes: { [name: string]: Expr } = {};
    attributes['set'] = arrow(
        [
            param(valueId, StringType)
        ],
        StringType,
        call(parenthesisId, add(value(data.name + ': '), valueId))
    );

    if (data.constants) {
        data.constants.map(constant => {
            try {
                const constantName = UPPER_CASE(constant);
                attributes[constantName] = call(parenthesisId, value(data.name + ': ' + constant));
            }
            catch (e) {
                console.log('Unable to create constant', constant, 'for property', data.name);
            }
        });
    }

    if (data.datatypes) {
        data.datatypes.map(datatype => {
            const units: string[] = Mdn.Types[datatype];
            units.map(unit => {
                try {
                    attributes[unit] = arrow(
                        [
                            param(numId, NumberType)
                        ],
                        StringType,
                        call(parenthesisId, add(value(data.name + ': '), call(access(id(datatype), unit), numId)))
                    );
                }
                catch (e) {
                    console.log('Unable to create constant', constant, 'for property', data.name);
                }
            });
        });
    }

    const emotiveName = UpperCamelCase(data.name);

    const queryPropertyId = id(emotiveName);
    const queryProperty = constant(
        queryPropertyId,
        obj(
            Object.keys(attributes).map(name => assign(name, attributes[name]))
        )
    );

    appendNode(queryProperty);
    return queryPropertyId;
}

export function genQuery() {
    genQueryProperty(Mdn.Query.Width);
}
