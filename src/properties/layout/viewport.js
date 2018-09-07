import { property } from '../../utils/factory';
import { AUTO, CONTAIN, COVER, LANDSCAPE, PORTRAIT } from '../../constants';

const ViewportFit = property('viewportFit');
ViewportFit.AUTO = ViewportFit(AUTO);
ViewportFit.CONTAIN = ViewportFit(CONTAIN);
ViewportFit.COVER = ViewportFit(COVER);
export { ViewportFit };

const Orientation = property('orientation');
Orientation.AUTO = Orientation(AUTO);
Orientation.PORTRAIT = Orientation(PORTRAIT);
Orientation.LANDSCAPE = Orientation(LANDSCAPE);
export { Orientation };
