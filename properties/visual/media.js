import { property } from 'utils';
import { CONTAIN, COVER, FILL, FRONT_IMAGE, NONE, SCALE_DOWN } from 'constants';

export const imageOrientation = property('imageOrientation');

export const imageResolution = property('imageResolution');
imageResolution.FRONT_IMAGE = imageResolution(FRONT_IMAGE);

export const objectFit = property('objectFit');
objectFit.NONE = objectFit(NONE);
objectFit.FILL = objectFit(FILL);
objectFit.CONTAIN = objectFit(CONTAIN);
objectFit.COVER = objectFit(COVER);
objectFit.SCALE_DOWN = objectFit(SCALE_DOWN);

export const objectPosition = property('objectPosition');
