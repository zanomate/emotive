import { resolveSyntaxByName, Term } from 'css-syntax-parser';
<<<<<<< Updated upstream:src/core/properties.ts
import { MDN } from 'core/mdn';
=======
import { Mdn } from 'data/mdn';
>>>>>>> Stashed changes:src/gen/properties.ts

function genProperties(): { [name: string]: Term } {

    const properties: { [name: string]: Term } = {};

    const excludedProperties = ['--*'];
    Object.keys(Mdn.Properties)
        .filter(propertyName => !excludedProperties.includes(propertyName))
        .map(propertyName => {properties[propertyName] = resolveSyntaxByName(propertyName, true)});

    return properties;
}

export const properties = genProperties();
