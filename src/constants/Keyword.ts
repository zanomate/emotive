import {assign, constant, id, obj, value} from 'core/base';
import {UPPER_CASE} from 'core/naming';
import {appendNode} from 'core/print';
import resolveSyntax, {BracketsTerm, ComposedTerm, KeywordTerm, MethodTerm, Term} from 'css-syntax-parser';
import {Mdn} from 'data/mdn';

export function genKeywordName(keyword: string) {
    let name = UPPER_CASE(keyword);
    if (/^[^a-z]/.test(name)) {
        name = '_' + name;
    }
    return name;
}

export function genKeyword() {

    const keywords: { [name: string]: string } = {};
    const addKeywords = (...listOfKeyword: string[]) => {
        listOfKeyword.map(keyword => {
            try {
                const name = genKeywordName(keyword);
                if (!keywords.hasOwnProperty(name)) {
                    keywords[name] = keyword;
                }
            }
            catch (e) {
                console.warn('Unable to create keyword for', keyword);
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
            Object.keys(keywords)
                .sort()
                .map(name => {
                    return assign(name, value(keywords[name]))
                })
        ),
        true
    );

    appendNode(keyword);
}
