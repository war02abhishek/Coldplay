import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-dropdown',
  standalone: false,
  templateUrl: './generic-dropdown.component.html',
  styleUrl: './generic-dropdown.component.css',
})
export class GenericDropdownComponent {
  @Input() title = '';
  @Input() items: { label: string; url?: string; action?: () => void }[] = [];
  isOpen = false;

  @ViewChild('dropdownWrapper') dropdownWrapper!: ElementRef;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onItemClick(item: any) {
    this.isOpen = false;
    if (item.url) this.router.navigateByUrl(item.url);
    else if (item.action) item.action();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (
      this.dropdownWrapper &&
      !this.dropdownWrapper.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }
}
