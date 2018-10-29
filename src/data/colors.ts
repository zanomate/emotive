import { Mdn } from 'data/mdn';

export const ColorsData = {
    Basic: [
        'black',
        'silver',
        'gray',
        'white',
        'maroon',
        'red',
        'purple',
        'fuchsia',
        'green',
        'lime',
        'olive',
        'yellow',
        'navy',
        'blue',
        'teal',
        'aqua'
    ],
    All: Mdn.Syntaxes['named-color']
        .split('|')
        .map(key => key.trim())
};
