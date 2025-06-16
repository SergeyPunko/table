import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Training } from '../../types/schedule';
import { getColorVariants } from '../../utils/color-utils';

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  registrationDate: string;
}

@Component({
  selector: 'app-clients-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './clients-modal.component.html',
})
export class ClientsModalComponent {
  @Input() training: Training | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  get colors() {
    return getColorVariants(this.training?.color || '220, 60%, 70%');
  }

  get availableSpots(): number {
    return this.training ? this.training.maxCapacity - this.training.currentOccupancy : 0;
  }

  get clients(): Client[] {
    if (!this.training) return [];
    return this.generateMockClients(this.training.currentOccupancy);
  }

  private generateMockClients(count: number): Client[] {
    const names = [
      'Алексей Петров', 'Мария Сидорова', 'Дмитрий Козлов', 'Анна Морозова',
      'Сергей Волков', 'Елена Новикова', 'Игорь Соколов', 'Ольга Лебедева',
      'Павел Орлов', 'Наталья Белова', 'Андрей Зайцев', 'Татьяна Попова'
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: `client-${i + 1}`,
      name: names[i % names.length],
      phone: `+7 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 90) + 10}`,
      email: `client${i + 1}@example.com`,
      registrationDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')
    }));
  }

  getClientInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  onClose() {
    this.close.emit();
  }
}