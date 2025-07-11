import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarStatus: 'in' | 'out' = 'out';

  getSidebarStatus(): 'in' | 'out' {
    return this.sidebarStatus;
  }

  setSidebarStatus(status: 'in' | 'out') {
    this.sidebarStatus = status;
  }

  toggleSidebar() {
    this.sidebarStatus = this.sidebarStatus === 'in' ? 'out' : 'in';
  }
}
