import { resolveSyntaxByName, Term } from 'css-syntax-parser';
import { MDN } from 'core/mdn';

function genProperties(): { [name: string]: Term } {

    const properties: { [name: string]: Term } = {};

    const excludedProperties = ['--*'];
    Object.keys(MDN.Properties)
        .filter(propertyName => !excludedProperties.includes(propertyName))
        .map(propertyName => {properties[propertyName] = resolveSyntaxByName(propertyName, true)});

    return properties;
}

export const properties = genProperties();
