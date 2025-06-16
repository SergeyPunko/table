import { Training } from '../types/schedule';

export const mockTrainings: Training[] = [
  {
    id: '1',
    name: 'Сквош',
    startTime: '09:00',
    endTime: '10:00',
    day: 0, // Monday
    trainer: 'Петр Холодков',
    location: 'Зал №1',
    maxCapacity: 12,
    currentOccupancy: 6,
    service: 'Групповые занятия',
    sportType: 'Сквош',
    color: '210, 50%, 65%' // Blue-ish
  },
  {
    id: '2',
    name: 'Тренажерный зал',
    startTime: '10:30',
    endTime: '12:30',
    day: 1, // Tuesday
    trainer: 'Елена Шарова',
    location: 'Тренажерный зал',
    maxCapacity: 25,
    currentOccupancy: 13,
    service: 'Групповые занятия',
    sportType: 'Силовые тренировки',
    color: '350, 60%, 65%' // Red-ish
  },
  {
    id: '3',
    name: 'Посещение бассейна',
    startTime: '10:00',
    endTime: '11:30',
    day: 2, // Wednesday
    trainer: 'Дмитрий Савин',
    location: 'Бассейн',
    maxCapacity: 25,
    currentOccupancy: 21,
    service: 'Водные процедуры',
    sportType: 'Плавание',
    color: '200, 55%, 70%' // Light blue
  },
  {
    id: '4',
    name: 'Теннис',
    startTime: '11:00',
    endTime: '12:30',
    day: 3, // Thursday
    trainer: 'Василий Травницкий',
    location: 'Теннисный корт',
    maxCapacity: 8,
    currentOccupancy: 4,
    service: 'Групповые занятия',
    sportType: 'Теннис',
    color: '120, 50%, 65%' // Green
  },
  {
    id: '5',
    name: 'Тренажерный зал',
    startTime: '11:30',
    endTime: '13:30',
    day: 3, // Thursday
    trainer: '',
    location: 'Тренажерный зал',
    maxCapacity: 25,
    currentOccupancy: 8,
    service: 'Групповые занятия',
    sportType: 'Силовые тренировки',
    color: '350, 60%, 65%' // Red-ish
  },
  {
    id: '6',
    name: 'Теннис',
    startTime: '12:00',
    endTime: '12:10',
    day: 4, // Friday
    trainer: 'Василий Травницкий',
    location: 'Теннисный корт',
    maxCapacity: 12,
    currentOccupancy: 6,
    service: 'Групповые занятия',
    sportType: 'Теннис',
    color: '120, 50%, 65%' // Green
  },
  {
    id: '7',
    name: 'Посещение бассейна',
    startTime: '13:00',
    endTime: '14:00',
    day: 3, // Thursday
    trainer: 'Дмитрий Савин',
    location: 'Бассейн',
    maxCapacity: 12,
    currentOccupancy: 6,
    service: 'Водные процедуры',
    sportType: 'Плавание',
    color: '200, 55%, 70%' // Light blue
  },
  {
    id: '8',
    name: 'Йога',
    startTime: '12:30',
    endTime: '13:30',
    day: 1, // Tuesday
    trainer: 'Анастасия Гес',
    location: 'Зал №1',
    maxCapacity: 12,
    currentOccupancy: 4,
    service: 'Групповые занятия',
    sportType: 'Йога',
    color: '280, 55%, 70%' // Purple
  },
  {
    id: '9',
    name: 'Посещение бассейна',
    startTime: '12:30',
    endTime: '13:30',
    day: 1, // Tuesday
    trainer: 'Дмитрий Савин',
    location: 'Бассейн',
    maxCapacity: 12,
    currentOccupancy: 9,
    service: 'Водные процедуры',
    sportType: 'Плавание',
    color: '200, 55%, 70%' // Light blue
  },
  {
    id: '10',
    name: 'Теннис',
    startTime: '10:30',
    endTime: '10:45',
    day: 5, // Saturday
    trainer: '',
    location: 'Теннисный корт',
    maxCapacity: 12,
    currentOccupancy: 6,
    service: 'Групповые занятия',
    sportType: 'Теннис',
    color: '120, 50%, 65%' // Green
  },
  {
    id: '11',
    name: 'Теннис',
    startTime: '11:00',
    endTime: '11:30',
    day: 5, // Saturday
    trainer: 'Василий Травницкий',
    location: 'Теннисный корт',
    maxCapacity: 12,
    currentOccupancy: 6,
    service: 'Групповые занятия',
    sportType: 'Теннис',
    color: '120, 50%, 65%' // Green
  }
];

export const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const dayNamesFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export const services = ['Групповые занятия', 'Персональные тренировки', 'Консультации', 'Водные процедуры'];
export const sportTypes = ['Сквош', 'Силовые тренировки', 'Плавание', 'Теннис', 'Йога', 'Кроссфит', 'Фитнес', 'Пилатес', 'Бокс', 'Стретчинг', 'Консультация', 'Аквааэробика', 'Танцы'];
export const trainers = ['Петр Холодков', 'Елена Шарова', 'Дмитрий Савин', 'Василий Травницкий', 'Анастасия Гес', 'Анна Петрова', 'Игорь Смирнов', 'Мария Иванова', 'Елена Козлова', 'Алексей Волков'];
export const locations = ['Зал №1', 'Зал №2', 'Зал №3', 'Тренажерный зал', 'Кабинет №2', 'Бассейн', 'Танцевальный зал', 'Теннисный корт'];