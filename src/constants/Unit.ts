import {assign, constant, id, obj, value} from 'core/base';
import {UPPER_CASE} from 'core/naming';
import {appendNode} from 'core/print';
import {Mdn} from 'data/mdn';

export function genUnit() {

    const units: { [name: string]: string } = {};
    Mdn.Types.Angle.map(unit => units[unit] = unit);
    Mdn.Types.Frequency.map(unit => units[unit] = unit);
    Mdn.Types.Length.map(unit => units[unit] = unit);
    units['percentage'] = '%';
    Mdn.Types.Resolution.map(unit => units[unit] = unit);
    Mdn.Types.Time.map(unit => units[unit] = unit);

    const unitId = id('Unit');
    const unit = constant(
        unitId,
        obj(
            Object.keys(units).sort().map(unitName => assign(
                UPPER_CASE(unitName),
                value(units[unitName])
            ))
        ),
        true
    );

    appendNode(unit);
}
