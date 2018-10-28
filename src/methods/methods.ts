import { BracketsTerm, ComposedTerm, MethodTerm, Term } from 'css-syntax-parser';
import {
    array, arrow, block, buildMethodId, call, DotDotDotToken, ExportModifier, id, ParamType, ret, StaticModifier,
    StringType, value
} from 'core/base';
import { lowerCamelCase } from 'core/naming';
import { properties } from 'core/properties';
import { calc, calcAdd, calcMul } from 'methods/calc';
import { hex, hexa } from 'methods/colors';
import * as ts from 'typescript';

const methods: string[] = [];
const excludedMethods = ['calc'];

function addMethods(...methodList: string[]) {
    for (let method of methodList) {
        if (!methods.includes(method) && !excludedMethods.includes(method)) {
            methods.push(method);
        }
    }
}

function extractMethods(term: Term) {
    if (term instanceof ComposedTerm) {
        term.children.map(child => extractMethods(child));
    }
    else if (term instanceof BracketsTerm) {
        extractMethods(term.content);
    }
    else if (term instanceof MethodTerm) {
        addMethods(term.name);
    }
}

function genMethods() {

    Object.values(properties).map(propertyTerm => extractMethods(propertyTerm));

    const propertyDeclarations: ts.PropertyDeclaration[] = [];

    const paramsId = id('params');
    const paramsType = array(ParamType);

    methods.sort().map(method => {
        try {
            let methodName = lowerCamelCase(method);
            propertyDeclarations.push(ts.createProperty(
                [],
                [StaticModifier],
                methodName,
                undefined,
                undefined,
                arrow(
                    [ts.createParameter([], [], DotDotDotToken, paramsId, undefined, paramsType)],
                    StringType,
                    block(ret(call(buildMethodId, value(method), paramsId)))
                )
            ));
        }
        catch (e) {
            console.warn('Unable to create method for', method);
        }
    });

    // Calc
    propertyDeclarations.push(calcAdd);
    propertyDeclarations.push(calcMul);
    propertyDeclarations.push(calc);

    // Colors
    propertyDeclarations.push(hex);
    propertyDeclarations.push(hexa);

    return ts.createClassDeclaration(
        [],
        [ExportModifier],
        'Method',
        [],
        [],
        propertyDeclarations
    );
}

export const Method = genMethods();
