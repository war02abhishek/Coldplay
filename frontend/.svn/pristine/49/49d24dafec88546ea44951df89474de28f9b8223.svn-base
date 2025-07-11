import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { SidebarService } from '../../../services/sidebar.service';
import { SpinnerService } from '../../../services/spinner.service';
import { NotificationService } from '../../../services/notification.service';
import { JwtService } from '../../../services/jwt.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  username: string = '';
  roleId: string = '';

  userDropdownItems = [
    { label: 'Home', url: '/dashboard/home' },
    { label: 'Change Password', url: '/dashboard/change-password' },
    { label: 'Logout', action: () => this.logout() },
  ];

  constructor(
    private sidebarService: SidebarService,
    private spinnerService: SpinnerService,
    private storageService: StorageService,
    private notification: NotificationService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.username = await this.jwtService.getUsername();
    this.roleId = await this.jwtService.getRoleId();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  async logout(): Promise<void> {
    try {
      this.spinnerService.showSpinner();
      this.storageService.clear();

      // Optional: Backend logout option if needed
      this.notification.success('You have been logged out successfully.');
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout Error:', error);
      this.notification.error('Something went wrong during logout.');
    } finally {
      this.spinnerService.hideSpinner();
    }
  }
}
