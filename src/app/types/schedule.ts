export interface Training {
  id: string;
  name: string;
  startTime: string; // HH:MM format
  endTime: string;
  day: number; // 0-6 (Monday-Sunday)
  trainer?: string;
  location?: string;
  maxCapacity: number;
  currentOccupancy: number;
  service: string;
  sportType: string;
  color?: string;
}

export interface TimeSlot {
  hour: number;
  minute: number;
  label: string;
}

export interface FilterState {
  date?: string;
  service?: string;
  sportType?: string;
  trainer?: string;
  duration?: number;
  availableSpots?: number;
  location?: string;
}

export interface CardPosition {
  top: number;
  height: number;
  width: number;
  left: number;
  zIndex: number;
}