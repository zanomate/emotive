import { property } from 'utils'
import { AUTO, FIXED, ZOOM } from 'constants';

export const zoom = property('zoom');
zoom.AUTO = zoom(AUTO);

export const minZoom = property('minZoom');
minZoom.AUTO = minZoom(AUTO);

export const maxZoom = property('maxZoom');
maxZoom.AUTO = maxZoom(AUTO);

export const userZoom = property('userZoom');
userZoom.ZOOM = userZoom(ZOOM);
userZoom.FIXED = userZoom(FIXED);
