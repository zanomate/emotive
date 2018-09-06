import { property } from '../../utils';
import {
    ALIAS, ALL_SCROLL, AUTO, CELL, COL_RESIZE, CONTEXT_MENU, COPY, CROSSHAIR,
    DEFAULT, E_RESIZE, EW_RESIZE, GRAB, GRABBING, HELP, MOVE, N_RESIZE,
    NE_RESIZE, NESW_RESIZE, NO_DROP, NONE, NOT_ALLOWED, NS_RESIZE, NW_RESIZE,
    NWSE_RESIZE, POINTER, PROGRESS, ROW_RESIZE, S_RESIZE, SE_RESIZE, SW_RESIZE,
    TEXT, VERTICAL_TEXT, W_RESIZE, WAIT, ZOOM_IN, ZOOM_OUT
} from '../../constants';

const Cursor = property('cursor');
Cursor.AUTO = Cursor(AUTO);
Cursor.DEFAULT = Cursor(DEFAULT);
Cursor.NONE = Cursor(NONE);
Cursor.CONTEXT_MENU = Cursor(CONTEXT_MENU);
Cursor.HELP = Cursor(HELP);
Cursor.POINTER = Cursor(POINTER);
Cursor.PROGRESS = Cursor(PROGRESS);
Cursor.WAIT = Cursor(WAIT);
Cursor.CELL = Cursor(CELL);
Cursor.CROSSHAIR = Cursor(CROSSHAIR);
Cursor.TEXT = Cursor(TEXT);
Cursor.VERTICAL_TEXT = Cursor(VERTICAL_TEXT);
Cursor.ALIAS = Cursor(ALIAS);
Cursor.COPY = Cursor(COPY);
Cursor.MOVE = Cursor(MOVE);
Cursor.NO_DROP = Cursor(NO_DROP);
Cursor.NOT_ALLOWED = Cursor(NOT_ALLOWED);
Cursor.GRAB = Cursor(GRAB);
Cursor.GRABBING = Cursor(GRABBING);
Cursor.ALL_SCROLL = Cursor(ALL_SCROLL);
Cursor.COL_RESIZE = Cursor(COL_RESIZE);
Cursor.ROW_RESIZE = Cursor(ROW_RESIZE);
Cursor.N_RESIZE = Cursor(N_RESIZE);
Cursor.E_RESIZE = Cursor(E_RESIZE);
Cursor.S_RESIZE = Cursor(S_RESIZE);
Cursor.W_RESIZE = Cursor(W_RESIZE);
Cursor.NE_RESIZE = Cursor(NE_RESIZE);
Cursor.NW_RESIZE = Cursor(NW_RESIZE);
Cursor.SE_RESIZE = Cursor(SE_RESIZE);
Cursor.SW_RESIZE = Cursor(SW_RESIZE);
Cursor.EW_RESIZE = Cursor(EW_RESIZE);
Cursor.NS_RESIZE = Cursor(NS_RESIZE);
Cursor.NESW_RESIZE = Cursor(NESW_RESIZE);
Cursor.NWSE_RESIZE = Cursor(NWSE_RESIZE);
Cursor.ZOOM_IN = Cursor(ZOOM_IN);
Cursor.ZOOM_OUT = Cursor(ZOOM_OUT);
export { Cursor };
