import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiOptionNew, TuiSizeL, TuiSizeS } from '@taiga-ui/core';
import { TuiCheckbox, TuiChevron, TuiDataListWrapper, TuiSwitch, tuiItemsHandlersProvider } from '@taiga-ui/kit';
import { TuiMultiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
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
    console.log('Выбран элемент:', item);
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