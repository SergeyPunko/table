import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-time-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-time-line.component.html',
  styleUrl: './current-time-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentTimeLineComponent {
  position = input(0);
}