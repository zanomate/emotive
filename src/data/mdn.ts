import { Query } from 'data/query';
// @ts-ignore
import * as MDNProperties from 'mdn-data/css/properties.json';
// @ts-ignore
import * as MDNSyntaxes from 'mdn-data/css/syntaxes.json';
import { Types } from './types';

const syntaxes: { [key: string]: string } = {};
for (let key of Object.keys(MDNSyntaxes)) {
    syntaxes[key] = MDNSyntaxes[key].syntax;
}

const properties: { [key: string]: string } = {};
for (let key of Object.keys(MDNProperties)) {
    properties[key] = MDNProperties[key].syntax;
}

export class Mdn {
    static Syntaxes = syntaxes;
    static Properties = properties;
    static Types = Types;
    static Query = Query;
}
