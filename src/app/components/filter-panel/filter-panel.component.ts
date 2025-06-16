import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FilterState } from '../../types/schedule';
import { services, sportTypes, trainers, locations } from '../../data/mock-data';
import { FilterComponent } from '../filter/filter.component';
import { TuiButton } from '@taiga-ui/core';

interface Status {
  name: string;
}

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    FilterComponent,
  ],
  templateUrl: './filter-panel.component.html'
})
export class FilterPanelComponent {
  @Input() filters: FilterState = {};
  @Output() filtersChange = new EventEmitter<FilterState>();
  @Output() addTraining = new EventEmitter<void>();

  get filterOptions() {
    return [
      {
        label: 'Дата',
        value: this.filters.date || '',
        options: [
          { value: '', label: 'Все даты' },
          { value: 'today', label: 'Сегодня' },
          { value: 'tomorrow', label: 'Завтра' },
          { value: 'week', label: 'Эта неделя' }
        ],
        onChange: (value: string) => {
          console.log('onChange', value);
          this.updateFilter('date', value)
        }
      },
      {
        label: 'Услуга',
        value: this.filters.service || '',
        options: [
          { value: '', label: 'Все услуги' },
          ...services.map(service => ({ value: service, label: service }))
        ],
        onChange: (value: string) => this.updateFilter('service', value)
      },
      {
        label: 'Вид спорта',
        value: this.filters.sportType || '',
        options: [
          { value: '', label: 'Все виды спорта' },
          ...sportTypes.map(type => ({ value: type, label: type }))
        ],
        onChange: (value: string) => this.updateFilter('sportType', value)
      },
      {
        label: 'Тренер',
        value: this.filters.trainer || '',
        options: [
          { value: '', label: 'Все тренеры' },
          ...trainers.map(trainer => ({ value: trainer, label: trainer }))
        ],
        onChange: (value: string) => this.updateFilter('trainer', value)
      },
      {
        label: 'Длительность',
        value: this.filters.duration?.toString() || '',
        options: [
          { value: '', label: 'Любая' },
          { value: '30', label: '30 мин' },
          { value: '60', label: '1 час' },
          { value: '90', label: '1.5 часа' },
          { value: '120', label: '2 часа' }
        ],
        onChange: (value: string) => this.updateFilter('duration', value ? parseInt(value) : undefined)
      },
      {
        label: 'Свободных мест',
        value: this.filters.availableSpots?.toString() || '',
        options: [
          { value: '', label: 'Любое количество' },
          { value: '1', label: 'От 1' },
          { value: '3', label: 'От 3' },
          { value: '5', label: 'От 5' },
          { value: '10', label: 'От 10' }
        ],
        onChange: (value: string) => this.updateFilter('availableSpots', value ? parseInt(value) : undefined)
      },
      {
        label: 'Место проведения',
        value: this.filters.location || '',
        options: [
          { value: '', label: 'Все места' },
          ...locations.map(location => ({ value: location, label: location }))
        ],
        onChange: (value: string) => this.updateFilter('location', value)
      }
    ];
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  private updateFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    this.filtersChange.emit({ ...this.filters, [key]: value });
    console.log('updateFilter', key, value);
    this.cdr.detectChanges();
  }

  trackByFn(index: number, item: any): string {
    return item.label;
  }
}