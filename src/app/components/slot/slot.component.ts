import { ChangeDetectionStrategy, Component, input, Input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-slot',
  standalone: true,
  imports: [CommonModule, TuiButton],
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class SlotComponent {
  createTraining = output();

  showButton = signal(false);

  onMouseEnter() {
    this.showButton.set(true);
  }

  onMouseLeave() {
    this.showButton.set(false);
  }
}