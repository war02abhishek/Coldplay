import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-toggle-button',
  standalone: false,
  templateUrl: './password-toggle-button.component.html',
  styleUrl: './password-toggle-button.component.css',
})
export class PasswordToggleButtonComponent {
  @Input() visible = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle(): void {
    this.toggle.emit();
  }
}
