import {assign, constant, id, obj, value} from 'core/base';
import {UPPER_CASE} from 'core/naming';
import {appendNode} from 'core/print';
import {PropertiesData} from 'data/properties';

export function getProperty() {

    const propertyId = id('Property');
    const property = constant(
        propertyId,
        obj(
            PropertiesData
                .filter(propertyName => {
                    try {
                        UPPER_CASE(propertyName)
                    }
                    catch (e) {
                        console.warn('Unable to create property for', propertyName);
                        return false;
                    }
                    return true;
                })
                .sort()
                .map(propertyName => assign(
                    UPPER_CASE(propertyName),
                    value(propertyName)
                ))
        ),
        true
    );

    appendNode(property);
}
