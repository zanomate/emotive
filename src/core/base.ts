import * as ts from 'typescript';

// Types
export type Id = ts.Identifier;
export type Expr = ts.Expression;

// Modifiers
// export const ConstModifier = ts.createModifier(ts.SyntaxKind.ConstKeyword);
// export const StaticModifier = ts.createModifier(ts.SyntaxKind.StaticKeyword);
// export const ExportModifier = ts.createModifier(ts.SyntaxKind.ExportKeyword);

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

// export function ifThen(condition: ts.Expression, thenStatement: ts.Statement, elseStatement?: ts.Statement) {
//     return ts.createIf(condition, thenStatement, elseStatement);
// }
//
// export function ternary(condition: ts.Expression, whenTrue: ts.Expression, whenFalse: ts.Expression): ts.ConditionalExpression {
//     return ts.createConditional(condition, QuestionToken, whenTrue, ColonToken, whenFalse);
// }

export function ret(expression: ts.Expression) {
    return ts.createReturn(expression);
}

export function arrow(params: ts.ParameterDeclaration[], returnType: ts.TypeNode, body: ts.ConciseBody) {
    return ts.createArrowFunction([], [], params, returnType, undefined, body);
}

// export function add(head: ts.Expression, ...tail: ts.Expression[]): ts.Expression {
//     if (tail.length) {
//         ts.createBinary(head, ts.SyntaxKind.PlusToken, add(tail[0], ...tail.slice(1)));
//     }
//     return head;
// }
//
// export function sub(head: ts.Expression, ...tail: ts.Expression[]): ts.Expression {
//     if (tail.length) {
//         ts.createBinary(head, ts.SyntaxKind.MinusToken, sub(tail[0], ...tail.slice(1)));
//     }
//     return head;
// }
//
// export function mul(head: ts.Expression, ...tail: ts.Expression[]): ts.Expression {
//     if (tail.length) {
//         ts.createBinary(head, ts.SyntaxKind.AsteriskToken, mul(tail[0], ...tail.slice(1)));
//     }
//     return head;
// }

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
