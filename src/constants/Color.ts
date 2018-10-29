import {assign, constant, id, obj, value} from 'core/base';
import {UPPER_CASE} from 'core/naming';
import {appendNode} from 'core/print';
import {ColorsData} from 'data/colors';

export function genColor() {

    const colorId = id('Color');
    const color = constant(colorId,
        obj(
            ColorsData.All.sort().map(colorName => assign(
                UPPER_CASE(colorName),
                value(colorName)
            ))
        ),
        true
    );

    appendNode(color);
}
