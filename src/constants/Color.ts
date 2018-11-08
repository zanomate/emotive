import { Assign, assign, constant, id, obj, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendFile, appendNode } from 'core/print';
import { ColorsData } from 'data/colors';

export function genColor() {

    appendFile('./src/methods/hex.ts');

    let assignments: Assign[] = [];
    ColorsData.All.sort().map(colorName => {
        assignments.push(assign(
            UPPER_CASE(colorName),
            value(colorName)
        ))
    });

    assignments.push(assign('hex', id('_hex')));
    assignments.push(assign('hexa', id('_hexa')));

    const colorId = id('Color');
    const color = constant(colorId,
        obj(assignments),
        true
    );

    appendNode(color);
}
