import {
    access, array, arrow, buildPropertyId, call, DotDotDotToken, ExportModifier, id, NumberType, ParamType, SheetType,
    StringType, value
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
function genProperty(cssProperty: string): ts.Identifier {

    const jsName = lowerCamelCase(cssProperty); // (e.g. textAlign)
    const EmotiveName = UpperCamelCase(cssProperty); // (e.g. TextAlign)
    const innerPropertyName = '_' + EmotiveName; // (e.g. _TextAlign)

    const attributes: { [id: string]: ts.Expression } = {};

    const genSet = () => {
        attributes['set'] = arrow(
            [
                ts.createParameter(
                    [],
                    [],
                    DotDotDotToken,
                    paramsId,
                    undefined,
                    paramsType
                )
            ],
            SheetType,
            ts.createObjectLiteral([
                ts.createPropertyAssignment(jsName, call(buildPropertyId, paramsId))
            ])
        );
    };

    const genKeyword = (cssValue: string) => {
        try {
            const emotiveValue = UPPER_CASE(cssValue);
            if (!attributes.hasOwnProperty(emotiveValue)) {
                attributes[emotiveValue] = ts.createObjectLiteral([
                    ts.createPropertyAssignment(jsName, value(cssValue))
                ]);
            }
        }
        catch (e) {
            console.log('Unable to create keyword', cssValue, 'for property', cssProperty);
        }
    };

    const genMethod = (cssName: string) => {
        try {
            const emotiveValue = lowerCamelCase(cssName);
            if (!attributes.hasOwnProperty(emotiveValue)) {
                attributes[emotiveValue] = arrow(
                    [
                        ts.createParameter(
                            [],
                            [],
                            DotDotDotToken,
                            paramsId,
                            undefined,
                            paramsType
                        )
                    ],
                    SheetType,
                    ts.createObjectLiteral([
                        ts.createPropertyAssignment(jsName, call(access(id('Method'), emotiveValue), ts.createSpread(paramsId)))
                    ])
                );
            }
        }
        catch (e) {
            console.log('Unable to create method', cssName, 'for property', cssProperty);
        }
    };

    const codeId = id('code');
    const alphaId = id('alpha');
    const hex = 'hex';
    const hexa = 'hexa';

    const genColorMethods = () => {
        attributes[hex] = arrow(
            [
                ts.createParameter(
                    [],
                    [],
                    undefined,
                    codeId,
                    undefined,
                    StringType
                )
            ],
            SheetType,
            ts.createObjectLiteral([
                ts.createPropertyAssignment(jsName, call(access(id('Method'), hex), codeId))
            ])
        );
        attributes[hexa] = arrow(
            [
                ts.createParameter(
                    [],
                    [],
                    undefined,
                    codeId,
                    undefined,
                    StringType
                ),
                ts.createParameter(
                    [],
                    [],
                    undefined,
                    alphaId,
                    undefined,
                    NumberType
                )
            ],
            SheetType,
            ts.createObjectLiteral([
                ts.createPropertyAssignment(jsName, call(access(id('Method'), hexa), codeId, alphaId))
            ])
        );
    };

    const genUnit = (datatype: string, unit: string) => {
        try {
            if (!attributes.hasOwnProperty(unit)) {
                attributes[unit] = arrow(
                    [
                        ts.createParameter(
                            [],
                            [],
                            DotDotDotToken,
                            numsId,
                            undefined,
                            numsType
                        )
                    ],
                    SheetType,
                    ts.createObjectLiteral([
                        ts.createPropertyAssignment(jsName, call(access(id(datatype), unit), ts.createSpread(numsId)))
                    ])
                );
            }
        }
        catch (e) {
            console.log('Unable to create unit', unit, 'for property', cssProperty);
        }
    };

    const extractFromTerm = (term: Term, extracted: { [id: string]: ts.Expression }) => {

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
            genKeyword((<KeywordTerm>term)._value);
        }
        else if (term instanceof DataTypeTerm) {
            const name = (<DataTypeTerm>term).name;
            if (name === 'angle') {
                Mdn.Types.Angle.map(unit => genUnit('Angle', unit));
            }
            if (name === 'frequency') {
                Mdn.Types.Frequency.map(unit => genUnit('Frequency', unit));
            }
            if (name === 'length') {
                Mdn.Types.Length.map(unit => genUnit('Length', unit));
            }
            if (name === 'percentage') {
                genUnit('Length', 'X');
            }
            if (name === 'resolution') {
                Mdn.Types.Resolution.map(unit => genUnit('Resolution', unit));
            }
            else if (name === 'time') {
                Mdn.Types.Time.map(unit => genUnit('Time', unit));
            }
            else if (name === 'named-color') {
                ColorsData.Basic.map(baseColor => genKeyword(baseColor));
            }
            else if (name === 'single-transition-property') {
                PropertiesData.map(property => genKeyword(property));
            }
            else if ((<DataTypeTerm>term).recursive) {
                extractFromTerm((<DataTypeTerm>term).recursive, extracted);
            }
        }
    };

    const term = resolveSyntaxByName(cssProperty, true);

    genSet();
    extractFromTerm(term, attributes);

    const propertyId = id(innerPropertyName);
    const property = ts.createVariableStatement(
        [],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    propertyId,
                    undefined,
                    ts.createObjectLiteral(
                        Object.keys(attributes).map(name => ts.createPropertyAssignment(name, attributes[name])),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(property);
    return propertyId;
}

export function genCss() {

    const elements: { [name: string]: ts.Identifier } = {};

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
    const css = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    cssId,
                    undefined,
                    ts.createObjectLiteral(
                        Object.keys(elements).sort().map(name => ts.createPropertyAssignment(name, elements[name])),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(css);
}
