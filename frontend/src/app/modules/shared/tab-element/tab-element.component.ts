import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-element',
  standalone: false,
  templateUrl: './tab-element.component.html',
  styleUrl: './tab-element.component.css',
})
export class TabElementComponent {
  @Input() title!: string;
  active = false;
}
