import { BracketsTerm, ComposedTerm, KeywordTerm, MethodTerm, Term } from 'css-syntax-parser';
import { ExportModifier, StaticModifier, StringType, value } from 'gen/base';
import { UPPER_CASE } from 'gen/naming';
import { properties } from 'gen/properties';
import * as ts from 'typescript';

const keywords: string[] = [];
const excludedKeywords = ['\'[\'', '\']\''];

function addKeywords(...keywordList: string[]) {
    for (let keyword of keywordList) {
        if (!keywords.includes(keyword) && !excludedKeywords.includes(keyword)) {
            keywords.push(keyword);
        }
    }
}

function extractKeywords(term: Term) {
    if (term instanceof ComposedTerm) {
        term.children.map(child => extractKeywords(child));
    }
    else if (term instanceof BracketsTerm) {
        extractKeywords(term.content);
    }
    else if (term instanceof MethodTerm) {
        extractKeywords(term.params);
    }
    else if (term instanceof KeywordTerm) {
        addKeywords(term._value);
    }
}

function genKeywords() {

    Object.values(properties).map(propertyTerm => extractKeywords(propertyTerm));

    const propertyDeclarations: ts.PropertyDeclaration[] = [];

    keywords.sort().map(keyword => {
        try {
            let constantName = UPPER_CASE(keyword);
            if (/^[A-Z]/.test(keyword)) {
                constantName = '_' + constantName;
            }
            propertyDeclarations.push(ts.createProperty(
                [],
                [StaticModifier],
                constantName,
                undefined,
                StringType,
                value(keyword)
            ));
        }
        catch (e) {
            console.warn('Unable to create keyword for', keyword);
        }
    });

    return ts.createClassDeclaration(
        [],
        [ExportModifier],
        'Keyword',
        [],
        [],
        propertyDeclarations
    );
}

export const Keyword = genKeywords();
