import {access, add, array, arrow, assign, call, constant, id, obj, param, StringType, value} from "core/base";
import {appendNode} from "core/print";
import {genElements} from "selectors/Element";
import {genPseudo} from "selectors/pseudo/Pseudo";
import {genQuery} from "selectors/query/Query";

export function genSelector() {

    genElements();
    genPseudo();
    genQuery();

    const valueId = id('value');
    const valuesId = id('values');
    const element = id('element');
    const attributes = id('attributes');

    const _Class = arrow(
        [
            param(valueId, StringType)
        ],
        StringType,
        add(value('.'), valueId)
    );

    const _Id = arrow(
        [
            param(valueId, StringType)
        ],
        StringType,
        add(value('#'), valueId)
    );

    const _ALL = value('*');

    const _NONE = value('');

    const _and = arrow(
        [
            param(valuesId, array(StringType), true)
        ],
        StringType,
        call(access(valuesId, id('join')), value(','))
    );

    const _inside = arrow(
        [
            param(valuesId, array(StringType), true)
        ],
        StringType,
        call(access(valuesId, id('join')), value(' '))
    );

    const _child = arrow(
        [
            param(valuesId, array(StringType), true)
        ],
        StringType,
        call(access(valuesId, id('join')), value(' > '))
    );

    const _after = arrow(
        [
            param(valuesId, array(StringType), true)
        ],
        StringType,
        call(access(valuesId, id('join')), value(' + '))
    );

    const _following = arrow(
        [
            param(valuesId, array(StringType), true)
        ],
        StringType,
        call(access(valuesId, id('join')), value(' ~ '))
    );

    const _attribute = arrow(
        [
            param(element, StringType),
            param(attributes, StringType)
        ],
        StringType,
        add(add(add(element, value('[')), attributes), value(']'))
    );

    const selectorId = id('Selector')
    const selector = constant(selectorId,
        obj([
            assign('Class', _Class),
            assign('Id', _Id),
            assign('ALL', _ALL),
            assign('NONE', _NONE),
            assign('and', _and),
            assign('inside', _inside),
            assign('child', _child),
            assign('after', _after),
            assign('following', _following),
            assign('attribute', _attribute),
            assign('Element', id('_Element')),
            assign('Query', id('_Query')),
            assign('Pseudo', id('_Pseudo'))
        ]),
        true
    );

    appendNode(selector);
}
