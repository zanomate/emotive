import { genColor } from 'constants/Color';
import { genElements } from 'constants/Element';
import { genKeyword } from 'constants/Keyword';
import { getProperty } from 'constants/Property';
import { genUnit } from 'constants/Unit';
import { appendFile, writefile } from 'core/print';
import { genDataTypes } from 'datatypes/datatypes';
import { genMethods } from 'methods/methods';
import { genCss } from 'properties/properties';
import { genQuery } from 'query/Query';
import { genPseudo } from './pseudo/Pseudo';

// CORE
appendFile('./src/core/core.ts');
appendFile('./src/query/core.ts');

// CONSTANTS
genKeyword();
getProperty();
genElements();
genColor();
genUnit();

// DATA TYPES
genDataTypes();

// METHODS
genMethods();

// PROPERTIES
genCss();

// PROPS
genPseudo();

// MEDIA QUERY
genQuery();

writefile();
