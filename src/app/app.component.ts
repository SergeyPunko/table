import { TuiRoot } from "@taiga-ui/core";
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ScheduleGridComponent } from './components/schedule-grid/schedule-grid.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { EditTrainingModalComponent } from './components/edit-training-modal/edit-training-modal.component';
import { ClientsModalComponent } from './components/clients-modal/clients-modal.component';
import { Training, FilterState } from './types/schedule';
import { mockTrainings } from './data/mock-data';
import { generateRandomHSL } from './utils/color-utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ScheduleGridComponent,
    FilterPanelComponent,
    EditTrainingModalComponent,
    ClientsModalComponent,
    TuiRoot,
    LucideAngularModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  trainings: Training[] = mockTrainings;
  filters: FilterState = {};
  editingTraining: Training | null = null;
  isEditModalOpen = false;
  viewingClientsTraining: Training | null = null;
  isClientsModalOpen = false;

  navigationTabs = [
    { name: 'Профиль', active: false },
    { name: 'Спорткомплексы', active: false },
    { name: 'Услуги', active: false },
    { name: 'Тренеры', active: false },
    { name: 'Расписание', active: true },
    { name: 'Клиенты', active: false }
  ];

  getTabClasses(active: boolean): string {
    return `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active
      ? 'bg-blue-100 text-blue-700'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`;
  }

  onFiltersChange(filters: FilterState) {
    this.filters = filters;
    console.log(this.filters);
  }

  handleEditTraining(training: Training) {
    this.editingTraining = training;
    this.isEditModalOpen = true;
  }

  handleAddTraining() {
    this.editingTraining = null;
    this.isEditModalOpen = true;
  }

  handleSaveTraining(training: Training) {
    if (training.id) {
      this.trainings = this.trainings.map(t => t.id === training.id ? training : t);
    } else {
      const newTraining = {
        ...training,
        id: Date.now().toString(),
        color: generateRandomHSL()
      };
      this.trainings = [...this.trainings, newTraining];
    }
  }

  handleViewClients(training: Training) {
    this.viewingClientsTraining = training;
    this.isClientsModalOpen = true;
  }
}