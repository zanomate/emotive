import { property } from '../../utils';
import { AUTO, FIXED, ZOOM } from '../../constants';

const Zoom = property('zoom');
Zoom.AUTO = Zoom(AUTO);
export { Zoom };

const MinZoom = property('minZoom');
MinZoom.AUTO = MinZoom(AUTO);
export { MinZoom };

const MaxZoom = property('maxZoom');
MaxZoom.AUTO = MaxZoom(AUTO);
export { MaxZoom };

const UserZoom = property('userZoom');
UserZoom.ZOOM = UserZoom(ZOOM);
UserZoom.FIXED = UserZoom(FIXED);
export { UserZoom };
