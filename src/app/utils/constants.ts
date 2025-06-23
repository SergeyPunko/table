import { InjectionToken } from "@angular/core";

export const SLOT_HEIGHT = 75;

export const TIME_SLOT_MINUTES = new InjectionToken<number>('TIME_SLOT_MINUTES');
export const WORKING_HOURS_START = new InjectionToken<number>('WORKING_HOURS_START');
export const WORKING_HOURS_END = new InjectionToken<number>('WORKING_HOURS_END');
export const SCROLL_BEFORE_HOURS = new InjectionToken<number>('SCROLL_BEFORE_HOURS');