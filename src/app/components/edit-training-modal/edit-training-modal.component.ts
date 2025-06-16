import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, X, Clock, Users, MapPin, User } from 'lucide-angular';
import { Training } from '../../types/schedule';
import { services, sportTypes, trainers, locations } from '../../data/mock-data';

@Component({
  selector: 'app-edit-training-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './edit-training-modal.component.html'
})
export class EditTrainingModalComponent implements OnChanges {
  @Input() training: Training | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Training>();

  readonly xIcon = X;
  readonly clockIcon = Clock;
  readonly usersIcon = Users;
  readonly mapPinIcon = MapPin;
  readonly userIcon = User;

  services = services;
  sportTypes = sportTypes;
  trainers = trainers;
  locations = locations;

  formData: Training = this.getEmptyTraining();

  ngOnChanges() {
    if (this.training) {
      this.formData = { ...this.training };
    } else {
      this.formData = this.getEmptyTraining();
    }
  }

  private getEmptyTraining(): Training {
    return {
      id: '',
      name: '',
      startTime: '',
      endTime: '',
      day: 0,
      trainer: '',
      location: '',
      maxCapacity: 1,
      currentOccupancy: 0,
      service: '',
      sportType: '',
      color: ''
    };
  }

  onSubmit() {
    this.save.emit(this.formData);
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}