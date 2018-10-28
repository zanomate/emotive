import {BracketsTerm, ComposedTerm, DataTypeTerm, KeywordTerm, MethodTerm, Term} from 'css-syntax-parser';
import {
    access, array, arrow, buildPropertyId, call, DotDotDotToken, ExportModifier, id, NumberType, ParamType, ref,
    StaticModifier, value
} from 'core/base';
import {MDN} from 'core/mdn';
import {lowerCamelCase, UPPER_CASE, UpperCamelCase} from 'core/naming';
import {properties} from 'core/properties';
import * as ts from 'typescript';
import {appendNode} from "core/print";
import {genSheet} from "properties/sheet";

const SheetType = ref(id('Sheet'));

function genSet(jsName: string) {

    const paramsId = id('params');
    const paramsType = array(ParamType);

    return ts.createProperty(
        [],
        [StaticModifier],
        'set',
        undefined,
        undefined,
        arrow(
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
        )
    );
}

function genPropertyKeyword(jsName: string, keyword: string) {

    const methodName = UPPER_CASE(keyword);

    return ts.createProperty(
        [],
        [StaticModifier],
        methodName,
        undefined,
        SheetType,
        ts.createObjectLiteral([
            ts.createPropertyAssignment(jsName, value(keyword))
        ])
    );
}

function genPropertyUnit(jsName: string, datatype: string, unit: string) {

    const paramsId = id('params');
    const paramsType = array(NumberType);
    const methodName = lowerCamelCase(unit);

    return ts.createProperty(
        [],
        [StaticModifier],
        methodName,
        undefined,
        undefined,
        arrow(
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
                ts.createPropertyAssignment(jsName, call(access(id(datatype), unit), ts.createSpread(paramsId)))
            ])
        )
    );
}

function genProperty(propertyName: string): ts.Identifier {

    const className = '_' + UpperCamelCase(propertyName);
    const jsName = lowerCamelCase(propertyName);

    const declarations: { [id: string]: ts.PropertyDeclaration } = {};
    declarations[''] = genSet(jsName);

    const addKeyword = (keyword: string) => {
        if (!declarations.hasOwnProperty(keyword) && !excludedKeywords.includes(keyword)) {
            declarations[keyword] = genPropertyKeyword(jsName, keyword);
        }
    };

    const addUnit = (datatype: string, unit: string) => {
        if (!declarations.hasOwnProperty(unit)) {
            declarations[unit] = genPropertyUnit(jsName, datatype, unit);
        }
    };

    const excludedKeywords = ['\'[\'', '\']\''];

    const extractFromTerm = (term: Term) => {
        if (term instanceof ComposedTerm) {
            term.children.map(child => extractFromTerm(child));
        }
        else if (term instanceof BracketsTerm) {
            extractFromTerm(term.content);
        }
        else if (term instanceof MethodTerm) {
            extractFromTerm(term.params);
        }
        else if (term instanceof KeywordTerm) {
            const value = (<KeywordTerm>term)._value;
            addKeyword(value);
        }
        else if (term instanceof DataTypeTerm) {
            const name = (<DataTypeTerm>term).name;
            if (name === 'angle') {
                MDN.Types.Angle.map(unit => addUnit('Angle', unit));
            }
            if (name === 'frequency') {
                MDN.Types.Frequency.map(unit => addUnit('Frequency', unit));
            }
            if (name === 'length') {
                MDN.Types.Length.map(unit => addUnit('Length', unit));
            }
            if (name === 'percentage') {
                addUnit('Length', 'X');
            }
            if (name === 'resolution') {
                MDN.Types.Resolution.map(unit => addUnit('Resolution', unit));
            }
            else if (name === 'time') {
                MDN.Types.Time.map(unit => addUnit('Time', unit));
            }
        }
    };

    extractFromTerm(properties[propertyName]);

    const classDeclaration = ts.createClassDeclaration(
        [],
        [],
        className,
        [],
        [],
        Object.values(declarations)
    );

    appendNode(classDeclaration);
    return id(className);
}

export function genCss() {

    const elements: { [name: string]: ts.Identifier } = {};

    // sheet
    elements['sheet'] = genSheet();

    // properties
    Object.keys(properties).map(propertyName => {
        elements[propertyName] = genProperty(propertyName);
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
                        Object.keys(elements).map(name => ts.createPropertyAssignment(UpperCamelCase(name), elements[name])),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(css);
}
