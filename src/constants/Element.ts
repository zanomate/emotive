import { assign, constant, id, obj, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import { ElementsData } from 'data/elements';

export function genElements() {

    const elements: { [name: string]: string } = {};

    ElementsData.map(elementData => {
        try {
            const name = UPPER_CASE(elementData);
            if (!elements.hasOwnProperty(name)) {
                elements[name] = elementData;
            }
        }
        catch (e) {
            console.warn('Unable to create keyword for', elementData);
        }
    });

    const elementId = id('Element');
    const element = constant(elementId,
        obj(
            Object.keys(elements)
                .sort()
                .map(name => {
                    return assign(name, value(elements[name]))
                })
        ),
        true
    );

    appendNode(element);
}
