import { Injectable, inject } from '@angular/core';
import { Spot } from '../types/schedule';
import { TimeService } from './time.service';

export interface CardLayout {
  spot: Spot;
  index: number;
  top: number;
  height: number;
  zIndex: number;
  level: number;
}

@Injectable()
export class CollisionService {
  private readonly timeService = inject(TimeService);

  public calculateCardLayouts(spots: Spot[]): CardLayout[] {
    if (spots.length === 0) return [];

    const sorted = spots.sort((a, b) =>
      a.startTime - b.endTime
    );

    const groups = this.findOverlappingGroups(sorted);

    const layouts: CardLayout[] = [];

    groups.forEach(group => {
      const groupLayouts = this.calculateOverlappingLayout(group);
      layouts.push(...groupLayouts);
    });

    return layouts;
  }

  private findOverlappingGroups(spots: Spot[]): Spot[][] {
    const groups: Spot[][] = [];

    for (const spot of spots) {
      let addedToGroup = false;

      for (const group of groups) {
        if (this.overlapsWithAny(spot, group)) {
          group.push(spot);
          addedToGroup = true;
          break;
        }
      }

      if (!addedToGroup) {
        groups.push([spot]);
      }
    }

    return this.mergeTransitiveGroups(groups);
  }

  private overlapsWithAny(spot: Spot, spotsGroup: Spot[]): boolean {
    return spotsGroup.some(t => this.trainingsOverlap(spot, t));
  }

  private trainingsOverlap(a: Spot, b: Spot): boolean {
    return a.startTime < b.endTime && b.startTime < a.endTime;
  }

  private mergeTransitiveGroups(spotsGroups: Spot[][]): Spot[][] {
    let merged = true;
    const result = [...spotsGroups];

    while (merged) {
      merged = false;

      for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
          if (this.groupsOverlap(result[i], result[j])) {
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

  private groupsOverlap(group1: Spot[], group2: Spot[]): boolean {
    return group1.some(t1 => group2.some(t2 => this.trainingsOverlap(t1, t2)));
  }

  private calculateOverlappingLayout(spots: Spot[]): CardLayout[] {
    const sorted = [...spots].sort((a, b) => a.startTime - b.startTime);
    const columns: Spot[][] = [];

    sorted.forEach(training => {
      let placed = false;

      for (let col = 0; col < columns.length; col++) {
        if (!columns[col].some(t => this.trainingsOverlap(t, training))) {
          columns[col].push(training);
          placed = true;
          break;
        }
      }

      if (!placed) {
        columns.push([training]);
      }
    });

    const count = columns.length;
    const layouts: CardLayout[] = [];

    columns.forEach((colSpots, colIndex) => {
      colSpots.forEach(spot => {
        layouts.push({
          spot,
          level: count,
          index: colIndex,
          top: this.timeService.getSlotIndex(spot.startTime),
          height: this.timeService.getNormalizedDuration(spot.startTime, spot.endTime),
          zIndex: colIndex + 1
        });
      })
    });

    return layouts;
  }
} 