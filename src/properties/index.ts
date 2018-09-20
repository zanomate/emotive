import { Sheet } from '../core';

export * from './animation/Animation';
export * from './animation/Offset';
export * from './animation/Transition';

export * from './layout/BoxSizing';
export * from './layout/Break';
export * from './layout/Display';
export * from './layout/Flexbox';
export * from './layout/Float';
export * from './layout/Grid';
export * from './layout/Inline';
export * from './layout/Inset';
export * from './layout/Margin';
export * from './layout/Multicol';
export * from './layout/Overflow';
export * from './layout/Padding';
export * from './layout/Position';
export * from './layout/Ruby';
export * from './layout/Scroll';
export * from './layout/Size';
export * from './layout/Tables';
export * from './layout/Template';
export * from './layout/Viewport';
export * from './layout/ZIndex';

export * from './misc/All';
export * from './misc/Performance';
export * from './misc/Voice';

export * from './typography/Font';
export * from './typography/Generated';
export * from './typography/LineHeight';
export * from './typography/PageBreak';
export * from './typography/Punctuation';
export * from './typography/Text';
export * from './typography/Word';
export * from './typography/Wrap';
export * from './typography/WritingMode';

export * from './visual/Background';
export * from './visual/Blend';
export * from './visual/Border';
export * from './visual/BoxShadow';
export * from './visual/Clip';
export * from './visual/Color';
export * from './visual/Counter';
export * from './visual/Cursor';
export * from './visual/Fill';
export * from './visual/Filter';
export * from './visual/List';
export * from './visual/Mask';
export * from './visual/Media';
export * from './visual/Outline';
export * from './visual/Shape';
export * from './visual/Stroke';
export * from './visual/Visibility';

export function sheet(...properties: Sheet[]): Sheet {
    let sheet: Sheet = {};
    for (let property of properties) {
        (<any>Object).assign(sheet, property);
    }
    return sheet;
}
