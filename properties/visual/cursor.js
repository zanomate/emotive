import { property } from '../../utils';
import {
    ALIAS, ALL_SCROLL, AUTO, CELL, COL_RESIZE, CONTEXT_MENU, COPY, CROSSHAIR, DEFAULT, E_RESIZE, EW_RESIZE, GRAB,
    GRABBING, HELP, MOVE, N_RESIZE, NE_RESIZE, NESW_RESIZE, NO_DROP, NONE, NOT_ALLOWED, NS_RESIZE, NW_RESIZE,
    NWSE_RESIZE, POINTER, PROGRESS, ROW_RESIZE, S_RESIZE, SE_RESIZE, SW_RESIZE, TEXT, VERTICAL_TEXT, W_RESIZE, WAIT,
    ZOOM_IN, ZOOM_OUT
} from '../../constants';

export const cursor = property('cursor');
cursor.AUTO = cursor(AUTO);
cursor.DEFAULT = cursor(DEFAULT);
cursor.NONE = cursor(NONE);
cursor.CONTEXT_MENU = cursor(CONTEXT_MENU);
cursor.HELP = cursor(HELP);
cursor.POINTER = cursor(POINTER);
cursor.PROGRESS = cursor(PROGRESS);
cursor.WAIT = cursor(WAIT);
cursor.CELL = cursor(CELL);
cursor.CROSSHAIR = cursor(CROSSHAIR);
cursor.TEXT = cursor(TEXT);
cursor.VERTICAL_TEXT = cursor(VERTICAL_TEXT);
cursor.ALIAS = cursor(ALIAS);
cursor.COPY = cursor(COPY);
cursor.MOVE = cursor(MOVE);
cursor.NO_DROP = cursor(NO_DROP);
cursor.NOT_ALLOWED = cursor(NOT_ALLOWED);
cursor.GRAB = cursor(GRAB);
cursor.GRABBING = cursor(GRABBING);
cursor.ALL_SCROLL = cursor(ALL_SCROLL);
cursor.COL_RESIZE = cursor(COL_RESIZE);
cursor.ROW_RESIZE = cursor(ROW_RESIZE);
cursor.N_RESIZE = cursor(N_RESIZE);
cursor.E_RESIZE = cursor(E_RESIZE);
cursor.S_RESIZE = cursor(S_RESIZE);
cursor.W_RESIZE = cursor(W_RESIZE);
cursor.NE_RESIZE = cursor(NE_RESIZE);
cursor.NW_RESIZE = cursor(NW_RESIZE);
cursor.SE_RESIZE = cursor(SE_RESIZE);
cursor.SW_RESIZE = cursor(SW_RESIZE);
cursor.EW_RESIZE = cursor(EW_RESIZE);
cursor.NS_RESIZE = cursor(NS_RESIZE);
cursor.NESW_RESIZE = cursor(NESW_RESIZE);
cursor.NWSE_RESIZE = cursor(NWSE_RESIZE);
cursor.ZOOM_IN = cursor(ZOOM_IN);
cursor.ZOOM_OUT = cursor(ZOOM_OUT);
