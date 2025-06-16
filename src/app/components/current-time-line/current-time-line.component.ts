import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-time-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-time-line.component.html'
})
export class CurrentTimeLineComponent {
  @Input() position: number = 0;

  get topPosition(): number {
    return this.position * 60; // 60px per 30min slot
  }

  get currentTime(): string {
    return new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}