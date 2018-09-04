import { property } from 'utils';
import {
    ABOVE, BEHIND, BELOW, CENTER, CENTER_LEFT, CENTER_RIGHT, FAR_LEFT, FAR_RIGHT, HIGHER, LEFT, LEFT_SIDE, LEFTWARDS,
    LEVEL, LOWER, RIGHT, RIGHT_SIDE, RIGHTWARDS
} from 'constants';

export const azimuth = property('azimuth');
azimuth.LEFT_SIDE = azimuth(LEFT_SIDE);
azimuth.FAR_LEFT = azimuth(FAR_LEFT);
azimuth.LEFT = azimuth(LEFT);
azimuth.CENTER_LEFT = azimuth(CENTER_LEFT);
azimuth.CENTER = azimuth(CENTER);
azimuth.CENTER_RIGHT = azimuth(CENTER_RIGHT);
azimuth.RIGHT = azimuth(RIGHT);
azimuth.FAR_RIGHT = azimuth(FAR_RIGHT);
azimuth.RIGHT_SIDE = azimuth(RIGHT_SIDE);
azimuth.BEHIND = azimuth(BEHIND);
azimuth.LEFTWARDS = azimuth(LEFTWARDS);
azimuth.RIGHTWARDS = azimuth(RIGHTWARDS);

export const elevation = property('elevation');
elevation.BELOW = elevation(BELOW);
elevation.LEVEL = elevation(LEVEL);
elevation.ABOVE = elevation(ABOVE);
elevation.HIGHER = elevation(HIGHER);
elevation.LOWER = elevation(LOWER);
