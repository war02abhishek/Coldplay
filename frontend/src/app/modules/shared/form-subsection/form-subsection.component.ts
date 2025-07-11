import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-subsection',
  standalone: false,
  templateUrl: './form-subsection.component.html',
  styleUrl: './form-subsection.component.css',
})
export class FormSubsectionComponent {
  @Input() title: string = '';
}
