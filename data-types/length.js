import { measure } from '../utils';
import {
    CAP, CH, CM, EM, EX, IC, IN, LH, MM, PC, PERCENTAGE, PT, PX, Q, REM, RLH, VB, VH, VI, VMAX, VMIN, VW
} from '../constants';

// Units
export const cap = measure(CAP);
export const ch = measure(CH);
export const em = measure(EM);
export const ex = measure(EX);
export const ic = measure(IC);
export const lh = measure(LH);
export const rem = measure(REM);
export const rlh = measure(RLH);
export const vh = measure(VH);
export const vw = measure(VW);
export const vi = measure(VI);
export const vb = measure(VB);
export const vmin = measure(VMIN);
export const vmax = measure(VMAX);
export const px = measure(PX);
export const cm = measure(CM);
export const mm = measure(MM);
export const quart = measure(Q);
export const inch = measure(IN);
export const pc = measure(PC);
export const pt = measure(PT);

export const percent = measure(PERCENTAGE);
export const X = percent;
