import {genColor} from 'constants/Color';
import {Keyword} from 'constants/Keyword';
import {Unit} from 'constants/Unit';
import {Angle, Frequency, Length, Resolution, Time} from 'datatypes/datatypes';
import {appendFile, appendNode, writefile} from 'core/print';
import {Method} from 'methods/methods';
import {genCss} from "properties/properties";

// CORE
appendFile('./src/core/core.ts');

// CONSTANTS
appendNode(Keyword);
genColor();
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
genCss();

writefile();
