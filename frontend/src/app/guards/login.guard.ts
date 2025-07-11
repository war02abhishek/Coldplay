import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  async canActivate(): Promise<boolean> {
    const token = await this.storageService.getItem('jwt_token');
    if (token) {
      this.router.navigate(['/dashboard/home']);
      return false;
    }
    return true;
  }
}
