import { Component, input, output, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spot } from '../../types/schedule';
import { generateHslColor, getColorVariants, getOccupancyColorClass } from '../../utils/color-utils';
import { MINUTES_IN_HOUR } from '@taiga-ui/cdk/date-time';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule, TuiBadge, TuiButton],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingCardComponent {
  training = input.required<Spot>();
  edit = output<Spot>();
  viewClients = output<Spot>();

  private timeService = inject(TimeService);

  get durationInMinutes(): number {
    return (this.training().endTime - this.training().startTime) / (MINUTES_IN_HOUR * 1000);
  }

  get colors() {
    return getColorVariants(generateHslColor(this.training().trainingId));
  }

  get occupancyColorClass(): string {
    return getOccupancyColorClass(this.training().registrationsCount, this.training().capacity);
  }

  get hasStarted(): boolean {
    return this.timeService.hasStarted(this.training().startTime)
  }

  onEdit(event: Event) {
    event.stopPropagation();
    this.edit.emit(this.training());
  }

  onViewClients() {
    this.viewClients.emit(this.training());
  }
}