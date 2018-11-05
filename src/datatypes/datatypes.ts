import {
    array, arrow, assign, block, buildDatatypeId, call, constant, id, NumberType, obj, param, ret, StringType, value
} from 'core/base';
import {appendNode} from 'core/print';
import {Mdn} from 'data/mdn';

function genDatatype(datatypeName: string) {

    let units: { [name: string]: string } = {};
    Mdn.Types[datatypeName].map(unit => {
        units[unit] = unit;
    });
    if (datatypeName === 'Length') {
        units['X'] = '%';
    }

    const paramsId = id('params');
    const paramsType = array(NumberType);

    const datatypeId = id(datatypeName);
    const datatype = constant(
        datatypeId,
        obj(
            Object.keys(units).sort().map(unitName => assign(
                unitName,
                arrow(
                    [param(paramsId, paramsType, true)],
                    StringType,
                    block(ret(call(buildDatatypeId, value(units[unitName]), paramsId)))
                )
            ))
        ),
        true
    );

    appendNode(datatype);
}

export function genDataTypes() {
    genDatatype('Angle');
    genDatatype('Frequency');
    genDatatype('Length');
    genDatatype('Resolution');
    genDatatype('Time');
}
