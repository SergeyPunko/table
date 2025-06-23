import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleGridComponent } from './components/schedule-grid/schedule-grid.component';
import { TrainingSchedule } from './types/schedule';
import { mockTrainingSchedule } from './data/mock-data';
import { TimeService } from "./services/time.service";
import { SCROLL_BEFORE_HOURS, TIME_SLOT_MINUTES, WORKING_HOURS_END, WORKING_HOURS_START } from "./utils/constants";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ScheduleGridComponent,
    TuiRoot,
  ],
  providers: [
    { provide: TIME_SLOT_MINUTES, useValue: 30 },
    { provide: WORKING_HOURS_START, useValue: 0 },
    { provide: WORKING_HOURS_END, useValue: 23 },
    { provide: SCROLL_BEFORE_HOURS, useValue: 1.5 },
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  mockTrainingSchedule: TrainingSchedule = mockTrainingSchedule;
}