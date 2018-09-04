import { property } from 'utils';
import { AUTO, CONTAIN, COVER, LANDSCAPE, PORTRAIT } from 'constants';

export const viewportFit = property('viewportFit');
viewportFit.AUTO = viewportFit(AUTO);
viewportFit.CONTAIN = viewportFit(CONTAIN);
viewportFit.COVER = viewportFit(COVER);

export const orientation = property('orientation');
orientation.AUTO = orientation(AUTO);
orientation.PORTRAIT = orientation(PORTRAIT);
orientation.LANDSCAPE = orientation(LANDSCAPE);
