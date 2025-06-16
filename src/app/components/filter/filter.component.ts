import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

interface Option {
  value: string;
  label: string;
}


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Input() items: { label: string, value: string }[] = [];
  @Input() label: string = '';
  @Input() value: string | number | undefined;
  @Output() valueChange = new EventEmitter<string>();

  isOpen = false;

  constructor(private eRef: ElementRef) { }

  selectItem(item: Option) {
    this.value = item.value;
    this.isOpen = false;
    this.valueChange.emit(item.value);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}