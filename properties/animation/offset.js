import { property } from 'utils';
import { AUTO, NONE, REVERSE } from 'constants';
import { ray } from 'functions';

export const offset = property('offset');

export const offsetPosition = property('offsetPosition');
offsetPosition.AUTO = offsetPosition(AUTO);

export const offsetPath = property('offsetPath');
offsetPath.NONE = offsetPath(NONE);
offsetPath.ray = (...values) => offsetPath(ray(...values));

export const offsetDistance = property('offsetDistance');

export const offsetRotate = property('offsetRotate');
offsetRotate.AUTO = offsetRotate(AUTO);
offsetRotate.REVERSE = offsetRotate(REVERSE);

export const offsetAnchor = property('offsetAnchor');
offsetAnchor.AUTO = offsetAnchor(AUTO);
