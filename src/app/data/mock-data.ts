import { TrainingSchedule } from '../types/schedule';

export const mockTrainingSchedule: TrainingSchedule = {
  days: [
    {
      date: 1750032000000,
      dayOfWeek: 'monday',
      spots: [
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          trainingName: 'Сквош',
          startTime: 1750064400000,
          endTime: 1750068000000,
          capacity: 12,
          registrationsCount: 6,
          hall: { id: 'hall-Зал №1', name: 'Зал №1' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Петр Холодков',
              firstName: 'Петр',
              middleName: '',
              lastName: 'Холодков',
              fullName: 'Петр Холодков'
            }
          ]
        }
      ]
    },
    {
      date: 1750118400000,
      dayOfWeek: 'tuesday',
      spots: [
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f888888',
          trainingName: 'Тренажерный зал',
          startTime: 1750156200000,
          endTime: 1750163400000,
          capacity: 25,
          registrationsCount: 13,
          hall: { id: 'hall-Тренажерный зал', name: 'Тренажерный зал' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Елена Шарова',
              firstName: 'Елена',
              middleName: '',
              lastName: 'Шарова',
              fullName: 'Елена Шарова'
            }
          ]
        },
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f148888',
          trainingName: 'Йога',
          startTime: 1750163400000,
          endTime: 1750167000000,
          capacity: 12,
          registrationsCount: 4,
          hall: { id: 'hall-Зал №1', name: 'Зал №1' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Анастасия Гес',
              firstName: 'Анастасия',
              middleName: '',
              lastName: 'Гес',
              fullName: 'Анастасия Гес'
            }
          ]
        },
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f643888',
          trainingName: 'Посещение бассейна',
          startTime: 1750163400000,
          endTime: 1750167000000,
          capacity: 12,
          registrationsCount: 9,
          hall: { id: 'hall-Бассейн', name: 'Бассейн' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Дмитрий Савин',
              firstName: 'Дмитрий',
              middleName: '',
              lastName: 'Савин',
              fullName: 'Дмитрий Савин'
            }
          ]
        }
      ]
    },
    {
      date: 1750204800000,
      dayOfWeek: 'wednesday',
      spots: [
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f049488',
          trainingName: 'Посещение бассейна',
          startTime: 1750240800000,
          endTime: 1750246200000,
          capacity: 25,
          registrationsCount: 21,
          hall: { id: 'hall-Бассейн', name: 'Бассейн' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Дмитрий Савин',
              firstName: 'Дмитрий',
              middleName: '',
              lastName: 'Савин',
              fullName: 'Дмитрий Савин'
            }
          ]
        }
      ]
    },
    {
      date: 1750291200000,
      dayOfWeek: 'thursday',
      spots: [
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963ff49038',
          trainingName: 'Теннис',
          startTime: 1750330800000,
          endTime: 1750336200000,
          capacity: 8,
          registrationsCount: 4,
          hall: { id: 'hall-Теннисный корт', name: 'Теннисный корт' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Василий Травницкий',
              firstName: 'Василий',
              middleName: '',
              lastName: 'Травницкий',
              fullName: 'Василий Травницкий'
            }
          ]
        },
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f579098',
          trainingName: 'Тренажерный зал',
          startTime: 1750332600000,
          endTime: 1750339800000,
          capacity: 25,
          registrationsCount: 8,
          hall: { id: 'hall-Тренажерный зал', name: 'Тренажерный зал' },
          hallZones: [],
          coaches: []
        },
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963fc39018',
          trainingName: 'Посещение бассейна',
          startTime: 1750338000000,
          endTime: 1750341600000,
          capacity: 12,
          registrationsCount: 6,
          hall: { id: 'hall-Бассейн', name: 'Бассейн' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Дмитрий Савин',
              firstName: 'Дмитрий',
              middleName: '',
              lastName: 'Савин',
              fullName: 'Дмитрий Савин'
            }
          ]
        },
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963fc39018',
          trainingName: 'Посещение бассейна',
          startTime: 1750338000000,
          endTime: 1750341600000,
          capacity: 12,
          registrationsCount: 6,
          hall: { id: 'hall-Бассейн', name: 'Бассейн' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Дмитрий Савин',
              firstName: 'Дмитрий',
              middleName: '',
              lastName: 'Савин',
              fullName: 'Дмитрий Савин'
            }
          ]
        }
      ]
    },
    {
      date: 1750377600000,
      dayOfWeek: 'friday',
      spots: [
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f536518',
          trainingName: 'Теннис',
          startTime: 1750420800000,
          endTime: 1750421400000,
          capacity: 12,
          registrationsCount: 6,
          hall: { id: 'hall-Теннисный корт', name: 'Теннисный корт' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Василий Травницкий',
              firstName: 'Василий',
              middleName: '',
              lastName: 'Травницкий',
              fullName: 'Василий Травницкий'
            }
          ]
        }
      ]
    },
    {
      date: 1750464000000,
      dayOfWeek: 'saturday',
      spots: [
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f516510',
          trainingName: 'Теннис',
          startTime: 1750501800000,
          endTime: 1750502700000,
          capacity: 12,
          registrationsCount: 6,
          hall: { id: 'hall-Теннисный корт', name: 'Теннисный корт' },
          hallZones: [],
          coaches: []
        },
        {
          trainingId: '3fa85f64-5717-4562-b3fc-2c963f516511',
          trainingName: 'Теннис',
          startTime: 1750503600000,
          endTime: 1750505400000,
          capacity: 12,
          registrationsCount: 6,
          hall: { id: 'hall-Теннисный корт', name: 'Теннисный корт' },
          hallZones: [],
          coaches: [
            {
              id: 'coach-Василий Травницкий',
              firstName: 'Василий',
              middleName: '',
              lastName: 'Травницкий',
              fullName: 'Василий Травницкий'
            }
          ]
        }
      ]
    },
    {
      date: 1750550400000,
      dayOfWeek: 'sunday',
      spots: []
    }
  ]
};

export const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const dayNamesFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export const services = ['Групповые занятия', 'Персональные тренировки', 'Консультации', 'Водные процедуры'];
export const sportTypes = ['Сквош', 'Силовые тренировки', 'Плавание', 'Теннис', 'Йога', 'Кроссфит', 'Фитнес', 'Пилатес', 'Бокс', 'Стретчинг', 'Консультация', 'Аквааэробика', 'Танцы'];
export const trainers = ['Петр Холодков', 'Елена Шарова', 'Дмитрий Савин', 'Василий Травницкий', 'Анастасия Гес', 'Анна Петрова', 'Игорь Смирнов', 'Мария Иванова', 'Елена Козлова', 'Алексей Волков'];
export const locations = ['Зал №1', 'Зал №2', 'Зал №3', 'Тренажерный зал', 'Кабинет №2', 'Бассейн', 'Танцевальный зал', 'Теннисный корт'];