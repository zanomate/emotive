// @ts-ignore
import * as MDNProperties from 'mdn-data/css/properties.json';
// @ts-ignore
import * as MDNSyntaxes from 'mdn-data/css/syntaxes.json';

const syntaxes: { [key: string]: string } = {};
for (let key of Object.keys(MDNSyntaxes)) {
    syntaxes[key] = MDNSyntaxes[key].syntax;
}

const properties: { [key: string]: string } = {};
for (let key of Object.keys(MDNProperties)) {
    properties[key] = MDNProperties[key].syntax;
}

const colors: string[] = syntaxes['named-color'].split('|').map(key => key.trim());

class Types {
    static Angle = ['deg', 'rad', 'grad', 'turn'];
    static Frequency = ['Hz', 'kHz'];
    static Length = ['cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'fr'];
    static Resolution = ['dpi', 'dpcm', 'dppx', 'x'];
    static Time = ['s', 'ms'];
}

export class MDN {
    static Syntaxes = syntaxes;
    static Properties = properties;
    static Colors = colors;
    static Types = Types;
}
