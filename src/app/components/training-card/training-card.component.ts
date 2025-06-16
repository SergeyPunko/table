import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Training } from '../../types/schedule';
import { getColorVariants, getOccupancyColor } from '../../utils/color-utils';
import { timeToMinutes } from '../../utils/time-utils';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './training-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingCardComponent {
  @Input() training!: Training;
  @Output() edit = new EventEmitter<Training>();
  @Output() viewClients = new EventEmitter<Training>();

  get durationInMinutes(): number {
    const start = timeToMinutes(this.training.startTime);
    const end = timeToMinutes(this.training.endTime);
    return end - start;
  }

  get colors() {
    return getColorVariants(this.training.color || '220, 60%, 70%');
  }

  get occupancyColor(): string {
    return getOccupancyColor(this.training.currentOccupancy, this.training.maxCapacity);
  }

  get hasStarted(): boolean {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [startHour, startMinute] = this.training.startTime.split(':').map(Number);
    const trainingStartTime = startHour * 60 + startMinute;
    return currentTime >= trainingStartTime;
  }

  getOccupancyBgColor(): string {
    const percentage = (this.training.currentOccupancy / this.training.maxCapacity) * 100;

    if (percentage < 50) return '#ef4444'; // red
    if (percentage < 75) return '#eab308'; // yellow
    return '#22c55e'; // green
  }

  onEdit(event: Event) {
    event.stopPropagation();
    this.edit.emit(this.training);
  }

  onViewClients() {
    this.viewClients.emit(this.training);
  }
}