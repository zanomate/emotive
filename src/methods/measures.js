import { measure } from '../utils';
import {
    CAP, CH, CM, DEG, DPCM, DPI, DPPX, EM, EX, FR, GRAD, HZ, IC, IN, KHZ, LH,
    MM, MS, PC, PERCENTAGE, PT, PX, Q, RAD, REM, RLH, S, TURN, VB, VH, VI, VMAX,
    VMIN, VW
} from '../constants';
import { method } from 'utils';

/* Angle */
export const deg = measure(DEG);
export const grad = measure(GRAD);
export const rad = measure(RAD);
export const turn = measure(TURN);

/* Flex */
export const fr = measure(FR);

/* Frequency */
export const Hz = measure(HZ);
export const kHz = measure(KHZ);

/* Length */
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
export const x = measure(PERCENTAGE);

/* Resolution */
export const dpi = measure(DPI);
export const dpcm = measure(DPCM);
export const dppx = measure(DPPX);

/* Time */
export const s = measure(S);
export const ms = measure(MS);

export const Measures = {
    deg, grad, rad, turn, fr, Hz, kHz, cap, ch, em, ex, ic, lh, rem, rlh, vh,
    vw, vi, vb, vmin, vmax, px, cm, mm, quart, inch, pc, pt, percent, x, dpi,
    dpcm, dppx, s, ms
};
