import { Injectable, inject } from '@angular/core';
import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_MINUTE, MINUTES_IN_HOUR } from "@taiga-ui/cdk/date-time";
import { SCROLL_BEFORE_HOURS, TIME_SLOT_MINUTES, WORKING_HOURS_END, WORKING_HOURS_START } from '../utils/constants';

@Injectable()
export class TimeService {
  private readonly timeSlotMinutes = inject(TIME_SLOT_MINUTES);
  private readonly workingHoursStart = inject(WORKING_HOURS_START);
  private readonly workingHoursEnd = inject(WORKING_HOURS_END);
  private readonly scrollBeforeHours = inject(SCROLL_BEFORE_HOURS);

  generateTimeSlots(): { hour: number; minute: number; label: string }[] {
    const slots = [];
    for (let hour = this.workingHoursStart; hour <= this.workingHoursEnd; hour++) {
      for (let minute = 0; minute < 60; minute += this.timeSlotMinutes) {
        slots.push({
          hour,
          minute,
          label: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        });
      }
    }
    return slots;
  }

  getCurrentTimePosition(): number {
    const now = new Date();
    const currentMinutes = now.getHours() * MINUTES_IN_HOUR + now.getMinutes();
    const startMinutes = this.workingHoursStart * MINUTES_IN_HOUR;
    return Math.max(0, (currentMinutes - startMinutes) / this.timeSlotMinutes);
  }

  getAutoScrollPosition(): number {
    const now = new Date();
    const currentHour = now.getHours();
    const targetHour = Math.max(this.workingHoursStart, currentHour - this.scrollBeforeHours);
    return Math.max(0, (targetHour - this.workingHoursStart) * (60 / this.timeSlotMinutes));
  }

  getNormalizedDuration(startTime: number, endTime: number): number {
    const duration = (endTime - startTime) / MILLISECONDS_IN_MINUTE / this.timeSlotMinutes;
    return duration;
  }

  getSlotIndex(time: number): number {
    const minutes = new Date(time).getHours() * MINUTES_IN_HOUR + new Date(time).getMinutes();
    const startMinutes = this.workingHoursStart * MINUTES_IN_HOUR;
    return Math.floor((minutes - startMinutes) / this.timeSlotMinutes);
  }

  hasStarted(startTime: number): boolean {
    const now = new Date();
    const currentTime = now.getTime();
    const trainingStartTime = new Date(startTime).getTime();
    return this.timeToDayMinutes(currentTime) >= this.timeToDayMinutes(trainingStartTime);
  }

  timeToDayMinutes(time: number): number {
    return (time % MILLISECONDS_IN_DAY) / 1000;
  }
} 