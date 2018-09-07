import { property } from '../../utils/factory';
import { CONTAIN, COVER, FILL, FRONT_IMAGE, NONE, SCALE_DOWN } from '../../constants';

const ImageOrientation = property('imageOrientation');
export { ImageOrientation };

const ImageResolution = property('imageResolution');
ImageResolution.FRONT_IMAGE = ImageResolution(FRONT_IMAGE);
export { ImageResolution };

const ObjectFit = property('objectFit');
ObjectFit.NONE = ObjectFit(NONE);
ObjectFit.FILL = ObjectFit(FILL);
ObjectFit.CONTAIN = ObjectFit(CONTAIN);
ObjectFit.COVER = ObjectFit(COVER);
ObjectFit.SCALE_DOWN = ObjectFit(SCALE_DOWN);
export { ObjectFit };

const ObjectPosition = property('objectPosition');
export { ObjectPosition };
