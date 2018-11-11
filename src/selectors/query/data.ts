export interface MediaFeature {
    name: string;
    range?: boolean;
    constants?: string[];
    datatypes?: string[];
}

const MediaTypes: string[] = [
    'all',
    'braille',
    'embossed',
    'handheld',
    'print',
    'projection',
    'screen',
    'speech',
    'tty',
    'tv'
];

class MediaFeatures {
    static Width: MediaFeature = {
        name: 'width',
        range: true,
        datatypes: ['Length']
    };
    static Height: MediaFeature = {
        name: 'height',
        range: true,
        datatypes: ['Length']
    };
    static AspectRatio: MediaFeature = {
        name: 'aspect-ratio',
        range: true
    };
    static Orientation: MediaFeature = {
        name: 'orientation',
        constants: ['portrait', 'landscape']
    };
    static Resolution: MediaFeature = {
        name: 'resolution',
        range: true,
        datatypes: ['Resolution']
    };
    static Scan: MediaFeature = {
        name: 'scan',
        constants: ['interlace', 'progressive']
    };
    static Grid: MediaFeature = {
        name: 'grid',
        constants: ['0', '1']
    };
    static Update: MediaFeature = {
        name: 'update',
        constants: ['none', 'slow', 'fast']
    };
    static OverflowBlock: MediaFeature = {
        name: 'overflow-block',
        constants: ['none', 'scroll', 'optional-paged', 'paged']
    };
    static OverflowInline: MediaFeature = {
        name: 'overflow-inline',
        constants: ['none', 'scroll']
    };
    static Color: MediaFeature = {
        name: 'color'
    };
    static ColorGamut: MediaFeature = {
        name: 'color-gamut',
        constants: ['srgb', 'p3', 'rec2020']
    };
    static ColorIndex: MediaFeature = {
        name: 'color-index',
        range: true
    };
    static DisplayMode: MediaFeature = {
        name: 'display-mode',
        constants: ['fullscreen', 'standalone', 'minimal-ui', 'browser']
    };
    static Monochrome: MediaFeature = {
        name: 'monochrome',
        range: true
    };
    static InvertedColors: MediaFeature = {
        name: 'inverted-colors',
        constants: ['none', 'inverted']
    };
    static Pointer: MediaFeature = {
        name: 'pointer',
        constants: ['none', 'coarse', 'fine']
    };
    static Hover: MediaFeature = {
        name: 'hover',
        constants: ['none', 'hover']
    };
    static AnyPointer: MediaFeature = {
        name: 'any-pointer',
        constants: ['none', 'coarse', 'fine']
    };
    static AnyHover: MediaFeature = {
        name: 'any-hover',
        constants: ['none', 'hover']
    };
    static LightLevel: MediaFeature = {
        name: 'light-level',
        constants: ['dim', 'normal', 'washed']
    };
    static PrefersReducedMotion: MediaFeature = {
        name: 'prefers-reduced-motion',
        constants: ['no-preference', 'reduce']
    };
    static PrefersReducedTransparency: MediaFeature = {
        name: 'prefers-reduced-transparency',
        constants: ['no-preference', 'reduce']
    };
    static PrefersContrast: MediaFeature = {
        name: 'prefers-contrast',
        constants: ['no-preference', 'high', 'low']
    };
    static PrefersColorScheme: MediaFeature = {
        name: 'prefers-color-scheme',
        constants: ['no-preference', 'light', 'dark']
    };
    static Scripting: MediaFeature = {
        name: 'scripting',
        constants: ['none', 'initial-only', 'enabled']
    };
}

const QueryCombinators: {[name: string]: string} = {
    'and': 'mqAnd',
    'or': 'mqOr',
    'not': 'mqNot',
    'only': 'mqOnly'
};

export class MediaQueryData {
    static Types = MediaTypes;
    static Features = MediaFeatures;
    static Combinators = QueryCombinators;
}