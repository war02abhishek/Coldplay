import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-auth-layout',
  standalone: false,
  templateUrl: './generic-auth-layout.component.html',
  styleUrl: './generic-auth-layout.component.css',
})
export class GenericAuthLayoutComponent {
  @Input() title: string = '';
}
