import { property } from '../../utils';
import {
    ALL, EASE, EASE_IN, EASE_IN_OUT, EASE_OUT, LINEAR, NONE, STEP_END,
    STEP_START
} from '../../constants';
import { cubicBezier, frames, steps } from '../../methods';

const Transition = property('transition');
export { Transition };

const TransitionDelay = property('transitionDelay');
export { TransitionDelay };

const TransitionDuration = property('transitionDuration');
export { TransitionDuration };

const TransitionProperty = property('transitionProperty');
TransitionProperty.NONE = TransitionProperty(NONE);
TransitionProperty.ALL = TransitionProperty(ALL);
export { TransitionProperty };

const TransitionTimingFunction = property('transitionTimingFunction');
TransitionTimingFunction.LINEAR = TransitionTimingFunction(LINEAR);
TransitionTimingFunction.EASE = TransitionTimingFunction(EASE);
TransitionTimingFunction.EASE_IN = TransitionTimingFunction(EASE_IN);
TransitionTimingFunction.EASE_OUT = TransitionTimingFunction(EASE_OUT);
TransitionTimingFunction.EASE_IN_OUT = TransitionTimingFunction(EASE_IN_OUT);
TransitionTimingFunction.STEP_START = TransitionTimingFunction(STEP_START);
TransitionTimingFunction.STEP_END = TransitionTimingFunction(STEP_END);
TransitionTimingFunction.cubicBezier = (...values) => TransitionTimingFunction(cubicBezier(...values));
TransitionTimingFunction.steps = (...values) => TransitionTimingFunction(steps(...values));
TransitionTimingFunction.frames = (...values) => TransitionTimingFunction(frames(...values));
export { TransitionTimingFunction };

