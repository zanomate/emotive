import {
    access, array, arrow, assign, buildPropertyId, call, constant, Expr, Id, id, NumberType, obj, param, ParamType,
    SheetType, spread, StringType, value
} from 'core/base';
import { lowerCamelCase, UPPER_CASE, UpperCamelCase } from 'core/naming';
import { appendFile, appendNode } from 'core/print';
import {
    BracketsTerm, ComposedTerm, DataTypeTerm, KeywordTerm, MethodTerm, resolveSyntaxByName, Term
} from 'css-syntax-parser';
import { ColorsData } from 'data/colors';
import { Mdn } from 'data/mdn';
import { PropertiesData } from 'data/properties';
import * as ts from 'typescript';

const numsId = id('nums');
const numsType = array(NumberType);

const paramsId = id('params');
const paramsType = array(ParamType);

/**
 * Generates the Emotive object corresponding to the specified CSS property
 * @param cssProperty the CSS property name (e.g. 'text-align')
 */
function genProperty(cssProperty: string): Id {

    const jsName = lowerCamelCase(cssProperty); // (e.g. textAlign)
    const EmotiveName = UpperCamelCase(cssProperty); // (e.g. TextAlign)
    const innerPropertyName = '_' + EmotiveName; // (e.g. _TextAlign)

    const propertyAttributes: { [id: string]: Expr } = {};

    const genSetMethod = () => {
        propertyAttributes['set'] = arrow(
            [
                param(paramsId, paramsType, true)
            ],
            SheetType,
            obj([
                assign(jsName, call(buildPropertyId, paramsId))
            ])
        );
    };

    const genConstant = (cssValue: string) => {
        try {
            const emotiveValue = UPPER_CASE(cssValue);
            if (!propertyAttributes.hasOwnProperty(emotiveValue)) {
                propertyAttributes[emotiveValue] = obj([
                    assign(jsName, value(cssValue))
                ])
            }
        }
        catch (e) {
            console.error('Unable to create keyword', cssValue, 'for property', cssProperty);
        }
    };

    const genMethod = (cssName: string) => {
        try {
            const emotiveValue = lowerCamelCase(cssName);
            if (!propertyAttributes.hasOwnProperty(emotiveValue)) {
                propertyAttributes[emotiveValue] = arrow(
                    [
                        param(paramsId, paramsType, true)
                    ],
                    SheetType,
                    obj([
                        assign(jsName, call(access(id('Method'), emotiveValue), spread(paramsId)))
                    ])
                );
            }
        }
        catch (e) {
            console.error('Unable to create method', cssName, 'for property', cssProperty);
        }
    };

    const codeId = id('code');
    const alphaId = id('alpha');
    const hex = 'hex';
    const hexa = 'hexa';

    const genColorMethods = () => {
        propertyAttributes[hex] = arrow(
            [
                param(codeId, StringType)
            ],
            SheetType,
            obj([
                assign(jsName, call(access(id('Color'), hex), codeId))
            ])
        );
        propertyAttributes[hexa] = arrow(
            [
                param(codeId, StringType),
                param(alphaId, NumberType)
            ],
            SheetType,
            obj([
                assign(jsName, call(access(id('Color'), hexa), codeId, alphaId))
            ])
        );
    };

    const genUnits = (datatype: string) => {
        Mdn.Types[datatype].map(unit => genUnit(datatype, unit));
    };

    const genUnit = (datatype: string, unit: string) => {
        try {
            if (!propertyAttributes.hasOwnProperty(unit)) {
                propertyAttributes[unit] = arrow(
                    [
                        param(numsId, numsType, true)
                    ],
                    SheetType,
                    obj([
                        assign(jsName, call(access(id(datatype), unit), spread(numsId)))
                    ])
                );
            }
        }
        catch (e) {
            console.error('Unable to create unit', unit, 'for property', cssProperty);
        }
    };

    const extractFromTerm = (term: Term, extracted: { [id: string]: Expr }) => {

        if (term instanceof ComposedTerm) {
            term.children.map(child => extractFromTerm(child, extracted));
        }
        else if (term instanceof BracketsTerm) {
            extractFromTerm(term.content, extracted);
        }
        else if (term instanceof MethodTerm) {
            genMethod((<MethodTerm>term).name);
            if ((<MethodTerm>term).name === 'rgb') {
                genColorMethods();
            }
        }
        else if (term instanceof KeywordTerm) {
            genConstant((<KeywordTerm>term)._value);
        }
        else if (term instanceof DataTypeTerm) {
            const name = (<DataTypeTerm>term).name;
            if (name === 'angle') {
                genUnits('Angle');
            }
            if (name === 'frequency') {
                genUnits('Frequency');
            }
            if (name === 'length') {
                genUnits('Length');
            }
            if (name === 'percentage') {
                genUnit('Length', 'X');
            }
            if (name === 'resolution') {
                genUnits('Resolution');
            }
            else if (name === 'time') {
                genUnits('Time');
            }
            else if (name === 'named-color') {
                ColorsData.Basic.map(baseColor => genConstant(baseColor));
            }
            else if (name === 'single-transition-property') {
                PropertiesData.map(property => genConstant(property));
            }
            else if ((<DataTypeTerm>term).recursive) {
                extractFromTerm((<DataTypeTerm>term).recursive, extracted);
            }
        }
    };

    const term = resolveSyntaxByName(cssProperty, true);

    genSetMethod();
    extractFromTerm(term, propertyAttributes);

    const propertyId = id(innerPropertyName);
    const property = constant(
        propertyId,
        obj(
            Object.keys(propertyAttributes).map(name => assign(name, propertyAttributes[name]))
        )
    );

    appendNode(property);
    return propertyId;
}

export function genCss() {

    const elements: { [name: string]: Id } = {};

    // sheet
    appendFile('./src/properties/sheet.ts');
    elements['sheet'] = id('_sheet');

    // properties
    PropertiesData
        .filter(propertyName => {
            try {
                UpperCamelCase(propertyName);
            }
            catch (e) {
                console.warn('Unable to create property for', propertyName);
                return false;
            }
            return true;
        })
        .map(propertyName => {
            elements[UpperCamelCase(propertyName)] = genProperty(propertyName);
        });

    const cssId = id('Css');
    const css = constant(
        cssId,
        obj(
            Object.keys(elements).sort().map(name => assign(name, elements[name]))
        ),
        true
    );
    appendNode(css);

    // default export
    // const defaultExport = ts.createExportDefault(cssId);
    // appendNode(defaultExport);
}
