import { property } from '../../utils';
import {
    ALTERNATE, ALTERNATE_REVERSE, BACKWARDS, BOTH, EASE, EASE_IN, EASE_IN_OUT,
    EASE_OUT, FORWARDS, INFINITE, LINEAR, NONE, NORMAL, PAUSED, REVERSE,
    RUNNING, STEP_END, STEP_START
} from '../../constants';
import { cubicBezier, frames, steps } from '../../methods';

const Animation = property('animation');
Animation.NONE = Animation(NONE);
export { Animation };

const AnimationName = property('animationName');
AnimationName.NONE = AnimationName(NONE);
export { AnimationName };

const AnimationTimingFunction = property('animationTimingFunction');
AnimationTimingFunction.LINEAR = AnimationTimingFunction(LINEAR);
AnimationTimingFunction.EASE = AnimationTimingFunction(EASE);
AnimationTimingFunction.EASE_IN = AnimationTimingFunction(EASE_IN);
AnimationTimingFunction.EASE_OUT = AnimationTimingFunction(EASE_OUT);
AnimationTimingFunction.EASE_IN_OUT = AnimationTimingFunction(EASE_IN_OUT);
AnimationTimingFunction.STEP_START = AnimationTimingFunction(STEP_START);
AnimationTimingFunction.STEP_END = AnimationTimingFunction(STEP_END);
AnimationTimingFunction.cubicBezier = (...values) => AnimationTimingFunction(cubicBezier(...values));
AnimationTimingFunction.steps = (...values) => AnimationTimingFunction(steps(...values));
AnimationTimingFunction.frames = (...values) => AnimationTimingFunction(frames(...values));
export { AnimationTimingFunction };

const AnimationDelay = property('animationDelay');
export { AnimationDelay };

const AnimationDuration = property('animationDuration');
export { AnimationDuration };

const AnimationDirection = property('animationDirection');
AnimationDirection.NORMAL = AnimationDirection(NORMAL);
AnimationDirection.REVERSE = AnimationDirection(REVERSE);
AnimationDirection.ALTERNATE = AnimationDirection(ALTERNATE);
AnimationDirection.ALTERNATE_REVERSE = AnimationDirection(ALTERNATE_REVERSE);
export { AnimationDirection };

const AnimationFillMode = property('animationFillMode');
AnimationFillMode.NONE = AnimationFillMode(NONE);
AnimationFillMode.FORWARDS = AnimationFillMode(FORWARDS);
AnimationFillMode.BACKWARDS = AnimationFillMode(BACKWARDS);
AnimationFillMode.BOTH = AnimationFillMode(BOTH);
export { AnimationFillMode };

const AnimationIterationCount = property('animationIterationCount');
AnimationIterationCount.INFINITE = AnimationIterationCount(INFINITE);
export { AnimationIterationCount };

const AnimationPlayState = property('animationPlayState');
AnimationPlayState.RUNNING = AnimationPlayState(RUNNING);
AnimationPlayState.PAUSED = AnimationPlayState(PAUSED);
export { AnimationPlayState };
