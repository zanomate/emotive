import { assign, constant, id, obj, value } from 'core/base';
import { UPPER_CASE } from 'core/naming';
import { appendNode } from 'core/print';
import resolveSyntax, { BracketsTerm, ComposedTerm, KeywordTerm, MethodTerm, Term } from 'css-syntax-parser';
import { Mdn } from 'data/mdn';
import { PropertiesData } from 'data/properties';

export function genKeyword() {

    const keywords: string[] = [];
    const addKeywords = (...listOfKeyword: string[]) => {
        listOfKeyword.map(keyword => {
            if (!keywords.includes(keyword)) {
                keywords.push(keyword);
            }
        });
    };

    const extractKeywords = (term: Term) => {
        if (term instanceof ComposedTerm) {
            term.children.map(child => {
                extractKeywords(child);
            });
        }
        else if (term instanceof BracketsTerm) {
            extractKeywords(term.content);
        }
        else if (term instanceof MethodTerm) {
            extractKeywords(term.params);
        }
        else if (term instanceof KeywordTerm) {
            const keyword = term._value;
            addKeywords(keyword);
        }
    };

    Object.keys(Mdn.Properties).map(propertyName => {
        const term = resolveSyntax(Mdn.Properties[propertyName]);
        extractKeywords(term);
    });

    Object.keys(Mdn.Syntaxes).map(syntaxName => {
        const term = resolveSyntax(Mdn.Syntaxes[syntaxName]);
        extractKeywords(term);
    });

    const keywordId = id('Keyword');
    const keyword = constant(keywordId,
        obj(
            keywords
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
                    if (/^[^a-z]/.test(keywordName)) {
                        constantName = '_' + constantName;
                    }
                    return assign(
                        constantName,
                        value(keywordName)
                    )
                })
        ),
        true
    );

    appendNode(keyword);
}
