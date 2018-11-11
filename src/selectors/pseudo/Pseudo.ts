import {
    array, arrow, Assign, assign, block, buildMethodId, call, constant, id, obj, param, ParamType, ret, StringType,
    value
} from 'core/base';
import { lowerCamelCase, UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import { PseudoData } from './data';

const paramsId = id('params');
const paramsType = array(ParamType);

function cleanName(source: string): string {
    return source.replace(/[^a-zA-Z]/g, ' ');
}

function genPseudoClass() {

    const assignments: Assign[] = [];
    Object.values(PseudoData.Classes).map(pseudoClass => {
        try {
            if (pseudoClass.endsWith('()')) {
                const pseudoClassMethod = pseudoClass.replace(/\(\)$/, '');
                assignments.push(
                    assign(
                        lowerCamelCase(cleanName(pseudoClass)),
                        arrow(
                            [param(paramsId, paramsType, true)],
                            StringType,
                            block(ret(call(buildMethodId, value(pseudoClassMethod), paramsId)))
                        )
                    )
                );
            }
            else {
                assignments.push(
                    assign(
                        UPPER_CASE(cleanName(pseudoClass)),
                        value(pseudoClass)
                    )
                );
            }
        }
        catch (e) {
            console.error('Unable to create name for pseudo class', pseudoClass);
        }
    });

    return obj(assignments);
}

function genPseudoElement() {

    const assignments: Assign[] = [];
    Object.values(PseudoData.Elements).map(pseudoElement => {
        try {
            if (pseudoElement.endsWith('()')) {
                const pseudoElementMethod = pseudoElement.replace(/\(\)$/, '');
                assignments.push(
                    assign(
                        lowerCamelCase(cleanName(pseudoElement)),
                        arrow(
                            [param(paramsId, paramsType, true)],
                            StringType,
                            block(ret(call(buildMethodId, value(pseudoElementMethod), paramsId)))
                        )
                    )
                );
            }
            else {
                assignments.push(
                    assign(
                        UPPER_CASE(cleanName(pseudoElement)),
                        value(pseudoElement)
                    )
                );
            }
        }
        catch (e) {
            console.error('Unable to create name for pseudo element', pseudoElement);
        }
    });

    return obj(assignments);
}

export function genPseudo() {

    const pseudo = constant(
        id('_Pseudo'),
        obj([
            assign('Class', genPseudoClass()),
            assign('Element', genPseudoElement())
        ]),
        true
    );

    appendNode(pseudo);
}
