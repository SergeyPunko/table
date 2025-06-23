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

export interface Coach {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
}

export interface Hall {
  id: string;
  name: string;
}

export interface HallZone {
  id: string;
  name: string;
}

export interface Spot {
  trainingId: string;
  trainingName: string;
  startTime: number;
  endTime: number;
  capacity: number;
  registrationsCount: number;
  hall: Hall;
  hallZones: HallZone[];
  coaches: Coach[];
}

export interface DaySchedule {
  date: number;
  dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  spots: Spot[];
}

export interface TrainingSchedule {
  days: DaySchedule[];
}