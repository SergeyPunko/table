import { Training } from '../types/schedule';
import { timeToMinutes, getDuration, getSlotIndex } from './time-utils';

export interface CardLayout {
  training: Training;
  top: number;
  height: number;
  width: number;
  left: number;
  zIndex: number;
}

export function calculateCardLayouts(trainings: Training[], day: number): CardLayout[] {
  const dayTrainings = trainings.filter(t => t.day === day);

  if (dayTrainings.length === 0) return [];

  // Sort by start time
  const sorted = dayTrainings.sort((a, b) =>
    timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
  );

  // Group overlapping trainings
  const groups = findOverlappingGroups(sorted);

  // Calculate layouts for each group
  const layouts: CardLayout[] = [];

  groups.forEach(group => {
    const groupLayouts = calculateOverlappingLayout(group);
    layouts.push(...groupLayouts);
  });

  return layouts;
}

function findOverlappingGroups(trainings: Training[]): Training[][] {
  const groups: Training[][] = [];

  for (const training of trainings) {
    let addedToGroup = false;

    for (const group of groups) {
      if (overlapsWithAny(training, group)) {
        group.push(training);
        addedToGroup = true;
        break;
      }
    }

    if (!addedToGroup) {
      groups.push([training]);
    }
  }

  return mergeTransitiveGroups(groups);
}

function overlapsWithAny(training: Training, group: Training[]): boolean {
  return group.some(t => trainingsOverlap(training, t));
}

function trainingsOverlap(a: Training, b: Training): boolean {
  const aStart = timeToMinutes(a.startTime);
  const aEnd = timeToMinutes(a.endTime);
  const bStart = timeToMinutes(b.startTime);
  const bEnd = timeToMinutes(b.endTime);

  return aStart < bEnd && bStart < aEnd;
}

function mergeTransitiveGroups(groups: Training[][]): Training[][] {
  let merged = true;
  const result = [...groups];

  while (merged) {
    merged = false;

    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (groupsOverlap(result[i], result[j])) {
          result[i] = [...result[i], ...result[j]];
          result.splice(j, 1);
          merged = true;
          break;
        }
      }
      if (merged) break;
    }
  }

  return result;
}

function groupsOverlap(group1: Training[], group2: Training[]): boolean {
  return group1.some(t1 => group2.some(t2 => trainingsOverlap(t1, t2)));
}

function calculateOverlappingLayout(trainings: Training[]): CardLayout[] {
  // Сортируем по началу, чтобы позже было проще назначать уровни
  const sorted = [...trainings].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  const columns: Training[][] = [];

  // Распределяем тренировки по "уровням" (колонкам), избегая перекрытий
  sorted.forEach(training => {
    let placed = false;

    for (let col = 0; col < columns.length; col++) {
      if (!columns[col].some(t => trainingsOverlap(t, training))) {
        columns[col].push(training);
        placed = true;
        break;
      }
    }

    if (!placed) {
      columns.push([training]);
    }
  });

  const baseWidth = 230;
  const minCardWidth = 80;
  let cardWidth = baseWidth;
  let offsetBetween = 0;
  const count = columns.length;
  const layouts: CardLayout[] = [];


  if (count === 2) {
    cardWidth = 140;
    offsetBetween = 92;
  } else if (count === 3) {
    offsetBetween = 46;
    cardWidth = Math.max(minCardWidth, baseWidth - offsetBetween * 2);
  } else if (count === 4) {
    offsetBetween = 30;
    cardWidth = Math.max(minCardWidth, baseWidth - offsetBetween * 3);
  } else if (count >= 5) {
    offsetBetween = Math.floor(120 / (count - 1)); // как описано
    cardWidth = Math.max(minCardWidth, baseWidth - offsetBetween * (count - 1));
  }

  columns.forEach((colTrainings, colIndex) => {
    colTrainings.forEach(training => {
      const left = colIndex * offsetBetween || 2;

      layouts.push({
        training,
        top: getSlotIndex(training.startTime) * 60 + 2, // 60px per 30min
        height: getDuration(training.startTime, training.endTime),
        width: count === 1 ? baseWidth : cardWidth,
        left: left,
        zIndex: colIndex + 1
      });
    })
  });

  return layouts;
}
