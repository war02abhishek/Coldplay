import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css',
})
export class GenericTableComponent {
  @Input() columns: { title: string; key: string }[] = [];
  @Input() data: any[] = [];
  @Input() itemsPerPage: number = 15;

  currentPage = 1;

  handleClick(action: { label: string; onClick: () => void }) {
    if (action?.onClick) action.onClick();
  }
}
