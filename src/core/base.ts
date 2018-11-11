import * as ts from 'typescript';

// Types
export type Id = ts.Identifier;
export type Expr = ts.Expression;
export type Assign = ts.PropertyAssignment;

export function union(...types: ts.TypeNode[]): ts.UnionTypeNode {
    return ts.createUnionTypeNode(types);
}

// Base

export function id(name: string): ts.Identifier {
    return ts.createIdentifier(name);
}

export function ref(id: ts.Identifier): ts.TypeReferenceNode {
    return ts.createTypeReferenceNode(id, []);
}

export function value(value: string | number) {
    return ts.createLiteral(value);
}

export function array(elementType: ts.TypeNode): ts.ArrayTypeNode {
    return ts.createArrayTypeNode(elementType);
}

export function access(head: ts.Expression, ...tail: (string | ts.Identifier)[]): ts.Expression {
    if (tail.length) {
        return access(ts.createPropertyAccess(head, tail[0]), ...tail.slice(1));
    }
    return head;
}

export function block(...statements: ts.Statement[]) {
    return ts.createBlock(statements, true);
}

export function call(expression: ts.Expression, ...args: ts.Expression[]): ts.CallExpression {
    return ts.createCall(expression, [], args);
}

export function spread(id: Id) {
    return ts.createSpread(id);
}

export function add(left: Expr, right: Expr) {
    return ts.createAdd(left, right);
}

export function ret(expression: ts.Expression) {
    return ts.createReturn(expression);
}

export function arrow(params: ts.ParameterDeclaration[], returnType: ts.TypeNode, body: ts.ConciseBody) {
    return ts.createArrowFunction([], [], params, returnType, undefined, body);
}

export function param(id: ts.Identifier, type: ts.TypeNode, dotDotDot: boolean = false) {
    return ts.createParameter(
        [],
        [],
        dotDotDot ? ts.createToken(ts.SyntaxKind.DotDotDotToken) : undefined,
        id,
        undefined,
        type
    );
}

export function assign(name: string, expression: ts.Expression) {
    return ts.createPropertyAssignment(name, expression);
}

export function obj(assignments: ts.PropertyAssignment[]) {
    return ts.createObjectLiteral(assignments)
}

export function constant(id: Id, expression: Expr, didExport: boolean = false) {
    const modifiers = didExport ? [ts.createModifier(ts.SyntaxKind.ExportKeyword)] : [];
    return ts.createVariableStatement(
        modifiers,
        ts.createVariableDeclarationList(
            [ts.createVariableDeclaration(id, undefined, expression)],
            ts.NodeFlags.Const
        )
    );
}

// Basic Types

export const NumberType = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
export const StringType = ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);

export const ParamId = id('Param');
export const ParamType = ref(ParamId);

export const SheetId = id('Sheet');
export const SheetType = ref(SheetId);

// Factory

export const buildDatatypeId = id('buildDatatype');
export const buildMethodId = id('buildMethod');
export const buildPropertyId = id('buildProperty');
