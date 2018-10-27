import { Color } from 'constants/Color';
import { Keyword } from 'constants/Keyword';
import { Unit } from 'constants/Unit';
import { Angle, Frequency, Length, Resolution, Time } from 'datatypes/datatypes';
import { appendFile, appendNode, writefile } from 'gen/print';
import { Method } from 'methods/methods';
import { Css } from 'properties/properties';

// CORE
appendFile('./src/core/types.ts');
appendFile('./src/core/utils.ts');
appendFile('./src/core/factory.ts');

// CONSTANTS
appendNode(Keyword);
appendNode(Color);
appendNode(Unit);

// DATA TYPES
appendNode(Angle);
appendNode(Frequency);
appendNode(Length);
appendNode(Resolution);
appendNode(Time);

// METHODS
appendNode(Method);

// PROPERTIES
appendNode(Css);

writefile();
