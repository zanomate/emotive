import { ExportModifier, id, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import resolveSyntax, { BracketsTerm, ComposedTerm, KeywordTerm, MethodTerm, Term } from 'css-syntax-parser';
import { Mdn } from 'data/mdn';
import { PropertiesData } from 'data/properties';
import * as ts from 'typescript';

export function genKeyword() {

    const extractKeywords = (term: Term, extracted: string[]): string[] => {
        if (term instanceof ComposedTerm) {
            term.children.map(child => extractKeywords(child, extracted));
        }
        else if (term instanceof BracketsTerm) {
            extractKeywords(term.content, extracted);
        }
        else if (term instanceof MethodTerm) {
            extractKeywords(term.params, extracted);
        }
        else if (term instanceof KeywordTerm) {
            const keyword = term._value;
            if (!extracted.includes(keyword)) {
                extracted.push(keyword);
            }
        }
        return extracted;
    };

    const keywords: string[] = [];

    Object.keys(Mdn.Properties).map(propertyName => {
        const term = resolveSyntax(Mdn.Properties[propertyName]);
        extractKeywords(term, keywords);
    });

    Object.keys(Mdn.Syntaxes).map(syntaxName => {
        const term = resolveSyntax(Mdn.Syntaxes[syntaxName]);
        extractKeywords(term, keywords);
    });

    const keywordId = id('Keyword');
    const keyword = ts.createVariableStatement(
        [ExportModifier],
        ts.createVariableDeclarationList(
            [
                ts.createVariableDeclaration(
                    keywordId,
                    undefined,
                    ts.createObjectLiteral(
                        PropertiesData
                            .filter(keywordName => {
                                try {
                                    UPPER_CASE(keywordName);
                                }
                                catch (e) {
                                    console.warn('Unable to create keyword for', keywordName);
                                    return false;
                                }
                                return true;
                            })
                            .sort()
                            .map(keywordName => {
                                let constantName = UPPER_CASE(keywordName);
                                if (/^[A-Z]/.test(keywordName)) {
                                    constantName = '_' + constantName;
                                }
                                return ts.createPropertyAssignment(
                                    constantName,
                                    value(keywordName)
                                )
                            }),
                        false
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    );

    appendNode(keyword);
}
