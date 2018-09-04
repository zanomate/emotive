import { property } from '../../../utils';
import { LOUD, MEDIUM, SILENT, SOFT, X_LOUD, X_SOFT } from '../../../constants';

export const volume = property('volume');
volume.SILENT = volume(SILENT);
volume.X_SOFT = volume(X_SOFT);
volume.SOFT = volume(SOFT);
volume.MEDIUM = volume(MEDIUM);
volume.LOUD = volume(LOUD);
volume.X_LOUD = volume(X_LOUD);
