import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, computed, input, output, viewChild, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaySchedule, FilterState, Spot } from '../../types/schedule';
import { TrainingCardComponent } from '../training-card/training-card.component';
import { CurrentTimeLineComponent } from '../current-time-line/current-time-line.component';
import { CollisionService } from '../../services/collision.service';
import { TimeService } from '../../services/time.service';
import { SLOT_HEIGHT } from '../../utils/constants';

@Component({
  selector: 'app-schedule-grid',
  standalone: true,
  imports: [CommonModule, TrainingCardComponent, CurrentTimeLineComponent],
  styleUrl: './schedule-grid.component.scss',
  templateUrl: './schedule-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CollisionService,
    TimeService,
  ]
})
export class ScheduleGridComponent implements OnDestroy {
  days = input.required<DaySchedule[]>();
  filters = input<FilterState>();
  editTraining = output<Spot>();
  viewClients = output<Spot>();

  slotHeight = SLOT_HEIGHT;

  gridContainer = viewChild.required<ElementRef<HTMLDivElement>>('gridContainer');
  private collisionService = inject(CollisionService);
  private timeService = inject(TimeService);

  timeSlots = this.timeService.generateTimeSlots();
  currentTimePosition = signal(this.timeService.getCurrentTimePosition());
  allLayouts = computed(() => {
    const days = this.days();
    if (days) {
      return this.days().map(day => this.collisionService.calculateCardLayouts(day.spots));
    }

    return []
  })

  private timeInterval?: number;

  constructor() {
    this.timeInterval = window.setInterval(() => {
      this.currentTimePosition.set(this.timeService.getCurrentTimePosition());
    }, 60000);

    effect(() => {
      const gridContainer = this.gridContainer();
      if (gridContainer) {
        const scrollPosition = this.timeService.getAutoScrollPosition() * SLOT_HEIGHT;
        gridContainer.nativeElement.scrollTop = scrollPosition;
      }
    });
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  onEditTraining(training: Spot) {
    this.editTraining.emit(training);
  }

  onViewClients(spot: Spot) {
    this.viewClients.emit(spot);
  }

  onScrollSync(event: Event, xTarget?: HTMLElement, yTarget?: HTMLElement) {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;
    const scrollTop = (event.target as HTMLElement).scrollTop;

    if (xTarget) {
      xTarget.scrollLeft = scrollLeft;
    }
    if (yTarget) {
      yTarget.scrollTop = scrollTop;
    }
  }
}