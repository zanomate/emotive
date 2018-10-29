import {
    array, arrow, block, buildMethodId, call, DotDotDotToken, ExportModifier, id, ParamType, ret, StringType, value
} from 'core/base';
import { lowerCamelCase } from 'core/naming';
import { appendFile, appendNode } from 'core/print';
import resolveSyntax, { BracketsTerm, ComposedTerm, MethodTerm, Term } from 'css-syntax-parser';
import { Mdn } from 'data/mdn';
import * as ts from 'typescript';

export function genMethods() {

    const excludedMethods = ['calc'];

    const extractMethods = (term: Term, extracted: string[]): string[] => {
        if (term instanceof ComposedTerm) {
            term.children.map(child => extractMethods(child, extracted));
        }
        else if (term instanceof BracketsTerm) {
            extractMethods(term.content, extracted);
        }
        else if (term instanceof MethodTerm) {
            const keyword = term.name;
            if (!extracted.includes(keyword) && !excludedMethods.includes(keyword)) {
                extracted.push(keyword);
            }
        }
        return extracted;
    };

    let methodNames: string[] = [];

    Object.keys(Mdn.Properties).map(propertyName => {
        const term = resolveSyntax(Mdn.Properties[propertyName]);
        extractMethods(term, methodNames);
    });

    Object.keys(Mdn.Syntaxes).map(syntaxName => {
        const term = resolveSyntax(Mdn.Syntaxes[syntaxName]);
        extractMethods(term, methodNames);
    });

    let methods: { [name: string]: ts.Identifier } = {};

    const paramsId = id('params');
    const paramsType = array(ParamType);

    methodNames
        .filter(methodName => {
            try {
                lowerCamelCase(methodName);
            }
            catch (e) {
                console.warn('Unable to create method for', methodName);
                return false;
            }
            return true;
        })
        .map(methodName => {
            const jsName = lowerCamelCase(methodName);
            const innerMethodName = '_' + jsName;
            const methodId = id(innerMethodName);
            const method = ts.createVariableStatement(
                [],
                ts.createVariableDeclarationList(
                    [
                        ts.createVariableDeclaration(
                            methodId,
                            undefined,
                            arrow(
                                [ts.createParameter(
                                    [],
                                    [],
                                    DotDotDotToken,
                                    paramsId,
                                    undefined,
                                    paramsType
                                )],
                                StringType,
                                block(ret(call(buildMethodId, value(methodName), paramsId)))
                            )
                        )
                    ],
                    ts.NodeFlags.Const
                )
            );
            appendNode(method);
            methods[jsName] = methodId;
        });

    // Calc
    appendFile('./src/methods/calc.ts');
    methods['calc'] = id('_calc');

    // Colors
    appendFile('./src/methods/colors.ts');
    methods['hex'] = id('_hex');
    methods['hexa'] = id('_hexa');

    const methodContainerId = id('Method');
    const methodContainer = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    methodContainerId,
                    undefined,
                    ts.createObjectLiteral(
                        Object.keys(methods).sort().map(methodName => ts.createPropertyAssignment(
                            methodName,
                            methods[methodName]
                        )),
                        true
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(methodContainer);
}
