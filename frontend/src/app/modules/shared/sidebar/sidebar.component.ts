import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { StorageService } from '../../../services/storage.service';
import { Constants } from '../../../constants/constants';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translate3d(0, 0, 0)' })),
      state('out', style({ transform: 'translate3d(-100%, 0, 0)' })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  sidebarStatus: string = '';
  menuItems!: { title: string; link: string }[];

  constructor(
    private eRef: ElementRef,
    private sidebarService: SidebarService,
    private storageService: StorageService
  ) {}

  async ngOnInit() {
    this.sidebarStatus = this.sidebarService.getSidebarStatus();
    const privileges = await this.storageService.getItem('privileges');
    this.menuItems = privileges
      .filter((item: any) => item.display === true)
      .map((item: any) => ({
        title: item.name,
        link: item.url,
      }));
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    this.sidebarStatus = this.sidebarService.getSidebarStatus();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      this.sidebarStatus == 'in' &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.sidebarService.setSidebarStatus('out');
    }
    this.sidebarStatus = this.sidebarService.getSidebarStatus();
  }
}
