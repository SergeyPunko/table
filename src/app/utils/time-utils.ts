export const TIME_SLOT_MINUTES = 30; // 30 minutes per slot
export const WORKING_HOURS_START = 0; // 0:00 AM
export const WORKING_HOURS_END = 23; // 11:00 PM

export function generateTimeSlots(): { hour: number; minute: number; label: string }[] {
  const slots = [];

  for (let hour = WORKING_HOURS_START; hour <= WORKING_HOURS_END; hour++) {
    for (let minute = 0; minute < 60; minute += TIME_SLOT_MINUTES) {
      slots.push({
        hour,
        minute,
        label: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      });
    }
  }

  return slots;
}

export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

export function getCurrentTimePosition(): number {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = WORKING_HOURS_START * 60;
  return Math.max(0, (currentMinutes - startMinutes) / TIME_SLOT_MINUTES);
}

export function getAutoScrollPosition(): number {
  const now = new Date();
  const currentHour = now.getHours();
  const targetHour = Math.max(WORKING_HOURS_START, currentHour - 1.5);
  return Math.max(0, (targetHour - WORKING_HOURS_START) * 2); // 2 slots per hour (30min each)
}

export function getDuration(startTime: string, endTime: string): number {
  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);

  return Math.max(40, (end - start) * 2 - 5);
}

export function getSlotIndex(time: string): number {
  const minutes = timeToMinutes(time);
  const startMinutes = WORKING_HOURS_START * 60;
  return Math.floor((minutes - startMinutes) / TIME_SLOT_MINUTES);
}