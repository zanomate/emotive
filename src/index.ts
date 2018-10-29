import { genColor } from 'constants/Color';
import { genKeyword } from 'constants/Keyword';
import { getProperty } from 'constants/Property';
import { genUnit } from 'constants/Unit';
import { appendFile, writefile } from 'core/print';
import { genDataTypes } from 'datatypes/datatypes';
import { genMethods } from 'methods/methods';
import { genCss } from 'properties/properties';

// CORE
appendFile('./src/core/core.ts');

// CONSTANTS
genKeyword();
getProperty();
genColor();
genUnit();

// DATA TYPES
genDataTypes();

// METHODS
genMethods();

// PROPERTIES
genCss();

writefile();
