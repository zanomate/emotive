import { Sheet } from 'core/core';

const _sheet = (...properties: Sheet[]): Sheet => {
    let sheet: Sheet = {};
    for (let property of properties) {
        (<any>Object).assign(sheet, property);
    }
    return sheet;
};
