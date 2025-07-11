import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-section',
  standalone: false,
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.css',
})
export class FormSectionComponent {
  @Input() title: string = '';
  @Input() isSectionOpen: boolean = true;
  @Output() isSectionOpenChange = new EventEmitter<boolean>();

  toggleOpen() {
    this.isSectionOpen = !this.isSectionOpen;
    this.isSectionOpenChange.emit(this.isSectionOpen);
  }
}
