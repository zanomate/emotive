import {
    access, arrow, Assign, assign, call, constant, Expr, id, NumberType, obj, param, StringType, union, value
} from 'core/base';
import {UPPER_CASE, UpperCamelCase} from 'core/naming';
import {appendNode} from 'core/print';
import {Mdn} from 'data/mdn';
import {MediaFeature, MediaQueryData} from 'query/data';

const ParamType = union(StringType, NumberType);

const valueId = id('value');
const minId = id('min');
const maxId = id('max');
const numId = id('num');
const mqSet = id('mqSet');
const mqRange = id('mqRange');

function genMediaFeature(data: MediaFeature) {

    const genSet = () => arrow(
        [param(valueId, ParamType)],
        StringType,
        call(mqSet, value(data.name), valueId)
    );

    const genRange = () => arrow(
        [
            param(minId, ParamType),
            param(maxId, ParamType)
        ],
        StringType,
        call(mqRange, value(data.name), minId, maxId)
    );

    const genConstant = (cssProperty: string, cssValue: string): Expr =>
        call(mqSet, value(data.name), value(cssValue));

    const genUnit = (cssProperty: string, datatype: string, unit: string): Expr => arrow(
        [
            param(numId, NumberType)
        ],
        StringType,
        call(mqSet, value(data.name), call(access(id(datatype), unit), numId))
    );

    const attributes: { [name: string]: Expr } = {};
    attributes['set'] = genSet();

    if (data.range) {
        attributes['range'] = genRange();
    }

    if (data.constants) {
        data.constants.map(constant => {
            try {
                let constantName = UPPER_CASE(constant);
                if (/^[0-9]/.test(constantName)) {
                    constantName = '_' + constantName;
                }
                attributes[constantName] = genConstant(data.name, constant);
            }
            catch (e) {
                console.error('Unable to create constant', constant, 'for property', data.name);
            }
        });
    }

    if (data.datatypes) {
        data.datatypes.map(datatype => {
            Mdn.Types[datatype].map(unit => {
                try {
                    attributes[unit] = genUnit(data.name, datatype, unit);
                }
                catch (e) {
                    console.error('Unable to create constant', constant, 'for property', data.name);
                }
            });
        });
    }

    const queryPropertyId = id('_mq_' + UpperCamelCase(data.name));
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

    const queryAssignments: Assign[] = [];

    // Combinators
    Object.keys(MediaQueryData.Combinators).map(name => {
        queryAssignments.push(
            assign(name, id(MediaQueryData.Combinators[name]))
        );
    });

    // Media Types
    MediaQueryData.Types.map(mediaType => {
        try {
            queryAssignments.push(
                assign(UPPER_CASE(mediaType), value(mediaType))
            );
        }
        catch (e) {
            console.error('Unable to create name for media type', mediaType);
        }
    });

    const assignMediaFeature = (feature: MediaFeature) => {
        try {
            queryAssignments.push(assign(
                UpperCamelCase(feature.name),
                genMediaFeature(feature)
            ));
        }
        catch (e) {
            console.error('Unable to create name for media feature', feature);
        }
    };

    // Features
    Object.values(MediaQueryData.Features).map(feature => {
        assignMediaFeature(feature);

        if (feature.range) {
            // Min
            assignMediaFeature(Object.assign({}, feature, {
                name: 'min-' + feature.name,
                range: false
            }));

            // Max
            assignMediaFeature(Object.assign({}, feature, {
                name: 'max-' + feature.name,
                range: false
            }));
        }
    });

    const query = constant(
        id('Query'),
        obj(queryAssignments),
        true
    );

    appendNode(query);
}
