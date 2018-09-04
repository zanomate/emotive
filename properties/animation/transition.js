import { property } from 'utils';
import { ALL, EASE, EASE_IN, EASE_IN_OUT, EASE_OUT, LINEAR, NONE, STEP_END, STEP_START } from 'constants';
import { cubicBezier, frames, steps } from 'functions';

export const transition = property('transition');

export const transitionDelay = property('transitionDelay');

export const transitionDuration = property('transitionDuration');

export const transitionProperty = property('transitionProperty');
transitionProperty.NONE = transitionProperty(NONE);
transitionProperty.ALL = transitionProperty(ALL);

export const transitionTimingFunction = property('transitionTimingFunction');
transitionTimingFunction.LINEAR = transitionTimingFunction(LINEAR);
transitionTimingFunction.EASE = transitionTimingFunction(EASE);
transitionTimingFunction.EASE_IN = transitionTimingFunction(EASE_IN);
transitionTimingFunction.EASE_OUT = transitionTimingFunction(EASE_OUT);
transitionTimingFunction.EASE_IN_OUT = transitionTimingFunction(EASE_IN_OUT);
transitionTimingFunction.STEP_START = transitionTimingFunction(STEP_START);
transitionTimingFunction.STEP_END = transitionTimingFunction(STEP_END);
transitionTimingFunction.cubicBezier = (...values) => transitionTimingFunction(cubicBezier(...values));
transitionTimingFunction.steps = (...values) => transitionTimingFunction(steps(...values));
transitionTimingFunction.frames = (...values) => transitionTimingFunction(frames(...values));
