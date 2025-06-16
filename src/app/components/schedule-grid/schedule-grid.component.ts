import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training, FilterState } from '../../types/schedule';
import { generateTimeSlots, getCurrentTimePosition, getAutoScrollPosition } from '../../utils/time-utils';
import { calculateCardLayouts } from '../../utils/collision-utils';
import { TrainingCardComponent } from '../training-card/training-card.component';
import { CurrentTimeLineComponent } from '../current-time-line/current-time-line.component';

@Component({
  selector: 'app-schedule-grid',
  standalone: true,
  imports: [CommonModule, TrainingCardComponent, CurrentTimeLineComponent],
  templateUrl: './schedule-grid.component.html'
})
export class ScheduleGridComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() trainings: Training[] = [];
  @Input() filters: FilterState = {};
  @Output() editTraining = new EventEmitter<Training>();
  @Output() viewClients = new EventEmitter<Training>();

  @ViewChild('gridContainer') gridContainer!: ElementRef<HTMLDivElement>;

  timeSlots = generateTimeSlots();
  currentTimePosition = getCurrentTimePosition();
  weekDates: Date[] = [];
  dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  allLayouts: { [day: number]: ReturnType<typeof calculateCardLayouts> } = {};

  private timeInterval?: number;

  ngOnInit() {
    this.weekDates = this.getCurrentWeekDates();
    this.updateLayouts();

    // Update current time position every minute
    this.timeInterval = window.setInterval(() => {
      this.currentTimePosition = getCurrentTimePosition();
    }, 60000);
  }

  ngAfterViewInit() {
    // Auto-scroll to current time
    if (this.gridContainer) {
      const scrollPosition = getAutoScrollPosition() * 60; // 60px per 30min slot
      this.gridContainer.nativeElement.scrollTop = scrollPosition;
    }
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private getCurrentWeekDates(): Date[] {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      dates.push(date);
    }
    return dates;
  }

  private updateLayouts() {
    const filteredTrainings = this.getFilteredTrainings();

    for (let day = 0; day < 7; day++) {
      this.allLayouts[day] = calculateCardLayouts(filteredTrainings, day);
    }
  }

  private getFilteredTrainings(): Training[] {
    return this.trainings.filter(training => {
      if (this.filters.service && training.service !== this.filters.service) return false;
      if (this.filters.sportType && training.sportType !== this.filters.sportType) return false;
      if (this.filters.trainer && training.trainer !== this.filters.trainer) return false;
      if (this.filters.location && training.location !== this.filters.location) return false;
      if (this.filters.availableSpots) {
        const available = training.maxCapacity - training.currentOccupancy;
        if (available < this.filters.availableSpots) return false;
      }
      return true;
    });
  }

  onEditTraining(training: Training) {
    this.editTraining.emit(training);
  }

  onViewClients(training: Training) {
    this.viewClients.emit(training);
  }

  // Update layouts when inputs change
  ngOnChanges() {
    this.updateLayouts();
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