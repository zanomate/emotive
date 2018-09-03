import { property } from 'utils';
import {
    ALTERNATE, ALTERNATE_REVERSE, BACKWARDS, BOTH, EASE, EASE_IN, EASE_IN_OUT, EASE_OUT, FORWARDS, INFINITE, LINEAR,
    NONE, NORMAL, PAUSED, REVERSE, RUNNING, STEP_END, STEP_START
} from 'constants';
import { cubicBezier, frames, steps } from 'functions';

export const animation = property('animation');
animation.NONE = animation(NONE);

export const animationName = property('animationName');
animationName.NONE = animationName(NONE);

export const animationTimingFunction = property('animationTimingFunction');
animationTimingFunction.LINEAR = animationTimingFunction(LINEAR);
animationTimingFunction.EASE = animationTimingFunction(EASE);
animationTimingFunction.EASE_IN = animationTimingFunction(EASE_IN);
animationTimingFunction.EASE_OUT = animationTimingFunction(EASE_OUT);
animationTimingFunction.EASE_IN_OUT = animationTimingFunction(EASE_IN_OUT);
animationTimingFunction.STEP_START = animationTimingFunction(STEP_START);
animationTimingFunction.STEP_END = animationTimingFunction(STEP_END);
animationTimingFunction.cubicBezier = (...values) => animationTimingFunction(cubicBezier(...values));
animationTimingFunction.steps = (...values) => animationTimingFunction(steps(...values));
animationTimingFunction.frames = (...values) => animationTimingFunction(frames(...values));

export const animationDelay = property('animationDelay');

export const animationDuration = property('animationDuration');

export const animationDirection = property('animationDirection');
animationDirection.NORMAL = animationDirection(NORMAL);
animationDirection.REVERSE = animationDirection(REVERSE);
animationDirection.ALTERNATE = animationDirection(ALTERNATE);
animationDirection.ALTERNATE_REVERSE = animationDirection(ALTERNATE_REVERSE);

export const animationFillMode = property('animationFillMode');
animationFillMode.NONE = animationFillMode(NONE);
animationFillMode.FORWARDS = animationFillMode(FORWARDS);
animationFillMode.BACKWARDS = animationFillMode(BACKWARDS);
animationFillMode.BOTH = animationFillMode(BOTH);

export const animationIterationCount = property('animationIterationCount');
animationIterationCount.INFINITE = animationIterationCount(INFINITE);

export const animationPlayState = property('animationPlayState');
animationPlayState.RUNNING = animationPlayState(RUNNING);
animationPlayState.PAUSED = animationPlayState(PAUSED);

